
var _          = require('lodash');
var requireAll = require('require-all');
var path       = require('path');
var schemas    = require('./schemas/schema-list').schemas;
var Router     = require('koa-router');
var DepGraph   = require('dependency-graph').DepGraph;
var depGraph   = new DepGraph();


// Helper
depGraph.addSchema = function(schemaName, schemaDef){

  //var bases = {};

  if( 'bases' in schemaDef ){
    //bases[schemaName] = schemaDef.bases;
    schemaDef.bases = Object.keys(schemaDef.bases);
  }

  // XXX
  //console.log('>>> Adding schema', schemaDef);

  this.addNode(schemaName, schemaDef);

  // XXX
  //console.log('-----', this.prototype);

};

depGraph.processSchemas = function(){

  Object.keys(this.nodes).forEach(function(nodeName){

    // XXX
    //console.log('---', nodeName);

    var node = this.getNodeData(nodeName);

    if( !('bases' in node) )
      return;

    node.bases.forEach(function(baseName){
      this.addDependency(nodeName, baseName);
    }, this);

  }, this);

  // XXX
  //console.log('++++++', this);

};


module.exports = function*(S){

  var id = this.id;

  // Router shorthand
  var router = new Router({
    prefix: '/' + id
  });

  // Register schema api
  router.get('/*', function*(){

    // XXX
    console.log('rrr', this.path);

    this.body = 'Smallcloud schema for: ' + this.path.replace('/'+id, '');
  });

  // Register routes
  S.http.routes.push(router.routes());





  // Get Schema db class
  var schemaClass = yield S.db.class.get('Schema');

  // Get known schemas
  var knownSchemas = yield S.db.query('select from Schema limit -1')
    .then(function(records){
      return records.map(function(record){
        return record.type;
      });
    });

  var missignSchemas = _.xor(schemas, knownSchemas);

  //console.log('>>> knownSchemas', knownSchemas);
  //console.log('>>> missignSchemas', missignSchemas);

  // Build graph
  missignSchemas.forEach(function(schemaName){
    depGraph.addSchema(schemaName, require('./schemas/'+schemaName));
  });

  depGraph.processSchemas();


  var dbSchemas = yield depGraph.overallOrder().map(function(schemaName){
    var schemaDef = this.getNodeData(schemaName);
    //console.log('***', schemaDef);
    return schemaClass.create(schemaDef);
  }, depGraph);

  dbSchemas.map(function(schema, index, collection){

    if( !('bases' in schema) )
      return;

    var bases = schema.bases.map(function(baseType){

      return _.find(collection, function(_schema){
        return _schema.type === baseType;
      });

    }).map(function(base){

      // XXX
      //console.log('+++ schema:', schema['@rid'].toString());
      //console.log('+++ base:', base['@rid'].toString());

      return S.db.create('EDGE', 'extendsType')
        .from(schema['@rid'].toString())
        .to(base['@rid'].toString())
        .one();

    });

    // XXX
    console.log('>>> BASES:', bases);


  });

  // XXX
  // TODO: remove
  //yield S.db.query('delete vertex from Schema where version="Schema Draft Version 0.99"');
  //yield S.db.query('delete vertex from E where @version=1');


  // XXX
  //console.log('***', dbSchemas);




  return {
    isServiceApi: true,
    name: this.manifest.name
  };

};