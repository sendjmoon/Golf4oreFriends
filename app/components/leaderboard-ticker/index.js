'use strict';

module.exports = function(app) {
  app.component('leaderboardTicker', {
    template: require('./leaderboard-ticker-template.html'),
    bindings: {}
  });
};
