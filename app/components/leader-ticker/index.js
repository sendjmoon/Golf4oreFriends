'use strict';

module.exports = function(app) {
  app.component('leaderTicker', {
    template: require('./leader-ticker-template.html'),
    bindings: {}
  });
};
