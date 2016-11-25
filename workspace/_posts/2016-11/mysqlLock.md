---
title: mysql 锁机制
date: 2016-11-12
layout: post
---

问题描述：

当两个客户端应用同时访问一张表时，会造成死锁。
java.sql.SQLException: Lock wait timeout exceeded; try restarting transaction

select concat('kill ',id,';') from information_schema.processlist where info is not null and time>=5 order by time desc 

2.sql查询 数据库时间
select * from information_schema.processlist where info is not null order by time desc  ----sql查询 数据库时间

SELECT CONCAT('kill ',id,';') FROM information_schema.processlist WHERE info IS NOT NULL AND TIME>5 ORDER BY TIME DESC;

3.mysql死锁  查询
SELECT * FROM information_schema.innodb_trx WHERE trx_state='LOCK WAIT';  ---mysql死锁  查询