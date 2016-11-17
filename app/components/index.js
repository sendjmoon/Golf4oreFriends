'use strict';

module.exports = function(app) {
  require('./nav-bar')(app);
  require('./leader-ticker')(app);
};
