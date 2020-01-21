---
author: cristinallamas
comments: true
date: 2015-09-30 15:13:04+00:00
layout: post
link: https://cristinallamas.wordpress.com/2015/09/30/drupal-7-override-image-styles-programmatically/
slug: drupal-7-override-image-styles-programmatically
title: Drupal 7 override image styles programmatically
wordpress_id: 248
categories:
- Drupal
tags:
- code
- drupal
- image styles
---
```php
    /**
     * Implements hook_image_styles_alter().
     */
    function mymodule_image_styles_alter(&$styles) {
      // Check that we only affect a default style.
      if (isset($styles['thumbnail_large']) && isset($styles['thumbnail_large']['storage'])) {
    
        if ($styles['thumbnail_large']['storage'] == IMAGE_STORAGE_DEFAULT) {
    
          $styles['thumbnail_large'] = array(
            'name' => 'thumbnail_large',
            'effects' => array(
              1 => array(
                'label' => 'Javascript crop',
                'help' => 'Create a crop with a javascript toolbox.',
                'effect callback' => 'imagecrop_effect',
                'form callback' => 'imagecrop_effect_form',
                'summary theme' => 'imagecrop_effect_summary',
                'module' => 'imagecrop',
                'name' => 'imagecrop_javascript',
                'data' => array(
                  'width' => '620',
                  'height' => '350',
                  'xoffset' => 'center',
                  'yoffset' => 'center',
                  'resizable' => 1,
                  'downscaling' => 1,
                  'aspect_ratio' => 'CROP',
                  'disable_if_no_data' => 1,
                ),
                'weight' => '1',
              ),
              2 => array(
                'label' => 'Scale and crop',
                'help' => 'Scale and crop will maintain the aspect-ratio of the original image, then crop the larger dimension. This is most useful for creating perfectly square thumbnails without stretching the image.',
                'effect callback' => 'image_scale_and_crop_effect',
                'dimensions callback' => 'image_resize_dimensions',
                'form callback' => 'image_resize_form',
                'summary theme' => 'image_resize_summary',
                'module' => 'image',
                'name' => 'image_scale_and_crop',
                'data' => array(
                  'width' => '620',
                  'height' => '350',
                ),
                'weight' => '2',
              ),
            ),
            'label' => 'thumbnail_large',
          );
        }
      }
    }
```