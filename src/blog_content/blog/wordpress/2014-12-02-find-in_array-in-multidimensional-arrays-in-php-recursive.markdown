---
author: cristinallamas
comments: true
date: 2014-12-02 10:06:41+00:00
layout: post
link: https://cristinallamas.wordpress.com/2014/12/02/find-in_array-in-multidimensional-arrays-in-php-recursive/
slug: find-in_array-in-multidimensional-arrays-in-php-recursive
title: Find in_array in multidimensional arrays in php (recursive)
wordpress_id: 232
categories:
- Drupal
tags:
- array
- in_array
- php
- recursive
---

To check if a value is in an array we usually use in_array($needle,$haystack)

Example, we have the following array:

``` 
    $single = array("one", "two", "three", "four");
```

we'll use the following expression, that will return TRUE if the value is in the array.

```
    in_array("four", $single)
```



If we have the following multidimensional array:




    
```
    $multi = array(array("one", "two"), array("three", "four"));
```



we'll use the expression in_array_r() instead:




    
```
    in_array_r("three", $multi)
```