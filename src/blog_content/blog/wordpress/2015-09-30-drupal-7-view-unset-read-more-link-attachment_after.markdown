---
author: cristinallamas
comments: true
date: 2015-09-30 14:58:54+00:00
layout: post
link: https://cristinallamas.wordpress.com/2015/09/30/drupal-7-view-unset-read-more-link-attachment_after/
slug: drupal-7-view-unset-read-more-link-attachment_after
title: Drupal 7 View unset Read More link (attachment_after) programmatically
wordpress_id: 245
categories:
  - Development
  - Drupal
tags:
  - drupal
  - views
---

```php
function mymodule_views_post_build(&$view) {
      switch ($view->name) {
        case 'my_view_name':
          $view->attachment_after = '';
          unset($view->attachment_after);
        break;
      }
    }
```
