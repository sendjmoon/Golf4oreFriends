'use strict';

require('!!file?name=[name].[ext]!./html/index.html');
require('./scss/base.scss');

const angular = require('angular');
let golfApp = angular.module('golfApp', [require('angular-route')]);

require('./components')(golfApp);
require('./controllers')(golfApp);

golfApp.config(['$routeProvider', ($rp) => {
  $rp
    .when('/home', {
      template: require('./html/home.html')
    })
    .otherwise({
      redirectTo: '/home'
    });
}]);
