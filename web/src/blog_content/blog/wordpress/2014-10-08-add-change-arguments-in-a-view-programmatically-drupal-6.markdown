---
author: cristinallamas
comments: true
date: 2014-10-08 10:18:46+00:00
layout: post
link: https://cristinallamas.wordpress.com/2014/10/08/add-change-arguments-in-a-view-programmatically-drupal-6/
slug: add-change-arguments-in-a-view-programmatically-drupal-6
title: Add / Change arguments in a view programmatically (Drupal 6)
wordpress_id: 228
categories:
  - Drupal
tags:
  - add
  - arguments
  - change
  - code
  - drupal
  - drupal hook
  - programmatically
  - views
  - views hook
  - views_pre_view
---

```php
function hook_views_pre_view(&$view, &$display_id, &$args) {
        if ($view->name == 'your_view_name') {
             $view->set_arguments(array(arg1,arg2,arg3));
        }
    }
```
