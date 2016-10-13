---
title: maven获取jar包
date: 2016-10-13
layout: post
---


1.maven代替不了git

maven获取jar包之后，如果jar包本身源码改变了。就要删除本地仓库的jar包，重新从maven私服上拉取。

而如果，maven引入的是java源码，源码保存在git上，也要重新拉取。但是不用做删除操作。

git能检测到代码变化，而maven不能。