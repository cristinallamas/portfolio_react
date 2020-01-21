---
author: cristinallamas
comments: true
date: 2014-03-24 10:29:14+00:00
layout: post
link: https://cristinallamas.wordpress.com/2014/03/24/osx-how-to-reset-forgotten-password/
slug: osx-how-to-reset-forgotten-password
title: OSX  How to Reset forgotten mysql root password
wordpress_id: 201
categories:
  - Drupal
tags:
  - mysql
  - osx
  - password
  - reset
  - sudo
---

1. we need to stop the mysql server `mysql.server stop`

2) `sudo /usr/local/mysql/bin/mysqld_safe --skip-grant-tables`

3. from a different bash tab `/usr/local/mysql/bin/mysql mysql`

4) Once we login in mysql we have to type `'UPDATE user SET Password=PASSWORD('yourpass') WHERE Host='localhost' AND User='root';'`
