'use strict';

const angular = require('angular');
const app = angular.module('SvW-App', []);

require('./app/app')(app);
require('./services')(app);
