
var Router = require('koa-router');


module.exports = function(S){

  var id = this.id;

  // Router shorthand
  var router = new Router({
    prefix: '/' + id
  });

  // XXX
  //console.log('>>> router:', router);

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