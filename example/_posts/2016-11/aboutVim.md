---
title: vim使用记录及总结
date: 2016-11-17
layout: post
---


在 25 年前，当你还在蹒跚学步时，Bram Moolenaar 已经开始为他的 Amiga 计算机开发一款文本编辑器。他曾经是 Unix 上的 vi 用户，但 Amiga 上却没有与其类似的编辑器。经过三年的开发之后，1991 年 11 月 2 日，他发布了 Vim 的第一个版本。

两年之后，随着 2.0 版本的发布，Vim 的功能集已经超过了 vi，所以这款编辑器的全称也被改为了“vi 增强版 （Vi IMproved）”。

现在，刚刚度过 25 岁生日的 Vim，已经可以在绝大部分平台上运行——Windows、OS/2、OpenVMS、BSD、Android、iOS——并且已在 OS X 及很多 Linux 发行版上成为标配软件。它受到了许多赞誉，也受到了许多批评，不同组织或开发者也会围绕它来发起争论，甚至有些面试官会问：“你用 Emacs 还是 Vim？”Vim 已拥有自由许可证，它基于慈善软件证书（charityware license）（“帮助乌干达的可怜儿童”）发布，该证书与 GPL 兼容。

Vim 是一个灵活的、可扩展的编辑器，带有一个强大的插件系统，被深入集成到许多开发工具，并且可以编辑上百种编程语言或文件类型的文件。 在 Vim 诞生二十五年后，Bram Moolenaar 仍然在主导开发并维护它——这真是一个壮举！Vim 曾经在超过 20 年的时间里数次间歇中断开发，但在 2016 年 9 月，它发布了 8.0 版本，添加了许多新功能，为现代程序员用户提供了更多方便。很多年来，Vim 在官网上售卖 T 恤及 logo 贴纸，所得的销售款为支持 ICCF——一个帮助乌干达儿童的德国慈善机构做出了巨大贡献。Vim 所支持的慈善项目深受 Moolenaar 喜爱，Mooleaar 本人也去过乌干达，在基巴莱的一个儿童中心做志愿者。

Vim 在开源历史上记下了有趣的一笔：一个项目，在 25 年中，坚持由一个稳定的核心贡献者维护，拥有超多的用户，但很多人从未了解过它的历史。


转载自：[Vim 迎来了 25 周年纪念日](http://mp.weixin.qq.com/s?__biz=MzAxODI5ODMwOA==&mid=2666539989&idx=1&sn=997c7b6c0b34dc60c6919a36f8a282b8&chksm=80dcef7eb7ab6668f506387448325160d35c0372df2b12f918b715ef40df819e0f68d4503ce6&mpshare=1&scene=23&srcid=1117SFRuuhROzB5HGoi0KZAZ#rd)

vim初级使用(命令介绍)
0.
上下左右键
(){}键
均可将光标定位(自己试试)

1.
vim #在命令行中输入vim,进入vim编辑器

2.
i
#按一下i键,下端显示 --INSERT--
#插入命令,在vim中可能任意字符都有作用

3.
Esc
#退出i(插入)命令进行其它命令使用

4.
:r filename #读入一个文件内容,并写入到当前编辑器中

5.
:w newfilename #将该编辑器中的内容写入到一个新文件中

6.
:w #在编辑的过程中保存文件,相当于word中的ctrl+s

7.
:!ls #在编辑过程中执行shell命令ls

8.
:sh #进入shell命令行,执行完命令后ctrl+d退出重新进入vim编辑继续编辑

9.
:wq #保存文件并退出

10.
ZZ #保存文件并退出,同上一个命令,注意大写

11.
:q! #强制退出,不保存

12.
:set number #使编辑中的文件显示行号

13.
:set nonumber #与上一条命令相反,不显示行号

14.
:help i #查看插入命令帮助

15.
u #撤消上一步操作

16.
/Fedora #查找Fedora字符

17.
:s /Fedora/Redhat #将Fedora字符替换为Redhat(只替换在光标所在的行)

18.
dw #删除单词
dd #删除行

19.
o #打开空白一行

20.
vim + filename #进行文件最后一行进行编辑

21.
vim +n filename #进入文件第n行进行编辑

22.
:1,.s/redhat/fedora
#.号表示当前行,即光标所在行
#将第1行到当前行(.)第一次出现的redhat字符代替为fedora

23.
:1,.s/redhat/fedora/g
#将第1行到当前行(.)所有出现的redhat字符代替为fedora,g全局标志

24.
:1,$s/redhat/fedora/g
#$表示最后一行
#将第1行到最后一行所有出现的redhat字符代替为fedora

25.
:%s/redhat/fedora/g #同上一个命令

26.
:%s/\<redhat\>/fedora/g
#将第1行到最后一行所有出现的redhat字代替为fedora
#字,而不是字符

27.
:f #显示文件内容,状态等等
#同ctrl+g命令

28.
:e! #当前文件,返回到上次保存
:e file #切换编辑文件

29.
:n #当编辑时有多个文件(比如vim file1 file2)时切换到下一个文件,与:e file结合使用