(function (app) {
    'use strict';
    app.controller(
        'JumboCtrl',
        [
            '$scope',
            '$timeout',
            'DEADLINE',
            'Storage',
            function ($scope, $timeout, deadline, storage) {
                $scope.deadline = deadline.format('llll');
                var formatDate = function () {
                    $scope.timeLeft = deadline.fromNow();
                    $timeout(formatDate, 1000);
                };

                // start things off
                formatDate();
            }
        ]);
})(window.App);
