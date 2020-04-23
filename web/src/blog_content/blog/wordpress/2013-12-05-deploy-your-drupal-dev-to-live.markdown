---
author: cristinallamas
comments: true
date: 2013-12-05 11:42:21+00:00
layout: post
link: https://cristinallamas.wordpress.com/2013/12/05/deploy-your-drupal-dev-to-live/
slug: deploy-your-drupal-dev-to-live
title: Deploy your Drupal (Dev to Live)
wordpress_id: 166
categories:
  - Drupal
tags:
  - deploy
  - drupal
  - live
  - local
  - rsync
  - sync
---

# Sync your Drupal Local and Live site files

## code

Bitbucket (git)

https://confluence.atlassian.com/display/BITBUCKET/Bitbucket+101;jsessionid=265105AEA14AC4B0988746653BF14CB1

## sites/default/files

```````
    $ cd YOUR_DRUPAL_ROOT_DIR/sites/default/files/
    $ rsync -avr \
        --exclude=webform/* \
        --exclude=advagg_js/* \
        --exclude=advagg_css/* \
        --exclude=js/* \
        --exclude=css/* \
        --exclude=tmp/* \
        --exclude=tickets/* \
        --exclude=videos/* \
        --exclude=xmlsitemap/* \
        yourhost:``````/var/www/yoursite/sites/default/files/.
```````

# Sync your database

The Deploy module is designed to allow developers to easily stage Drupal content from one site to another. Deploy automatically manages dependencies between objects (like node references).

https://drupal.org/project/deploy

Deploy Module Demo

http://www.youtube.com/watch?v=7PjwT0HWHxw
