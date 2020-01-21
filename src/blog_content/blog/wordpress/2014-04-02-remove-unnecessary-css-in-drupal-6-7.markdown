---
author: cristinallamas
comments: true
date: 2014-04-02 09:48:22+00:00
layout: post
link: https://cristinallamas.wordpress.com/2014/04/02/remove-unnecessary-css-in-drupal-6-7/
slug: remove-unnecessary-css-in-drupal-6-7
title: Remove unnecessary CSS in Drupal 6 & 7
wordpress_id: 210
categories:
- Drupal
tags:
- css
- drupal 6
- drupal 7
- theming
---

add the function to the template.php file in your theme folder




## Drupal 6



```php
    function mytheme_preprocess_page(&$vars){
     $css = $vars['css'];
    //core modules
     unset($css['all']['module']['modules/node/node.css']);
    //contrib
     unset($css['all']['module']['sites/all/modules/contrib/filefield/filefield.css']);
    //custom
    unset($css['all']['module']['sites/all/modules/custom/mymodule/mymodule.css']);
    //theme css
    unset($css['all']['theme']['sites/all/themes/mytheme/mytheme.css']);
    
     $vars['styles'] = drupal_get_css($css);
    }
```




## Drupal 7




    
    function mymodule_css_alter(&$css) {
      $exclude = array(
     //core
       'modules/system/maintenance.css' => FALSE,
    //contrib
        'sites/all/modules/contrib/module/module.css' => FALSE,
    //custom
        'sites/all/modules/custom/module/module.css' => FALSE,
    //theme
        'sites/all/themes/mytheme/mytheme.css' => FALSE,
      );
      $css = array_diff_key($css, $exclude);
    }
