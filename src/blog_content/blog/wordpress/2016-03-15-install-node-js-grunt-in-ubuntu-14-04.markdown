---
author: cristinallamas
comments: true
date: 2016-03-15 11:59:56+00:00
layout: post
link: https://cristinallamas.wordpress.com/2016/03/15/install-node-js-grunt-in-ubuntu-14-04/
slug: install-node-js-grunt-in-ubuntu-14-04
title: Install Node.js & Grunt in Ubuntu 14.04
wordpress_id: 258
categories:
- Drupal
---

# First you need to add this for [add-apt-repository](http://manpages.ubuntu.com/manpages/natty/man1/add-apt-repository.1.html) command to work:



```bash  
    $ apt-get install software-properties-common
```




## If not you'll get this error:



```bash
    $ sudo: add-apt-repository: command not found
```




# Install Node



```
    $ sudo add-apt-repository ppa:chris-lea/node.js


    
    $ sudo apt-get update



    
    $ sudo apt-get install nodejs
```



# Install Grunt



```
    $ sudo npm install -g grunt-cli
```
