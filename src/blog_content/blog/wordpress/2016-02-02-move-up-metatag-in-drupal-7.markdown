---
author: cristinallamas
comments: true
date: 2016-02-02 11:31:50+00:00
layout: post
link: https://cristinallamas.wordpress.com/2016/02/02/move-up-metatag-in-drupal-7/
slug: move-up-metatag-in-drupal-7
title: Move up metatag in Drupal 7
wordpress_id: 253
categories:
  - Development
  - Drupal
tags:
  - alter
  - drupal 7
  - html_head_alter
  - metatag
  - title
---

```php
  /**
    * Implements hook_html_head_alter().
    * moving og:title up in head element list
    */
    function mymodule_html_head_alter(&$head_elements) {span>
      foreach ($head_elements as $key => $element) {
        if($key == 'metatag_og:title') {
          $head_elements[$key]['#weight'] = -999;
        }
      }
    }
```
