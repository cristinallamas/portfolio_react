---
author: cristinallamas
comments: true
date: 2017-02-24 10:56:18+00:00
layout: post
link: https://cristinallamas.wordpress.com/2017/02/24/drupal7-update-hook-dependencies/
slug: drupal7-update-hook-dependencies
title: Drupal7 update hook dependencies
wordpress_id: 282
categories:
- Development
- Drupal
tags:
- drupal
- drupal 7
- module
- module development
- update dependencies
- update hook
---

You sometimes find that update hooks run in an unwanted order that affects their behaviour or creates errors and makes your site crash. You can override this and specify the order that you want with the following hook in your .install file.

    
```php
function new_module_update_dependencies() {
  // Run new_module update after old_module update.
  $dependencies['new_module'][7001] = array(
    'old_module' => 7000,
  );
 
  return $dependencies;
}
```
