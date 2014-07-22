(function (w) {
    var app = angular.module('App', ['firebase']);
    app.constant('DEADLINE', moment('2018-06-15T18:00'));
    app.constant('FIREBASE_URL', 'https://worldcup-2014.firebaseio.com/');
    w.App = app;
})(window);
