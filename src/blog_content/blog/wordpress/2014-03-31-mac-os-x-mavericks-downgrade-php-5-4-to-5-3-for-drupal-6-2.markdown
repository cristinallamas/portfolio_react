---
author: cristinallamas
comments: true
date: 2014-03-31 10:20:55+00:00
layout: post
link: https://cristinallamas.wordpress.com/2014/03/31/mac-os-x-mavericks-downgrade-php-5-4-to-5-3-for-drupal-6-2/
slug: mac-os-x-mavericks-downgrade-php-5-4-to-5-3-for-drupal-6-2
title: Mac OS X ( Mavericks ) downgrade PHP 5.4 to 5.3 for drupal 6
wordpress_id: 208
categories:
- Drupal
---

### PHP 5.5 (Current stable)



    
    `curl -s http://php-osx.liip.ch/install.sh | bash -s 5.5`
    




### PHP 5.4 (Old stable)



    
    `curl -s http://php-osx.liip.ch/install.sh | bash -s 5.4`
    




### PHP 5.3 (End of life)



    
    `curl -s http://php-osx.liip.ch/install.sh | bash -s 5.3`
    




### PHP 5.6 (Alpha)



    
    `curl -s http://php-osx.liip.ch/install.sh | bash -s 5.6`
    


It will ask you for your password. We install the packager in /usr/local/packer and PHP into /usr/local/php5 and for this, we need your password. We don't do anything bad with it.




### Why does php -v on the command line still show my old version?


php-osx doesn't overwrite the php binaries installed by Apple, but installs everyting in /usr/local/php5. The new php binary is therefore in /usr/local/php5/bin/php.

You can also adjust your PATH do include that directory, eg. write into your ~/.profile file the following

    
    `export PATH=/usr/local/php5/bin:$PATH`
    





### Why is Europe/Zurich the default timezone? Where to change that?


Because we are based in Zurich (and Fribourg and Lausanne). Change the file in/usr/local/php5/php.d/99-liip-developer.ini to adjust that.


### It doesn't take my php.ini values


We introduced our own ini file to be able to easily overwrite the standard values with our recommended values. You can find it in /usr/local/php5/php.d/99-liip-developer.ini

As this is read last, it will overwrite values defined in other files. You can also just delete the file.


### apc, twig and xslcache


apc, twig and xslcache need to be enabled manually in /usr/local/php5/php.d/50-extension-$name.ini.


### xdebug


xdebug settings needs to be configured (idekey etc) manually in /usr/local/php5/php.d/50-extension-xdebug.ini.




## Uninstall


Change in /etc/apache2/httpd.conf

    
    `LoadModule php5_module /usr/local/php5/libphp5.so`


to

    
    `LoadModule php5_module        libexec/apache2/libphp5.so`
    


also delete the file +php-osx.conf and +entropy-php.conf in /etc/apache2/other

and optionally remove /usr/local/php5-*


