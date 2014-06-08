(function (w) {
    var app = angular.module('App', []);
    app.constant('DEADLINE', moment('2014-06-12T15:00'));
    w.App = app;
})(window);
