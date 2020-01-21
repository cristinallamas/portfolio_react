---
author: cristinallamas
comments: true
date: 2016-06-14 14:10:07+00:00
layout: post
link: https://cristinallamas.wordpress.com/2016/06/14/drupal-8-is-admin-path/
slug: drupal-8-is-admin-path
title: Drupal 8 is admin path
wordpress_id: 262
categories:
- Drupal
tags:
- drupal 8
- drupal8
---

To check the path of the current page:

```php
    $is_admin = \Drupal::service('router.admin_context')->isAdminRoute();
```

to check an arbitrary path, you need to create a Request object and obtain its matching Route:

```php
   
    use Symfony\Component\HttpFoundation\Request;
    use Symfony\Cmf\Component\Routing\RouteObjectInterface;
    
    $path = '/node/1';
    $request = Request::create($path);
    
    $route_match = \Drupal::service('router.no_access_checks')->matchRequest($request);
    $route = $route_match[RouteObjectInterface::ROUTE_OBJECT];
    $is_admin = \Drupal::service('router.admin_context')->isAdminRoute($route);
```



via: https://api.drupal.org/comment/60024#comment-60024
