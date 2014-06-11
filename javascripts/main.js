(function (w) {
    var app = angular.module('App', ['firebase']);
    app.constant('DEADLINE', moment('2014-06-12T22:00'));
    app.constant('FIREBASE_URL', 'https://worldcup-2014.firebaseio.com/');
    w.App = app;
})(window);
