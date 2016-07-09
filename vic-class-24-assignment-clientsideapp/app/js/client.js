'use strict';

const angular = require('angular');
const IceCreameryApp = angular.module('IceCreameryApp', []);

require('./icecream/icecream')(IceCreameryApp);
require('./milkshake/milkshake')(IceCreameryApp);
