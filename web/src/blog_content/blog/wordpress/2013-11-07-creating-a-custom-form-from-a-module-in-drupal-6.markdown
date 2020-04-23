---
author: cristinallamas
comments: true
date: 2013-11-07 11:08:56+00:00
layout: post
link: https://cristinallamas.wordpress.com/2013/11/07/creating-a-custom-form-from-a-module-in-drupal-6/
slug: creating-a-custom-form-from-a-module-in-drupal-6
title: Creating a custom form from a module in Drupal 6
wordpress_id: 156
categories:
  - Drupal
tags:
  - custom form module
  - drupal 6
  - drupal hook
  - form
  - module
---

# Permissions

This will check if the user has permissions to view the form

```php
    function myform_perm() {
      return array('access myform content');
    }
```

# Path

What url will lead us to the form, useful to start it with 'admin' so non-admin users can't access it.

```php
    function myform_menu() {
      $items = array();
      $items['path/to/my/form'] = array(
        'title' => t('My Form'),
        'page callback' => 'drupal_get_form',
        'page arguments' => array('myform_form'),
        'access arguments' => array('access myform content'),
        'type' => MENU_NORMAL_ITEM,
      );
      return $items;
    }
```

# Form

```php
    function myform_form() {
      $form['message'] = array(
        '#type' => 'textarea',
        '#title' => t('Message'),
        '#required' => TRUE,
      );
      $form['submit'] = array(
        '#type' => 'submit',
        '#value' => t('Send')
      );
      return $form;
    }
```

#  Validation

```php
    function myForm_validate($node, &$form) {
      if (isset($node->end) && isset($node->start)) {
        if ($node->start > $node->end) {
          <a href="https://api.drupal.org/api/drupal/includes%21form.inc/function/form_set_error/6" title="File an error against a form element.">form_set_error</a>('time', <a href="https://api.drupal.org/api/drupal/includes%21common.inc/function/t/6" title="Translate strings to the page language or a given language.">t</a>('An event may not end before it starts.'));
        }
      }
    }
```
