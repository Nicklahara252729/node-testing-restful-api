'use strict';

var response = require('../config/res');
var connection = require('../config/conn');

exports.index = function(req, res) {
    response.ok("Hello from the Node JS RESTful side!", res)
};