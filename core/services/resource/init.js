
var Router = require('koa-router');


module.exports = function(S){

  var id = this.id;

  // Router shorthand
  var router = new Router({
    prefix: '/' + id
  });

  // Register resource api
  router.get('/*', function*(next){

    // XXX
    console.log('rrr', this.path);

    this.body = 'Smallcloud resource(s): ' + this.path.replace('/'+id, '');


  });

  router.post('/', function*(next){

    // XXX
    console.log('+++', this.request.body);

    this.body = this.request.body;

  });


  // Register routes
  S.http.routes.push(router.routes());


  // Return API
  return {
    isServiceApi: true,
    name: this.manifest.name
  };

};