---
author: cristinallamas
comments: true
date: 2016-08-15 09:57:13+00:00
layout: post
link: https://cristinallamas.wordpress.com/2016/08/15/install-mysql-in-osx-el-capitan-with-brew/
slug: install-mysql-in-osx-el-capitan-with-brew
title: Install MySQL in OSX El Capitan with Brew
wordpress_id: 268
categories:
  - Development
  - Drupal
  - OS X
  - SysAdmin
tags:
  - brew
  - el capitan
  - mysql
  - mysql server
  - osx
---

```bash
brew doctor

brew update

brew install mysql

unset TMPDIR

mysqld -initialize --verbose --user=whoami --basedir="$(brew --prefix mysql)" --datadir=/usr/local/var/mysql --tmpdir=/tmp

```

(only use this last one for El Capitan)

```bash
mysql.server start

brew services start mysql

```

Successfully executed thanks to http://stackoverflow.com/questions/34345726/brew-install-mysql-on-mac-os-el-capitan
