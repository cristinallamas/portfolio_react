---
author: cristinallamas
comments: true
date: 2015-06-12 09:30:21+00:00
layout: post
link: https://cristinallamas.wordpress.com/2015/06/12/add-different-scripts-to-the-header-in-drupal-meta-link/
slug: add-different-scripts-to-the-header-in-drupal-meta-link
title: Add different scripts to the header in Drupal (meta, link..)
wordpress_id: 243
categories:
- Drupal
tags:
- drupal
- drupal 7
- drupal_add_html_head
- header
- preprocess
- preprocess_html
- tags
---

Now let's imagine that you want to use a generic function to add different types of scripts to your header: <meta> <link>? <script>. This is the solution I've found.

**Important**: it took me few hours until I realized.

second parameter of drupal_add_html_head **must** be a **unique string**, so I've used the path to the script because they are in different files inside a folder structure. but you can use a random generator, or maybe a better solution, but keep in mind that must be **unique**.

 ```php   
    $script = "<meta name="google-site-verification" content="xxxxx" />";
    drupal_add_html_head(array('#type' => 'markup', '#markup' => $script), "$script");



    
    $script = "<link <span class="html-attribute-name">rel</span>="<span class="html-attribute-value">apple-touch-icon-precomposed</span>" <span class="html-attribute-name">href</span>="www.example.com" />";
    drupal_add_html_head(array('#type' => 'markup', '#markup' => $script), "$script");
```