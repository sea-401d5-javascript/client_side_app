'use strict';

require('express')().use(require('express').static('./build')).listen(8080,()=> console.log('Tasty treats up on 8080'));
