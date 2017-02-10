var express = require('express');
var serveStatic = require('serve-static');
var path = require('path');
var open = require('open');
var utils = require('./utils');

var reidsPool = require('redis-connection-pool')

module.exports = function (dir) {
  dir = dir || '.';

  // 初始化express
  var app = express();
  var router = express.Router();
  app.use('/assets', serveStatic(path.resolve(dir, 'assets')));
  app.use(router);

  // 渲染文章
  router.get('/posts/*', function (req, res, next) {
    var name = utils.stripExtname(req.params[0]);
    var file = path.resolve(dir, '_posts', name + '.md');
    var html = utils.renderPost(dir, file);
    res.end(html);
  });

  // 渲染文章
  router.get('/'+dir+'/posts/*', function (req, res, next) {
    var name = utils.stripExtname(req.params[0]);
    var file = path.resolve(dir, '_posts', name + '.md');
    var html = utils.renderPost(dir, file);
    res.end(html);
  });

  //从环境变量里读取redis服务器的ip地址
  var redisHost = process.env['REDIS_PORT_6379_TCP_ADDR'] || '127.0.0.1';
  var redisPort = process.env['REDIS_PORT_6379_TCP_PORT']	|| 6379;

  var reidsClient = reidsPool('myRedisPool', {PORT:redisPort, HOST:redisHost, MAX_CLIENTS:100});

  // 渲染列表
  router.get('/', function (req, res, next) {
    reidsClient.get('access_count', function(err, countNum){
      if(err){
        return res.send('get access count error')
      }
      if(!countNum){
        countNum = 1
      }
      else{
        countNum = parseInt(countNum) + 1
      }
      reidsClient.set('access_count', countNum, function(err){
        if(err){
          return res.send('set access count error')
        }
        // res.send('total visited: '+countNum.toString())
        console.log('total visited: '+countNum.toString());
        var html = utils.renderIndex(dir,countNum.toString());
        res.end(html);
      })
    })

  });

  router.get('/*', function (req, res, next) {
    console.log(req.params[0]);
    console.log(req.query.a);
  });

  var config = utils.loadConfig(dir);
  var port = config.port || 3000;
  var url = 'http://127.0.0.1:' + port;
  app.listen(port);
  open(url);
};
