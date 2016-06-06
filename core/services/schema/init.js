

var requireAll = require('require-all');
var path       = require('path');
var schemas    = require('./schemas/schema-list');
var Router     = require('koa-router');


module.exports = function*(S){

  // Router shorthand
  var router = new Router({
    prefix: '/' + this.id
  });

  // Register schema api
  router.get('/*', function*(next){
    this.body = 'Smallcloud schema for: ' + this.path.replace('/schema', '');
  });

  // Register routes
  S.http.routes.push(router.routes());



  // XXX
  //console.log('***', schemas);

  // Get schemas in database
  //var dbSchemas = yield S.db.select().from('resource').all();

  // XXX
  //console.log('---', dbSchemas);


  return {
    isServiceApi: true,
    name: this.manifest.name
  };

};