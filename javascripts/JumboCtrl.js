(function (app) {
    'use strict';
    app.controller(
        'JumboCtrl',
        [
            '$scope',
            '$timeout',
            'DEADLINE',
            function ($scope, $timeout, deadline) {
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
