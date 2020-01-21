---
author: cristinallamas
comments: true
date: 2013-11-02 13:43:41+00:00
layout: post
link: https://cristinallamas.wordpress.com/2013/11/02/git-error-the-remote-end-hung-up-unexpectedly/
slug: git-error-the-remote-end-hung-up-unexpectedly
title: 'Git error: The remote end hung up unexpectedly'
wordpress_id: 153
categories:
- Drupal
tags:
- clone
- eof
- error
- git
- git troubleshoot
- index-pack
---

Problem:

```
    $ git clone https://....
    fatal: The remote end hung up unexpectedly
    fatal: early EOF
    fatal: index-pack failed
```

Solution:

```
    $ git config --global --add core.compression -1
    $ git clone https://....
```