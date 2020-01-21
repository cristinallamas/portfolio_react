---
title: Theme Drupal 7 forms with custom templates
date: '2019-11-28T13:48:00.284Z'
description: 'Theme Drupal 7 forms with custom templates'
---

It's been a while since I posted about Drupal 7. I've been using it lately for a job I've been doing for British Council.

Recently I've had to style few form elements with custom tpl files. It wasn't easy to find propper documentation about this, as I find always when it comes to Drupal.

The solution to this problem was actually pretty simple after all

First create a theme hook with your template file.

```php
/**
 * Implements hook_theme()
 * @return array
 */
function mymodule_theme(){
  $items = array();

  $items['mymodule_custom_template'] = array(
    'path' =>  drupal_get_path('module', 'mymodule'),
    'template' => 'mymodule_custom_template',
    'variables' => array(
      'variable1' => NULL,
      'variable2' => '',
    ),
  );
  return $items;
}
```

Then create your form element

```php

$form['my']['form'] = [
  '#theme' => 'mymodule_custom_template',
  '#variable1' => $variable1,
  '#variable2' => $variable2,
];
```

Then of course we'll use the template in this way

```php
<?php
/**
 * Available variables
 *
 * $variable1 string - your first variable
 * $variable2 string - your second variable
 */
?>
<h1><?php print $variable1; ?></h1>
<h2><?php print $variable2; ?></h2>
```

And that's it! as simple as that!
