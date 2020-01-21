---
author: cristinallamas
comments: true
date: 2013-10-23 09:36:35+00:00
layout: post
link: https://cristinallamas.wordpress.com/2013/10/23/add-custom-css-and-js-within-a-drupal-module/
slug: add-custom-css-and-js-within-a-drupal-module
title: Add custom css and js within a drupal module
wordpress_id: 127
categories:
- Development
- Drupal
tags:
- css
- drupal
- javascript
- js
- module
---

As easy as to add this 2 lines:

```php

    drupal_add_js(drupal_get_path('module', 'mymodule') . '/myfile.js');
    drupal_add_css(drupal_get_path('module', 'mymodule') . '/myfile.css');
```