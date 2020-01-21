---
author: cristinallamas
comments: true
date: 2016-09-05 21:15:29+00:00
layout: post
link: https://cristinallamas.wordpress.com/2016/09/05/install-compass-in-osx-el-capitan/
slug: install-compass-in-osx-el-capitan
title: Install Compass in OSX El Capitan
wordpress_id: 276
categories:
  - OS X
  - SysAdmin
tags:
  - compass
  - el capitan
  - gem
  - osx
  - ruby
  - sass
---

After getting this error:

```bash
▶ sudo gem install compass
ERROR: While executing gem ... (Errno::EPERM)
   Operation not permitted - /usr/bin/sass
```

It can be fixed with:

```bash
▶ brew install ruby
▶ sudo gem install -n /usr/local/bin compass
```
