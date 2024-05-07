---
title: 使用 Next.js 搭建个人博客
date: 2024-05-07 22:03
description: npm版本踩坑记录
---

# npm版本踩坑记录

通常我们一般会使用nvm或n来对node版本进行管理，两者都有一个共同的特点：切换到不同的node版本时，npm版本也会切换到对应的版本。
然而，在某些情况下，切换node版本后，通过`npm -v`和`which npm`输出发现，npm版本并没有切换，或者切换到了不对应的版本。

nvm使用nvm可能的原因：
- 例如在 node 18 版本时，指定安装了某个版本的npm，此时失效。

解决方法：

- nvm uninstall [异常node版本]
- rm which npm 异常npm版本文件
- nvm install [异常node版本]

  n使用n出现的原因未知（配置的时间太久了，一时想不起来为什么会这样）
  解决方法：

- n 卸载所有的node版本
- 卸载全局安装node的npm和npx:`sudo npm uninstall -g npm`
- n install [node版本]

此时可能会出现`npm not found`，安装多个版本node就莫名其妙好了。