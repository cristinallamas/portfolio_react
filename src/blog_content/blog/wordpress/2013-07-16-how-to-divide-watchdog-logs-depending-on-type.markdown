---
author: cristinallamas
comments: true
date: 2013-07-16 12:42:46+00:00
layout: post
link: https://cristinallamas.wordpress.com/2013/07/16/how-to-divide-watchdog-logs-depending-on-type/
slug: how-to-divide-watchdog-logs-depending-on-type
title: How to divide watchdog logs depending on type in Drupal 6
wordpress_id: 21
categories:
- Development
---

Let's say we want to redirect the php errors inside watchdog to php_error.log and the rest to drupal.log.

its useful to distinguish between php errors and Drupal events.

You only have to add this function to a new module:

```php
/**
* Implements hook_init().
* Drupal sets an error handler that sends PHP errors to watchdog. Undo that.
*/
function mymodule_init() {
restore_error_handler();
}
```





or if you have the module **Devel** installed you only need to go to /admin/settings/devel



and select NONE in the Error handler section.



[![Screen Shot 2013-07-16 at 17.10.07](http://cristinallamas.files.wordpress.com/2013/07/screen-shot-2013-07-16-at-17-10-07.png?w=300)](http://cristinallamas.files.wordpress.com/2013/07/screen-shot-2013-07-16-at-17-10-07.png)
