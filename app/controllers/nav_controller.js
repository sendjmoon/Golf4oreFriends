'use strict';

module.exports = function(app) {
  app.controller('NavController', ['$http', function($http) {
    console.log($http);
  }]);
};
