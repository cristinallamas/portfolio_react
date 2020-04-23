---
author: cristinallamas
comments: true
date: 2014-02-21 10:38:32+00:00
layout: post
link: https://cristinallamas.wordpress.com/2014/02/21/useful-and-most-used-mysql-commands/
slug: useful-and-most-used-mysql-commands
title: Useful and Most used mysql commands
wordpress_id: 191
categories:
  - Drupal
tags:
  - database
  - db
  - mysql
  - useful commands
---

## See the description of the fields 

    `DESC atd_order_extras;`

## Add a new field to an existing table (at the beginning)

    `ALTER TABLE table ADD field VARCHAR(10) FIRST;`

## Add a new field to an existing table (after a concrete field)

    `ALTER TABLE table ADD field VARCHAR(10) AFTER another_field;`

## Delete a field from an existing table

`ALTER TABLE table DROP field;`
