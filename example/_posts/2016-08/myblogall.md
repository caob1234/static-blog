---
title: 静态博客项目总结
date: 2016-08-27
layout: post
---

这是一个失败的项目。刚才又是一个意外
\r 相当于回车
\n 新的一行
这个项目的功能相当的弱，但是有必要把他保存下来。

说完上面这些，还是让我来总结下吧！
首先，express，以及读取文件框架和MarkDown格式的使用，都是第一次，算长见识了吧。
其次，用intellij idea集成开发node开发环境，很爽，延续了idea的高效智能。单点调试。
最后，docker的全面使用，用docker run开启容器的方式，可以代替pm2启动node项目。再用docker exec查看docker container内部进程。
windows开发调试，然后上传linux运行部署，一气呵成。总的来说，用docker开发是一件很惬意的事情，要继续利用的docker。

今天的任务，看完Java数据结构中的树这一章，折腾下用node制作论坛项目。

用node制作论坛项目主要使用Semantic Ui，这个ui简单整洁美观，是一个值得学习的ui。

最后要能做一两道关于java collection的习题就更好了。

来总结下开发给项目遇到的nodejs技术吧。

1.express

[中文express官网](http://www.expressjs.com.cn/)
[express官网](http://expressjs.com/)

express是一个web框架。var app=express();引入之后初始化express。

```JavaScript
var express = require('express');
var app = express();

app.get('/', function(req, res){//获取http请求。
  res.send('hello world');//通过response输出到页面。
  req.query.requestParam;//获取request请求中的参数。
});

app.listen(3000);
```
另外可以用log4js做日志输出，部署在生产上。

2.应该遍历文件夹而不是遍历文件

应该遍历文件夹而不是遍历文件，在遍历文件外层再包一层遍历文件夹的操作，用于分类文件类型。使得层次更清晰

3.express路由规则

用express处理静态文件时，路由规则作为参数传递到function里面的，若用nginx做反向代理之后，相对路径随之变化会发生找不到页面的404错误。
