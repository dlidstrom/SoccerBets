(function (app) {
    'use strict';
    app.controller(
        'MatchCtrl',
        [
            '$rootScope',
            '$scope',
            '$firebase',
            'Storage',
            'DEADLINE',
            'FIREBASE_URL',
            function ($rootScope, $scope, $firebase, storage, deadline, FIREBASE_URL) {
                $scope.className = function (team) {
                    if (team === "South Korea") team = "kor";
                    else if (team === "Holland") team = "ned";
                    else if (team === "Cameroon") team = "cmr";
                    else if (team === "Spain") team = "esp";
                    else if (team === "Ivory Coast") team = "civ";
                    else if (team === "Schweiz") team = "sui";
                    else if (team === "Iran") team = "irn";
                    else if (team === "Japan") team = "jpn";
                    else if (team === "Nigeria") team = "nga";
                    else if (team === "Costa Rica") team = "crc";
                    else if (team === "Bosnia") team = "bih";
                    return 'flag-' + team.substring(0, 3).toLowerCase();
                };
                $scope.deadlinePassed = function () {
                    var isBefore = deadline.isBefore();
                    var anonymous = !$rootScope.user;
                    var result = isBefore || anonymous;
                    return result;
                };

                $scope.winnerChanged = function (winner) {
                    controller.winnerRef.update(winner);
                };

                $scope.optionChanged = function ($index, result) {
                    var ref = controller.matchesRef.child('match-' + ($index < 10 ? '0' + $index : $index));
                    ref.update({result: result});
                };

                var controller = this;
                $rootScope.$on('events:login', function (e, user) {
                    var fb = new Firebase(FIREBASE_URL);
                    controller.matchesRef = fb.child('users').child(user.id).child('matches');
                    controller.winnerRef = fb.child('users').child(user.id).child('winner');
                    $scope.matches = $firebase(controller.matchesRef);
                    $scope.storedWinner = $firebase(controller.winnerRef);

                    controller.matchesRef.on('value', function (snapshot) {
                        $scope.teams = _(snapshot.val())
                            .pluck('homeTeam')
                            .uniq()
                            .sort()
                            .map(function (n) {
                                return { name: n };
                            })
                            .value();
                        controller.winnerRef.once('value', function (winnerSnap) {
                            var winner = winnerSnap.val();
                            if (!winner) return;
                            $scope.winner = _($scope.teams)
                                .find(function (t) {
                                    return t.name === winner.name;
                                });
                        });
                    });
                });
        }]);
})(window.App);