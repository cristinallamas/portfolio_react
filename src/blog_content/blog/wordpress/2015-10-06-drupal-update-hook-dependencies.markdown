---
author: cristinallamas
comments: true
date: 2015-10-06 15:22:30+00:00
layout: post
link: https://cristinallamas.wordpress.com/2015/10/06/drupal-update-hook-dependencies/
slug: drupal-update-hook-dependencies
title: Drupal Update Hook Dependencies
wordpress_id: 251
categories:
  - Drupal
tags:
  - drupal
  - drupal 7
  - module
  - update
  - update dependencies
  - update hook
---

Sometimes, when developing an update hook, you might want it to run after or before a different module's update hook. this is the way to do it:

Place the following code into your module's **mymodule.install** file.

Where 7001 and 7140 are the hook update number.

```html
<span class="s1">/** </span
><span class="s1">
  * Implementation of hook_update_dependencies(). </span
><span class="s1">*/ </span
><span class="s1">function mymodule_update_dependencies() { </span
><span class="s1">
  // Make sure that mymodule runs after other_module </span
><span class="s1"> $dependencies['mymodule'][7001] = </span>
'other_module' => 7140, <span class="s1">); </span
><span class="s1"> return $dependencies; </span
><span class="s2">}</span>
```
