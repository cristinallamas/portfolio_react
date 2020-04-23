---
author: cristinallamas
comments: true
date: 2013-07-17 10:31:07+00:00
layout: post
link: https://cristinallamas.wordpress.com/2013/07/17/debuging-drupal-with-aptana-and-xdebug-on-mac/
slug: debuging-drupal-with-aptana-and-xdebug-on-mac
title: Debugging Drupal with Aptana and Xdebug on Mac
wordpress_id: 29
categories:
  - Development
  - Drupal
tags:
  - aptana studio
  - debug
  - drupal
  - xdebug
---

# Installing PHP Xdebug on Mac OS X 10.7 Lion

September 6th, 2011

[Xdebug](http://xdebug.org/) extension is an absolute necessity for any PHP developer, but unfortunately it isn't included in the system by default. I will describe two ways of getting the extensions and show how to enable it for default Apache and PHP installation.

## Using precompiled binaries

ActiveState provides precompiled versions of Xdebug for most operating systems. Package can be downloaded at [company's site](http://code.activestate.com/komodo/remotedebugging/). If you choose this option, take the `xdebug.so` from 5.3 directory and put it in `usr/lib/php/extensions/no-debug-non-zts-20090626/`. After that you can skip to the[enabling xdebug](http://kubyshkin.ru/posts/installing-php-xdebug-extension-on-mac-os-x-10-7-lion.html#enable) section.

## Building from sources

Before proceeding please make sure that you have XCode installed. Let's start by getting xdebug sources (you can see the latest version on the [official website](http://xdebug.org/):

    ```cd /tmp/ && curl http://xdebug.org/files/xdebug-2.2.1.tgz > xdebug.tgz
    tar -xvzf xdebug.tgz
    cd xdebug-2.2.1```

Next step is to configure sources for our php distirbution:

    ```phpize```

Before we can run build confuguration script we need to specify some mac-specific environment variables:

    ```MACOSX_DEPLOYMENT_TARGET=10.7
    CFLAGS="-arch i386 -arch x86_64 -g -Os -pipe -no-cpp-precomp"
    CCFLAGS="-arch i386 -arch x86_64 -g -Os -pipe"
    CXXFLAGS="-arch i386 -arch x86_64 -g -Os -pipe"
    LDFLAGS="-arch i386 -arch x86_64 -bind_at_load"
    export CFLAGS CXXFLAGS LDFLAGS CCFLAGS MACOSX_DEPLOYMENT_TARGET```

We are ready to build and install the extention:

```
./configure
make
sudo make install
```

## Enabling Xdebug

Now you need to update php.ini as described. On Mac it's located in `/etc/` folder. If you don't see it there you need to copy `/etc/php.ini.default` to `/etc/php.ini`. Add following lines to the end of file:

```
[xdebug]
zend_extension=/usr/lib/php/extensions/no-debug-non-zts-20090626/xdebug.so
xdebug.file_link_format="txmt://open?url=file://%f&line=%1"
xdebug.remote_enable = On
xdebug.remote_autostart = 1`
```

Restart Apache by issuing following command in terminal and you are good to go:

`sudo apachectl restart`

### Enable XDebug in Aptana Studio 3.x

I cound't find PHP interpreters so I upgraded my Aptana version. At the begining I couldn't install the upgrades

[![Screen Shot 2013-07-17 at 12.20.45](http://cristinallamas.files.wordpress.com/2013/07/screen-shot-2013-07-17-at-12-20-45.png?w=300)](http://cristinallamas.files.wordpress.com/2013/07/screen-shot-2013-07-17-at-12-20-45.png)

so I decided to open the program as sudo
`sudo open /Applications/Aptana\ Studio\ 3/AptanaStudio3.app/`

But it didnt't worked.

I decided to uninstall my version and install the latest one. Fast and effective.

Then you'll need to

![Screen Shot 2013-07-17 at 12.21.16](http://cristinallamas.files.wordpress.com/2013/07/screen-shot-2013-07-17-at-12-21-16.png?w=248)

![Screen Shot 2013-07-17 at 12.56.55](http://cristinallamas.files.wordpress.com/2013/07/screen-shot-2013-07-17-at-12-56-55.png?w=300)

[![Screen Shot 2013-07-17 at 12.54.03](http://cristinallamas.files.wordpress.com/2013/07/screen-shot-2013-07-17-at-12-54-03.png?w=263)](http://cristinallamas.files.wordpress.com/2013/07/screen-shot-2013-07-17-at-12-54-03.png)

Now we have to setup the Web server.

So we go to

[![Screen Shot 2013-07-17 at 16.21.10](http://cristinallamas.files.wordpress.com/2013/07/screen-shot-2013-07-17-at-16-21-10.png?w=300)](http://cristinallamas.files.wordpress.com/2013/07/screen-shot-2013-07-17-at-16-21-10.png)

And click in Add or Edit, we will have to fill in the url of our site (in this case is local) and the folder to the site, in this case my drupal site.

![Screen Shot 2013-07-17 at 16.21.18](http://cristinallamas.files.wordpress.com/2013/07/screen-shot-2013-07-17-at-16-21-18.png?w=300)

# Debugging

We now click at the bug icon in the menu bar in Aptana

[![Screen Shot 2013-07-17 at 16.23.13](http://cristinallamas.files.wordpress.com/2013/07/screen-shot-2013-07-17-at-16-23-13.png)](http://cristinallamas.files.wordpress.com/2013/07/screen-shot-2013-07-17-at-16-23-13.png)

We can add as many breakpoints as we want in our code, and we'll be able to watch the variables in the variables pane.

[![Screen Shot 2013-07-17 at 16.24.56](http://cristinallamas.files.wordpress.com/2013/07/screen-shot-2013-07-17-at-16-24-56.png?w=130)](http://cristinallamas.files.wordpress.com/2013/07/screen-shot-2013-07-17-at-16-24-56.png)
