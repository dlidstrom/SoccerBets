(function (app) {
    'use strict';
    app.controller(
        'AuthCtrl',
        [
            '$firebase',
            '$firebaseSimpleLogin',
            'FIREBASE_URL',
            function ($firebase, $firebaseSimpleLogin, FIREBASE_URL) {
                var ref = new Firebase(FIREBASE_URL);
                this.auth = $firebaseSimpleLogin(ref);
            }]);
})(window.App);