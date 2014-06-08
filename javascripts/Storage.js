(function (app) {
    'use strict';
    app.factory(
        'Storage',
        function () {
            var STORAGE_ID = "SoccerBets-WorldCup-2014";
            var MATCHES_ID = STORAGE_ID + "-Matches";
            var NAME_ID = STORAGE_ID + "-Name";
            var WINNER_ID = STORAGE_ID + "-Winner";

            return {
                getMatches: function (defaultMatches) {
                    var stored = localStorage.getItem(MATCHES_ID);
                    if (stored) return JSON.parse(stored);
                    return defaultMatches;
                },
                putMatches: function (matches) {
                    localStorage.setItem(MATCHES_ID, JSON.stringify(matches));
                },
                getName: function (defaultName) {
                    var stored = localStorage.getItem(NAME_ID);
                    if (stored) return JSON.parse(stored).name;
                    return defaultName;
                },
                setName: function (name) {
                    localStorage.setItem(NAME_ID, JSON.stringify({ name: name }));
                },
                getWinner: function (defaultWinner) {
                    var stored = localStorage.getItem(WINNER_ID);
                    if (stored) return JSON.parse(stored);
                    return null;
                },
                setWinner: function (winner) {
                    if (winner) localStorage.setItem(WINNER_ID, JSON.stringify(winner));
                    else localStorage.removeItem(WINNER_ID);
                }
            };
    });
})(window.App);