---
author: cristinallamas
comments: true
date: 2014-04-02 10:41:51+00:00
layout: post
link: https://cristinallamas.wordpress.com/2014/04/02/remove-unnecessary-js-in-drupal/
slug: remove-unnecessary-js-in-drupal
title: Remove unnecessary JS in Drupal
wordpress_id: 219
categories:
- Drupal
tags:
- drupal
- drupal 7 drupal 6
- jss
- theme
- theming
---

## Drupal 6



```php
    function mytheme_preprocess_page(&$vars){
        $scripts = drupal_add_js();
        //PRINT THIS ARRAY AND UNSET THE UNWANTED ARRAY// 
        unset($scripts['module']['YOUR_PATH_TO_JS']);
        $vars['scripts']= drupal_get_js('header', $scripts);
    }
```
    




## Drupal 7



```
    function mymodule_js_alter(&$javascript){
      $alias = drupal_get_path_alias($_GET['q']);
      if($alias =="my-page"){
        unset($javascript['sites/all/modules/mymodule/mymodule.js']);
      }
      unset($javascript['sites/all/modules/mymodule/mymodule.js']);
    }
```