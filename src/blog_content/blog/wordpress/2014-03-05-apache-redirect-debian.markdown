---
author: cristinallamas
comments: true
date: 2014-03-05 16:03:59+00:00
layout: post
link: https://cristinallamas.wordpress.com/2014/03/05/apache-redirect-debian/
slug: apache-redirect-debian
title: Apache Redirect (Debian)
wordpress_id: 195
categories:
- SEO
- SysAdmin
tags:
- apache
- debian
- devops
- redirect
---

We edit our configuration file

    
   ` vim /etc/httpd/vhost.d/myconfigfile.conf`


We add a line before the tag </VirtualHost>

    
   ` redirectMatch permanent ^/wherefrom/to/go/?$  /where/I/want/to/go`


And now we need to reload apache for the changes to take effect.

    
    `sudo /etc/init.d/httpd reload`
