---
author: cristinallamas
comments: true
date: 2013-08-13 13:03:40+00:00
layout: post
link: https://cristinallamas.wordpress.com/2013/08/13/drupal-6-different-ways-of-adding-javascript-to-a-page/
slug: drupal-6-different-ways-of-adding-javascript-to-a-page
title: 'Drupal 6: Different ways of adding JavaScript to a page'
wordpress_id: 104
categories:
  - Drupal
tags:
  - drupal
---

REMEMBER

- Always use drupal_add_js() as this lets Drupal handle it i.e. preprocess/cache it.

- All of the examples assume your JS is in a script file, but you can also include an "inline" script by sending it as a string for the first argument, and setting the second to "inline" e.g. drupal_add_js('alert("Hello!")', 'inline');

- If your script is in your theme directory, you can use path_to_theme() and then the relative path from there (with a preceding slash) e.g. path_to_theme().'/js/myscript.js'

**1) Add a script to all pages**
a) using template.php

```php

    drupal_add_js('sites/all/scripts/tweaks.js');
```

b) using your theme's .info file (the script needs to be somewhere within your theme directory)

```php

    scripts[] = script.js
```

**2) Add a script to page(s) with a specific URL / URL pattern using template.php (the following will only add the script on site.com/my/page)**
NOTE: if you are using URL aliases, you need to know the un-aliased version for this (see site.com/admin/build/path)

```php

    function mytheme_preprocess_page(&$vars) {
     if (arg(0) == 'my' && arg(1) == 'page' && arg(2) == null) {
     drupal_add_js(path_to_theme().'/js/myscript.js');
     $vars['scripts'] = drupal_get_js();
     }
    }
```

OR use the following condition to add it to any pages that start with the URL site.com/my/page e.g. /my/page/1, /my/page/2, /my/page/2/edit etc.
if (arg(0) == 'my' && arg(1) == 'page') {...}

OR use the node ID
if (isset($vars['node']) && $vars['node']->nid == 23) {...}
OR apply to all nodes of a specific content type
if (isset($vars['node']) && $vars['node']->type == 'book') {...}
**3) Add a script to a specific page by editing the page in Drupal, and setting the input format to "PHP code"**

```php

    drupal_add_js('sites/all/scripts/tweaks.js');
```

**4) Add a script to a block, which you can then setup to be included in a specific page or set of pages**

```php

    drupal_add_js('sites/all/scripts/tweaks.js');
```

Also note that it is very similar to add stylesheets to pages. The function is drupal_get_css().

REFERENCES
http://drupal.org/node/304178
http://api.drupal.org/api/drupal/includes--common.inc/function/drupal_add_js/6
http://stackoverflow.com/questions/61735/include-css-or-javascript-file-for-specific-node-in-drupal-6

Reposted from http://www.only10types.com/2011/02/drupal-6-different-ways-of-adding.ht
