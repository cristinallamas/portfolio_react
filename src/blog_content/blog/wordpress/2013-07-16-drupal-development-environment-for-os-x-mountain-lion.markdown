---
author: cristinallamas
comments: true
date: 2013-07-16 11:21:17+00:00
layout: post
link: https://cristinallamas.wordpress.com/2013/07/16/drupal-development-environment-for-os-x-mountain-lion/
slug: drupal-development-environment-for-os-x-mountain-lion
title: Drupal Development environment for OS X Mountain Lion (MAMP)
wordpress_id: 12
categories:
  - Development
  - Drupal
  - OS X
tags:
  - dev environment
  - drupal
  - how to
  - os x mountain lion
---

The first time I wanted to do this on my computer I coudn't find a proper tutorial, all of them had parts missing, parts giving errors...etc. So I've decided to join few of them and add some parts myself to gather

'The ultimate OS X Drupal Dev environment tutorial'

# OSX Mountain Lion

## Install Apache

The first difference in the new OS X 10.8 is the dropping of the GUI option in System Preferences > Sharing to turn on Web Sharing, it may be gone but the webserver Apache is definitely under the hood of the OS and ready to go.

Apache is pre-installed in the OS and needs to be enabled via the command line - this needs to be done in Terminal which is found at /Applications/Utilities/Terminal

to start it

`sudo apachectl start`

to stop it

`sudo apachectl stop`

to restart it

`sudo apachectl restart`

To find the Apache version

`httpd -v`

The version installed in Mountain Lion is Apache/2.2.22

After starting Apache - test to see if the webserver is working in the browser - [http://localhost](http://localhost/) - you should see the "It Works!" text.

System Level Web Root

- the default system document root is still found at -

[http://localhost/](http://localhost/)

The files are shared in the filing system at -

`/Library/WebServer/Documents/`

more info:

[http://coolestguyplanettech.com/downtown/install-and-configure-apache-mysql-php-and-phpmyadmin-osx-108-mountain-lion](http://coolestguyplanettech.com/downtown/install-and-configure-apache-mysql-php-and-phpmyadmin-osx-108-mountain-lion)

## Install Php

PHP 5.3.13 is loaded in OSX 10.8 Mountain Lion and needs to be turned on by uncommenting a line in the httpd.conf file.

`sudo nano /etc/apache2/httpd.conf`

Use "control" + "w" to search and search for 'php' this will land you on the right line then uncomment the line (remove the #):

`LoadModule php5_module libexec/apache2/libphp5.so`

Write out and Save using the nano short cut keys at the bottom 'control o' and 'control x'

Re-load apache to kick in

`sudo apachectl restart`

To see and test PHP, create a file name it "phpinfo.php" and file it in your document root with the contents below, then view it in a browser.

`<?php phpinfo(); ?>`

## Install mysql

[Download MySql](http://dev.mysql.com/downloads/mirror.php?id=412087)

Once downloaded install the 3 components. You may need to adjust the Security and Privacy System Pref to allow installs of 3rd party apps because of the new security feature of Mountain Lion known as the 'Gatekeeper', which keeps unscrupulous installer packages at bay.

To get around this without changing the global preferences (better!) right click or command click the .pkg installer to bring up the contextual menu and select open, then you get the warning - then click Open.

![mysql](http://coolestguyplanettech.com/downtown/sites/default/files/apache/osx-gatekeeper-open-contextual.png)

Install all 3...

mysql5.5.xxx.pkg MySQLstartupitem.pkg MySQLPrefPane The first is the MySQL software, the 2nd item allows MySQL to start when the Mac is booted and the third is a System Preference that allows start/stop operation and a preference to enable it to start on boot.

You can start the MySQL server from the System Preferences or via the command line

![mysql](http://coolestguyplanettech.com/downtown/sites/default/files/start-mysql.png)

To find the MySQL version from the terminal, type at the prompt:

`/usr/local/mysql/bin/mysql -v`

This also puts you in to an interactive dialogue with mySQL, type \q to exit.

After installation, in order to use mysql commands without typing the full path to the commands you need to add the mysql directory to your shell path, (optional step) this is done in your “.bash_profile” file in your home directory, if you don’t have that file just create it.

`cd ;`

`vim .bash_profile`

Add the line:

`export PATH="/usr/local/mysql/bin:$PATH"`

The first command brings you to your home directory and opens the .bash_profile file or creates a new one if it doesn’t exist, then add in the line above which adds the mysql binary path to commands that you can run.

```
source ~/.bash_profile
mysql -v
```

You will get the version number again, just type “\q” to exit.

Set the MySQL root password Note that this is not the same as the root or admin password of OSX - this is a unique password to the mysql root user, use one and remember/jot down somewhere what it is.

```

/usr/local/mysql/bin/mysqladmin -u root password 'yourpasswordhere'

```

Use the single 'quotes' surrounding the password

## Install phpmyadmin

not for now.

## Download database

Download the latest version of the database from your site

## Setup git

1. [Download git](https://code.google.com/p/git-osx-installer/downloads/list) – The download is titled “Snow Leopard,” but the package works fine with both Lion and Mountain Lion.

2) Open Mac’s “System Preferences” and select “Security & Privacy”

3. Under “Allow applications downloaded from,” make sure “Anywhere” is selected

4) Open DMG downloaded in Step 1 and install the package.

5. Open your terminal and run the following:

```
    sudo mkdir -p /usr/local/bin
    sudo ln -s /usr/local/git/bin/git /usr/local/bin/git
    exit
```

1. Re-open your terminal and run the following:

`git –version`

1. You’re done.

## Clone code

```
cd /Library/WebServer/Documents
git clone https://YOURUSER@bitbucket.org/YOURUSER/YOUR-REPO.git
```

## Setup Vhost

Allow the vhosts configuration from the Apache configuration file httpd.conf

`vim nano /etc/apache2/httpd.conf`

Search for 'vhosts' and uncomment the include line

# Virtual hosts

```
#! bash

Include /private/etc/apache2/extra/httpd-vhosts.conf
```

This will allow usage of the httpd-vhosts.conf file, open this file to add in the vhost. sudo vim /etc/apache2/extra/httpd-vhosts.conf

An example in the file is given of the format required to add additional domains, just follow this to create your new virtual host:

```
<VirtualHost *:80>
ServerAdmin yourname@yourcompany.com
DocumentRoot "/Library/WebServer/Documents"
ServerName mysite.local
ErrorLog "/private/var/log/apache2/mysite.local-error_log"
CustomLog "/private/var/log/apache2/mysite.local-access_log" common
</VirtualHost>
```

Spoof Your IP address to the Domain

`sudo vim /etc/hosts`

Add the Domain to resolve to the local address

`127.0.0.1 mysite.local`

Restart Apache

`sudo apachectl restart`

## Install Drush

```
pear channel-discover pear.drush.org
pear install drush/drush
```

## Modify settings.php in our drupal site

our clone of the code comes without the settings.php. So we'll clone the default.settings.php and will create the database connection.

something like:

```php
$databases = array (
    'default' =>
    array (
    'default' =>
    array (
        'database' => 'YourDatabase',
        'username' => 'YourUser',
        'password' => 'YourPass',
        'host' => 'localhost',
        'port' => '3306',
        'driver' => 'mysql',
        'prefix' => '',
    ),
    ),
);
```
