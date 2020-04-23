---
author: cristinallamas
comments: true
date: 2014-02-17 11:05:04+00:00
layout: post
link: https://cristinallamas.wordpress.com/2014/02/17/disable-drupal-cache-with-drush/
slug: disable-drupal-cache-with-drush
title: Disable Drupal cache with Drush
wordpress_id: 182
categories:
  - Drupal
tags:
  - advagg
  - cache
  - clear cache
  - command line
  - disable
  - drupal
  - drush
  - memcache
---

```
drush vset cache 0

drush vset preprocess_css 0

drush vset preprocess_js 0
```

Disable advagg and memcache if you have it enabled

```
drush dis -y advagg

drush dis -y memcache
```

Finally we clear all the cache.

`drush cc all`
