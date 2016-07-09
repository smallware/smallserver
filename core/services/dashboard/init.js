
var Router = require('koa-router');


module.exports = function(S){

  var id = this.id;

  // XXX
  console.log('>>> THIS:', this);

  // Router shorthand
  var router = new Router({
    prefix: '/' + id
  });

  // Register resource api
  router.get('/*', function*(next){

    // XXX
    console.log('rrr', this.path);

    this.body = 'Smallcloud dashboard: ' + this.path.replace('/'+id, '');


  });


  // Register routes
  S.http.routes.push(router.routes());


  // Return API
  return {
    isServiceApi: true,
    name: this.manifest.name
  };

};