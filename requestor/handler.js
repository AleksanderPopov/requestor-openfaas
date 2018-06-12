const request = require('request');
"use strict";

module.exports = (context, callback) => {
    require('./built/function-handler').handleFunctionCall(context, callback);
};
