
var koa    = require('koa');
var path   = require('path');
var Static = require('koa-static');
var Router = require('koa-router');
var parser = require('koa-bodyparser');

module.exports = function*(S){

  // Initialize http server
  var server = koa();

  // Static file serving
  var root = path.resolve(__dirname, '../../../static');
  server.use(Static(root));

  // Body parser
  server.use(parser());

  return {
    server: server,
    routes: []
  };

};