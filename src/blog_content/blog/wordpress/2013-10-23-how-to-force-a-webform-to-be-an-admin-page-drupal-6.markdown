---
author: cristinallamas
comments: true
date: 2013-10-23 09:26:34+00:00
layout: post
link: https://cristinallamas.wordpress.com/2013/10/23/how-to-force-a-webform-to-be-an-admin-page-drupal-6/
slug: how-to-force-a-webform-to-be-an-admin-page-drupal-6
title: How to force a Webform to be an admin page (Drupal 6)
wordpress_id: 122
categories:
- Development
- Drupal
tags:
- admin page
- drupal 6
- hook_form_alter
- hook_init
- hook_menu
- webform
---

I've created a WebForm and I've been modifying it with hook_form_alter inside a custom module. Another thing I wanted to do is make the page be an admin page, I did changed the path to 'admin/mypath' but it didn't worked.The solution I've come with is divided in two parts:

1- Show the admin theme

```php
    function mymodule_init(){
    $path = drupal_get_path_alias($_GET['q']);
     if($path == 'admin/mypath'){
     global $custom_theme;
     $custom_theme = variable_get('admin_theme', '0');
     drupal_add_css(drupal_get_path('module', 'system') .'/admin.css', 'module');
     }
    }
```

2- Restrict the access

```php

    function mymodule_nodeapi (&$node, $op){ 
    // Load the currently logged in user. 
    global $user; 
    if($node->path == 'admin/mypath' && $op == 'view'){
    if(user_is_anonymous()){
     drupal_access_denied();
     }
     // Check if the user has the 'ATD Staff' role.
     else if (in_array('my_allowed_role', $user->roles)) {
     drupal_access_denied();
     }
     }
     }
```

No need to say, if somebody has a better solution please write a comment here.
