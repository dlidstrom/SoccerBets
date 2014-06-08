(function (app) {
    'use strict';
    app.controller(
        'MatchCtrl',
        [
            '$scope',
            'Storage',
            'DEADLINE',
            function ($scope, storage, deadline) {
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
                    return deadline.isBefore();
                };

                $scope.winnerChanged = function (winner) {
                    storage.setWinner(winner);
                };

                $scope.optionChanged = function () {
                    storage.putMatches($scope.matches);
                };

                $scope.matches = storage.getMatches([
                    {
                        date: '12-jun',
                        time: '22:00',
                        homeTeam: 'Brazil',
                        awayTeam: 'Croatia',
                        stadium: 'Sao Paolo',
                        channel: 'SVT',
                    },
                    {
                        date: '13-jun',
                        time: '18.00',
                        homeTeam: 'Mexico',
                        awayTeam: 'Cameroon',
                        stadium: 'NATAL',
                        channel: 'TV4',
                    },
                    {
                        date: '13-jun',
                        time: '21.00',
                        homeTeam: 'Spain',
                        awayTeam: 'Holland',
                        stadium: 'SALVADOR',
                        channel: 'SVT',
                    },
                    {
                        date: '13-jun',
                        time: '24.00',
                        homeTeam: 'Chile',
                        awayTeam: 'Australia',
                        stadium: 'CUIABA',
                        channel: 'TV4',
                    },
                    {
                        date: '14-jun',
                        time: '18.00',
                        homeTeam: 'Colombia',
                        awayTeam: 'Greece',
                        stadium: 'BELO HORIZONTE',
                        channel: 'SVT',
                    },
                    {
                        date: '14-jun',
                        time: '21.00',
                        homeTeam: 'Uruguay',
                        awayTeam: 'Costa Rica',
                        stadium: 'FORTALEZA',
                        channel: 'TV4',
                    },
                    {
                        date: '14-jun',
                        time: '24.00',
                        homeTeam: 'England',
                        awayTeam: 'Italy',
                        stadium: 'MANAUS',
                        channel: 'TV4',
                    },
                    {
                        date: '15-jun',
                        time: '03.00',
                        homeTeam: 'Ivory Coast',
                        awayTeam: 'Japan',
                        stadium: 'RECIFE',
                        channel: 'TV4',
                    },
                    {
                        date: '15-jun',
                        time: '18.00',
                        homeTeam: 'Schweiz',
                        awayTeam: 'Ecuador',
                        stadium: 'BRASILIA',
                        channel: 'TV4',
                    },
                    {
                        date: '15-jun',
                        time: '21.00',
                        homeTeam: 'France',
                        awayTeam: 'Honduras',
                        stadium: 'PORTO ALEGRE',
                        channel: 'SVT',
                    },
                    {
                        date: '15-jun',
                        time: '24.00',
                        homeTeam: 'Argentina',
                        awayTeam: 'Bosnia',
                        stadium: 'RIO DE JANEIRO',
                        channel: 'TV4',
                    },
                    {
                        date: '16-jun',
                        time: '18.00',
                        homeTeam: 'Germany',
                        awayTeam: 'Portugal',
                        stadium: 'SALVADOR',
                        channel: 'SVT',
                    },
                    {
                        date: '16-jun',
                        time: '21.00',
                        homeTeam: 'Iran',
                        awayTeam: 'Nigeria',
                        stadium: 'CURITIBA',
                        channel: 'TV4',
                    },
                    {
                        date: '16-jun',
                        time: '24.00',
                        homeTeam: 'Ghana',
                        awayTeam: 'USA',
                        stadium: 'NATAL',
                        channel: 'SVT',
                    },
                    {
                        date: '17-jun',
                        time: '18.00',
                        homeTeam: 'Belgium',
                        awayTeam: 'Algeria',
                        stadium: 'BELO HORIZONTE',
                        channel: 'SVT',
                    },
                    {
                        date: '17-jun',
                        time: '21.00',
                        homeTeam: 'Brazil',
                        awayTeam: 'Mexico',
                        stadium: 'FORTALEZA',
                        channel: 'TV4',
                    },
                    {
                        date: '17-jun',
                        time: '24.00',
                        homeTeam: 'Russia',
                        awayTeam: 'South Korea',
                        stadium: 'CUIABA',
                        channel: 'SVT',
                    },
                    {
                        date: '18-jun',
                        time: '18.00',
                        homeTeam: 'Australia',
                        awayTeam: 'Holland',
                        stadium: 'PORTO ALEGRE',
                        channel: 'SVT',
                    },
                    {
                        date: '18-jun',
                        time: '21.00',
                        homeTeam: 'Spain',
                        awayTeam: 'Chile',
                        stadium: 'RIO DE JANEIRO',
                        channel: 'TV4',
                    },
                    {
                        date: '18-jun',
                        time: '24.00',
                        homeTeam: 'Cameroon',
                        awayTeam: 'Croatia',
                        stadium: 'MANAUS',
                        channel: 'SVT',
                    },
                    {
                        date: '19-jun',
                        time: '18.00',
                        homeTeam: 'Colombia',
                        awayTeam: 'Ivory Coast',
                        stadium: 'BRASILIA',
                        channel: 'TV4',
                    },
                    {
                        date: '19-jun',
                        time: '21.00',
                        homeTeam: 'Uruguay',
                        awayTeam: 'England',
                        stadium: 'SAO PAOLO',
                        channel: 'SVT',
                    },
                    {
                        date: '19-jun',
                        time: '24.00',
                        homeTeam: 'Japan',
                        awayTeam: 'Greece',
                        stadium: 'NATAL',
                        channel: 'TV4',
                    },
                    {
                        date: '20-jun',
                        time: '18.00',
                        homeTeam: 'Italy',
                        awayTeam: 'Costa Rica',
                        stadium: 'RECIFE',
                        channel: 'SVT',
                    },
                    {
                        date: '20-jun',
                        time: '21.00',
                        homeTeam: 'Schweiz',
                        awayTeam: 'France',
                        stadium: 'SALVADOR',
                        channel: 'TV4',
                    },
                    {
                        date: '20-jun',
                        time: '24.00',
                        homeTeam: 'Honduras',
                        awayTeam: 'Ecuador',
                        stadium: 'CURITIBA',
                        channel: 'SVT',
                    },
                    {
                        date: '21-jun',
                        time: '18.00',
                        homeTeam: 'Argentina',
                        awayTeam: 'Iran',
                        stadium: 'BELO HORIZONTE',
                        channel: 'TV4',
                    },
                    {
                        date: '21-jun',
                        time: '21.00',
                        homeTeam: 'Germany',
                        awayTeam: 'Ghana',
                        stadium: 'FORTALEZA',
                        channel: 'SVT',
                    },
                    {
                        date: '21-jun',
                        time: '24.00',
                        homeTeam: 'Nigeria',
                        awayTeam: 'Bosnia',
                        stadium: 'CUIABA',
                        channel: 'TV4',
                    },
                    {
                        date: '22-jun',
                        time: '18.00',
                        homeTeam: 'Belgium',
                        awayTeam: 'Russia',
                        stadium: 'RIO DE JANEIRO',
                        channel: 'SVT',
                    },
                    {
                        date: '22-jun',
                        time: '21.00',
                        homeTeam: 'South Korea',
                        awayTeam: 'Algeria',
                        stadium: 'PORTO ALEGRE',
                        channel: 'TV4',
                    },
                    {
                        date: '22-jun',
                        time: '24.00',
                        homeTeam: 'USA',
                        awayTeam: 'Portugal',
                        stadium: 'MANAUS',
                        channel: 'SVT',
                    },
                    {
                        date: '23-jun',
                        time: '18.00',
                        homeTeam: 'Holland',
                        awayTeam: 'Chile',
                        stadium: 'SAO PAOLO',
                        channel: 'TV4',
                    },
                    {
                        date: '23-jun',
                        time: '18.00',
                        homeTeam: 'Australia',
                        awayTeam: 'Spain',
                        stadium: 'CURITIBA',
                        channel: 'TV4',
                    },
                    {
                        date: '23-jun',
                        time: '22.00',
                        homeTeam: 'Croatia',
                        awayTeam: 'Mexico',
                        stadium: 'RECIFE',
                        channel: 'SVT',
                    },
                    {
                        date: '23-jun',
                        time: '22.00',
                        homeTeam: 'Cameroon',
                        awayTeam: 'Brazil',
                        stadium: 'BRASILIA',
                        channel: 'SVT',
                    },
                    {
                        date: '24-jun',
                        time: '18.00',
                        homeTeam: 'Costa Rica',
                        awayTeam: 'England',
                        stadium: 'BELO HORIZONTE',
                        channel: 'SVT',
                    },
                    {
                        date: '24-jun',
                        time: '18.00',
                        homeTeam: 'Italy',
                        awayTeam: 'Uruguay',
                        stadium: 'NATAL',
                        channel: 'SVT',
                    },
                    {
                        date: '24-jun',
                        time: '22.00',
                        homeTeam: 'Greece',
                        awayTeam: 'Ivory Coast',
                        stadium: 'FORTALEZA',
                        channel: 'TV4',
                    },
                    {
                        date: '24-jun',
                        time: '22.00',
                        homeTeam: 'Japan',
                        awayTeam: 'Colombia',
                        stadium: 'CUIABA',
                        channel: 'TV4',
                    },
                    {
                        date: '25-jun',
                        time: '18.00',
                        homeTeam: 'Bosnia',
                        awayTeam: 'Iran',
                        stadium: 'SALVADOR',
                        channel: 'TV4',
                    },
                    {
                        date: '25-jun',
                        time: '18.00',
                        homeTeam: 'Nigeria',
                        awayTeam: 'Argentina',
                        stadium: 'PORTO ALEGRE',
                        channel: 'TV4',
                    },
                    {
                        date: '25-jun',
                        time: '22.00',
                        homeTeam: 'Ecuador',
                        awayTeam: 'France',
                        stadium: 'RIO DE JANEIRO',
                        channel: 'SVT',
                    },
                    {
                        date: '25-jun',
                        time: '22.00',
                        homeTeam: 'Honduras',
                        awayTeam: 'Schweiz',
                        stadium: 'MANAUS',
                        channel: 'SVT',
                    },
                    {
                        date: '26-jun',
                        time: '18.00',
                        homeTeam: 'Portugal',
                        awayTeam: 'Ghana',
                        stadium: 'BRASILIA',
                        channel: 'SVT',
                    },
                    {
                        date: '26-jun',
                        time: '18.00',
                        homeTeam: 'USA',
                        awayTeam: 'Germany',
                        stadium: 'RECIFE',
                        channel: 'SVT',
                    },
                    {
                        date: '26-jun',
                        time: '22.00',
                        homeTeam: 'Algeria',
                        awayTeam: 'Russia',
                        stadium: 'CURITIBA',
                        channel: 'TV4',
                    },
                    {
                        date: '26-jun',
                        time: '22.00',
                        homeTeam: 'South Korea',
                        awayTeam: 'Belgium',
                        stadium: 'SAO PAOLO',
                        channel: 'TV4',
                    }
    /*28-jun  18.00   Åttondel 1, 1A-2B   BELO HORIZONTE  SVT
    28-jun  22.00   Åttondel 2, 1C-2D   RIO DE JANEIRO  TV4
    29-jun  18.00   Åttondel 3, 1B-2A   FORTALEZA   TV4
    29-jun  22.00   Åttondel 4, 1D-2C   RECIFE  SVT
    30-jun  18.00   Åttondel 5, 1E-2F   BRASILIA    svt
    30-jun  22.00   Åttondel 6, 1G-2H   PORTO ALEGRE    TV4
    01-jul  18.00   Åttondel 7, 1F-2E   SAO PAOLO   TV4
    01-jul  22.00   Åttondel 8, 1H-2G   SALVADOR    svt
    04-jul  18.00   Kvart 1, vinnare Å5-Å6  RIO DE JANEIRO  SVT
    04-jul  22.00   Kvart 2, vinnare Å1-Å2  FORTALEZA   TV4
    05-jul  18.00   Kvart 3, vinnare Å7-Å8  BRASILIA    TV4
    05-jul  22.00   Kvart 4, vinnare Å3-Å4  SALVADOR    svt
    08-jul  22.00   Semi 1, vinnare K2-K1   BELO HORIZONTE  TV4
    09-jul  22.00   Semi 2, vinnare K4-K3   SAO PAOLO   svt
    12-jul  22.00   Bronsmatch  BRASILIA    svt
    13-jul  21.00   Final   RIO DE JANEIRO  TV4
    */
                ]);

            $scope.teams = _($scope.matches)
                .uniq('homeTeam')
                .pluck('homeTeam')
                .sort()
                .map(function (n) {
                    return { name: n };
                })
                .value();
            var storedWinner = storage.getWinner('');
            if (storedWinner) {
                $scope.winner = _($scope.teams)
                    .find(function (t) {
                        return t.name === storedWinner.name;
                    });
            }
        }]);
})(window.App);