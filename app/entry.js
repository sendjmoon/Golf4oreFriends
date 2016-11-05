'use strict';

require('!!file?name=[name].[ext]!./html/index.html');
require('./scss/base.scss');

const angular = require('angular');
let golfApp = angular.module('golfApp', []);

require('./components')(golfApp);
