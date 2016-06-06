
var include = require('../../include');
var graph   = require('./graph');
var _       = require('lodash');





module.exports = function*(path, doFork){

  // Pointer
  var S = this;

  // Setup
  var candidates    = include({path: path, depth: 1});
  var validServices = _.reduce(candidates, graph.validate, {});

  // Process valid installed core services
  var serviceGraph = _.reduce(validServices, graph.process, {});

  // Initialize and obtain service APIs
  var serviceApis  = yield serviceGraph.init.call(S, true);



  // Return service apis
  return serviceApis;
};