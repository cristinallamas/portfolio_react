---
author: cristinallamas
comments: true
date: 2017-09-14 11:49:11+00:00
layout: post
link: https://cristinallamas.wordpress.com/2017/09/14/remove-a-contrib-module-stylesheet-in-drupal-8-theme/
slug: remove-a-contrib-module-stylesheet-in-drupal-8-theme
title: Remove a contrib module stylesheet in Drupal 8 theme
wordpress_id: 296
categories:
- Drupal
tags:
- drupal8
- performance
- theming
---

You'll need to add the following to your info.yml, yes, not to libraries.

```
stylesheets-remove:
- '@module_name/path/to/your/file.css'
```