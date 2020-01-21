---
author: cristinallamas
comments: true
date: 2014-02-13 13:46:46+00:00
layout: post
link: https://cristinallamas.wordpress.com/2014/02/13/install-lamp-apache-mysql-php-in-ubunut-server-13-04/
slug: install-lamp-apache-mysql-php-in-ubunut-server-13-04
title: Install LAMP (apache, mysql, php) in Ubunut Server 13.04
wordpress_id: 177
categories:
- Development
- SysAdmin
tags:
- apache
- apache2
- how to
- install
- lamp
- mysql
- mysql server
- php
- php5
- sysadmin
- ubuntu
- ubuntu server
- ubuntu server 13.04
---

``````Fake infohostname myserver.com IP address 111.222.333.444. ```




## Login as Root



    
    `sudo su`




## Installing MySQL 5



``` 
    root@myserver.com:~# sudo su
    root@myserver.com:~# apt-get install mysql-server mysql-client
    E: dpkg was interrupted, you must manually run 'sudo dpkg --configure -a' to correct the problem.
    root@myserver.com:~#
    root@myserver.com:~# dpkg --configure -a
    Setting up openssl (1.0.1e-3ubuntu1.1) ...
    Processing triggers for libc-bin ...
    Setting up bind9 (1:9.9.3.dfsg.P2-4ubuntu1.1) ...
     * Stopping domain name service... bind9 waiting for pid 440 to die
     [ OK ]
     * Starting domain name service... bind9 [ OK ]
    root@myserver.com:~#
    
    root@myserver.com:~# apt-get install mysql-server mysql-client
    Reading package lists... Done
    Building dependency tree
    Reading state information... Donemyserver.com
    The following extra packages will be installed:
     libaio1 libdbd-mysql-perl libdbi-perl libhtml-template-perl libmysqlclient18 libterm-readkey-perl mysql-client-5.5 mysql-client-core-5.5 mysql-common mysql-server-5.5 mysql-server-core-5.5
    Suggested packages:
     libclone-perl libmldbm-perl libnet-daemon-perl libplrpc-perl libsql-statement-perl libipc-sharedcache-perl tinyca
    The following NEW packages will be installed:
     libaio1 libdbd-mysql-perl libdbi-perl libhtml-template-perl libmysqlclient18 libterm-readkey-perl mysql-client mysql-client-5.5 mysql-client-core-5.5 mysql-common mysql-server mysql-server-5.5
     mysql-server-core-5.5
    0 upgraded, 13 newly installed, 0 to remove and 2 not upgraded.
    Need to get 26.8 MB of archives.
    After this operation, 95.7 MB of additional disk space will be used.
    Do you want to continue [Y/n]? yes
    Get:1 http://ubuntu.mirrors.ovh.net/ftp.ubuntu.com/ubuntu/ saucy/main libaio1 amd64 0.3.109-4 [6,364 B]
    Get:2 http://ubuntu.mirrors.ovh.net/ftp.ubuntu.com/ubuntu/ saucy-updates/main mysql-common all 5.5.35-0ubuntu0.13.10.2 [12.9 kB]
    Get:3 http://ubuntu.mirrors.ovh.net/ftp.ubuntu.com/ubuntu/ saucy-updates/main libmysqlclient18 amd64 5.5.35-0ubuntu0.13.10.2 [928 kB]
    Get:4 http://ubuntu.mirrors.ovh.net/ftp.ubuntu.com/ubuntu/ saucy/main libdbi-perl amd64 1.627-1 [874 kB]
    Get:5 http://ubuntu.mirrors.ovh.net/ftp.ubuntu.com/ubuntu/ saucy/main libdbd-mysql-perl amd64 4.023-1 [97.3 kB]
    Get:6 http://ubuntu.mirrors.ovh.net/ftp.ubuntu.com/ubuntu/ saucy-updates/main mysql-client-core-5.5 amd64 5.5.35-0ubuntu0.13.10.2 [1,879 kB]
    Get:7 http://ubuntu.mirrors.ovh.net/ftp.ubuntu.com/ubuntu/ saucy/main libterm-readkey-perl amd64 2.30-4build4 [28.4 kB]
    Get:8 http://ubuntu.mirrors.ovh.net/ftp.ubuntu.com/ubuntu/ saucy-updates/main mysql-client-5.5 amd64 5.5.35-0ubuntu0.13.10.2 [8,176 kB]
    Get:9 http://ubuntu.mirrors.ovh.net/ftp.ubuntu.com/ubuntu/ saucy-updates/main mysql-server-core-5.5 amd64 5.5.35-0ubuntu0.13.10.2 [5,884 kB]
    Get:10 http://ubuntu.mirrors.ovh.net/ftp.ubuntu.com/ubuntu/ saucy-updates/main mysql-server-5.5 amd64 5.5.35-0ubuntu0.13.10.2 [8,777 kB]
    Get:11 http://ubuntu.mirrors.ovh.net/ftp.ubuntu.com/ubuntu/ saucy/main libhtml-template-perl all 2.91-1 [65.1 kB]
    Get:12 http://ubuntu.mirrors.ovh.net/ftp.ubuntu.com/ubuntu/ saucy-updates/main mysql-client all 5.5.35-0ubuntu0.13.10.2 [10.9 kB]
    Get:13 http://ubuntu.mirrors.ovh.net/ftp.ubuntu.com/ubuntu/ saucy-updates/main mysql-server all 5.5.35-0ubuntu0.13.10.2 [11.1 kB]
    Fetched 26.8 MB in 6s (4,106 kB/s)
    Preconfiguring packages ...
     Package configuration
     ─────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────
    ┌───────────────────────────────────────────Configuring mysql-server-5.5─────────────────────────────────────────────┐
     │ While not mandatory, it is highly recommended that you set a password for the MySQL administrative "root" user. │
     │ │
     │ If this field is left blank, the password will not be changed. │
     │ │
     │ New password for the MySQL "root" user: │
     │ ┌────────────────────────────────────────────────────────────────────────────────────────────────────────────────┐ │
     │ │ │ │
     ├─└────────────────────────────────────────────────────────────────────────────────────────────────────────────────┘─┤
     │ < OK > │
     └────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┘
    Package configuration
     ─────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────
    
    ┌────────Configuring mysql-server-5.5───────────┐
     │ │
     │ │
     │ Repeat password for the MySQL "root" user: │
     │ ┌───────────────────────────────────────────┐ │
     │ │ │ │
     ├─└───────────────────────────────────────────┘─┤
     │ < OK > │
     └───────────────────────────────────────────────┘
    
    Selecting previously unselected package libaio1:amd64.
    (Reading ... 24304 files and directories currently installed.)
    Unpacking libaio1:amd64 (from .../libaio1_0.3.109-4_amd64.deb) ...
    Selecting previously unselected package mysql-common.
    Unpacking mysql-common (from .../mysql-common_5.5.35-0ubuntu0.13.10.2_all.deb) ...
    Selecting previously unselected package libmysqlclient18:amd64.
    Unpacking libmysqlclient18:amd64 (from .../libmysqlclient18_5.5.35-0ubuntu0.13.10.2_amd64.deb) ...
    Selecting previously unselected package libdbi-perl.
    Unpacking libdbi-perl (from .../libdbi-perl_1.627-1_amd64.deb) ...
    Selecting previously unselected package libdbd-mysql-perl.
    Unpacking libdbd-mysql-perl (from .../libdbd-mysql-perl_4.023-1_amd64.deb) ...
    Selecting previously unselected package mysql-client-core-5.5.
    Unpacking mysql-client-core-5.5 (from .../mysql-client-core-5.5_5.5.35-0ubuntu0.13.10.2_amd64.deb) ...
    Selecting previously unselected package libterm-readkey-perl.
    Unpacking libterm-readkey-perl (from .../libterm-readkey-perl_2.30-4build4_amd64.deb) ...
    Selecting previously unselected package mysql-client-5.5.
    Unpacking mysql-client-5.5 (from .../mysql-client-5.5_5.5.35-0ubuntu0.13.10.2_amd64.deb) ...
    Selecting previously unselected package mysql-server-core-5.5.
    Unpacking mysql-server-core-5.5 (from .../mysql-server-core-5.5_5.5.35-0ubuntu0.13.10.2_amd64.deb) ...
    Processing triggers for man-db ...
    Setting up mysql-common (5.5.35-0ubuntu0.13.10.2) ...
    Selecting previously unselected package mysql-server-5.5.
    (Reading ... 24657 files and directories currently installed.)
    Unpacking mysql-server-5.5 (from .../mysql-server-5.5_5.5.35-0ubuntu0.13.10.2_amd64.deb) ...
    Selecting previously unselected package libhtml-template-perl.
    Unpacking libhtml-template-perl (from .../libhtml-template-perl_2.91-1_all.deb) ...
    Selecting previously unselected package mysql-client.
    Unpacking mysql-client (from .../mysql-client_5.5.35-0ubuntu0.13.10.2_all.deb) ...
    Selecting previously unselected package mysql-server.
    Unpacking mysql-server (from .../mysql-server_5.5.35-0ubuntu0.13.10.2_all.deb) ...
    Processing triggers for man-db ...
    Setting up libaio1:amd64 (0.3.109-4) ...
    Setting up libmysqlclient18:amd64 (5.5.35-0ubuntu0.13.10.2) ...
    Setting up libdbi-perl (1.627-1) ...
    Setting up libdbd-mysql-perl (4.023-1) ...
    Setting up mysql-client-core-5.5 (5.5.35-0ubuntu0.13.10.2) ...
    Setting up libterm-readkey-perl (2.30-4build4) ...
    Setting up mysql-client-5.5 (5.5.35-0ubuntu0.13.10.2) ...
    Setting up mysql-server-core-5.5 (5.5.35-0ubuntu0.13.10.2) ...
    Setting up mysql-server-5.5 (5.5.35-0ubuntu0.13.10.2) ...
    140213 14:48:49 [Warning] Using unique option prefix key_buffer instead of key_buffer_size is deprecated and will be removed in a future release. Please use the full name instead.
    mysql start/running, process 2781
    Setting up libhtml-template-perl (2.91-1) ...
    Setting up mysql-client (5.5.35-0ubuntu0.13.10.2) ...
    Setting up mysql-server (5.5.35-0ubuntu0.13.10.2) ...
    Processing triggers for libc-bin ...
    root@myserver.com:~#
```



## Installing Apache2



``` 
    root@myserver.com:~# apt-get install apache2
    Reading package lists... Done
    Building dependency tree
    Reading state information... Done
    The following extra packages will be installed:
    apache2-bin apache2-data
    Suggested packages:
    apache2-doc apache2-suexec-pristine apache2-suexec-custom ufw apache2-utils
    The following NEW packages will be installed:
    apache2 apache2-bin apache2-data
    0 upgraded, 3 newly installed, 0 to remove and 2 not upgraded.
    Need to get 1,074 kB of archives.
    After this operation, 4,559 kB of additional disk space will be used.
    Do you want to continue [Y/n]? Y
    Get:1 http://ubuntu.mirrors.ovh.net/ftp.ubuntu.com/ubuntu/ saucy-updates/main apache2-bin amd64 2.4.6-2ubuntu2.1 [838 kB]
    Get:2 http://ubuntu.mirrors.ovh.net/ftp.ubuntu.com/ubuntu/ saucy-updates/main apache2-data all 2.4.6-2ubuntu2.1 [149 kB]
    Get:3 http://ubuntu.mirrors.ovh.net/ftp.ubuntu.com/ubuntu/ saucy-updates/main apache2 amd64 2.4.6-2ubuntu2.1 [86.7 kB]
    Fetched 1,074 kB in 0s (1,760 kB/s)
    Selecting previously unselected package apache2-bin.
    (Reading ... 24759 files and directories currently installed.)
    Unpacking apache2-bin (from .../apache2-bin_2.4.6-2ubuntu2.1_amd64.deb) ...
    Selecting previously unselected package apache2-data.
    Unpacking apache2-data (from .../apache2-data_2.4.6-2ubuntu2.1_all.deb) ...
    Selecting previously unselected package apache2.
    Unpacking apache2 (from .../apache2_2.4.6-2ubuntu2.1_amd64.deb) ...
    Processing triggers for man-db ...
    Setting up apache2-bin (2.4.6-2ubuntu2.1) ...
    Setting up apache2-data (2.4.6-2ubuntu2.1) ...
    Setting up apache2 (2.4.6-2ubuntu2.1) ...
    Enabling module mpm_event.
    Enabling module authz_core.
    Enabling module authz_host.
    Enabling module authn_core.
    Enabling module auth_basic.
    Enabling module access_compat.
    Enabling module authn_file.
    Enabling module authz_user.
    Enabling module alias.
    Enabling module dir.
    Enabling module autoindex.
    Enabling module env.
    Enabling module mime.
    Enabling module negotiation.
    Enabling module setenvif.
    Enabling module filter.
    Enabling module deflate.
    Enabling module status.
    Enabling conf charset.
    Enabling conf localized-error-pages.
    Enabling conf other-vhosts-access-log.
    Enabling conf security.
    Enabling conf serve-cgi-bin.
    Enabling site 000-default.
    * Starting web server apache2 *
    root@myserver.com:~#
```

Apache's default document root is /var/www on Ubuntu, and the configuration file is /etc/apache2/apache2.conf. Additional configurations are stored in subdirectories of the /etc/apache2 directory such as /etc/apache2/mods-enabled (for Apache modules), /etc/apache2/sites-enabled (for virtual hosts), and/etc/apache2/conf.d.

Ff we visit from any browser connected to the internet the address of our server  http://111.222.333.444/ we'll see the 'It works!' page.


## Installing PHP



```
    root@myserver.com:~# apt-get install php5 libapache2-mod-php5
    Reading package lists... Done
    Building dependency tree... 50%
    Building dependency tree
    Reading state information... Done
    The following extra packages will be installed:
    php5-cli php5-common php5-readline
    Suggested packages:
    php-pear php5-json php5-user-cache
    The following NEW packages will be installed:
    libapache2-mod-php5 php5 php5-cli php5-common php5-readline
    0 upgraded, 5 newly installed, 0 to remove and 2 not upgraded.
    Need to get 5,935 kB of archives.
    After this operation, 20.0 MB of additional disk space will be used.
    Do you want to continue [Y/n]? Abort.
    root@myserver.com:~# Y
    bash: Y: command not found
    root@myserver.com:~#
    root@myserver.com:~# apt-get install php5 libapache2-mod-php5
    Reading package lists... Done
    Building dependency tree
    Reading state information... Done
    The following extra packages will be installed:
    php5-cli php5-common php5-readline
    Suggested packages:
    php-pear php5-json php5-user-cache
    The following NEW packages will be installed:
    libapache2-mod-php5 php5 php5-cli php5-common php5-readline
    0 upgraded, 5 newly installed, 0 to remove and 2 not upgraded.
    Need to get 5,935 kB of archives.
    After this operation, 20.0 MB of additional disk space will be used.
    Do you want to continue [Y/n]? y
    Get:1 http://ubuntu.mirrors.ovh.net/ftp.ubuntu.com/ubuntu/ saucy-updates/main php5-common amd64 5.5.3+dfsg-1ubuntu2.1 [214 kB]
    Get:2 http://ubuntu.mirrors.ovh.net/ftp.ubuntu.com/ubuntu/ saucy-updates/main php5-cli amd64 5.5.3+dfsg-1ubuntu2.1 [2,803 kB]
    Get:3 http://ubuntu.mirrors.ovh.net/ftp.ubuntu.com/ubuntu/ saucy-updates/main php5-readline amd64 5.5.3+dfsg-1ubuntu2.1 [14.0 kB]
    Get:4 http://ubuntu.mirrors.ovh.net/ftp.ubuntu.com/ubuntu/ saucy-updates/main libapache2-mod-php5 amd64 5.5.3+dfsg-1ubuntu2.1 [2,903 kB]
    Get:5 http://ubuntu.mirrors.ovh.net/ftp.ubuntu.com/ubuntu/ saucy-updates/main php5 all 5.5.3+dfsg-1ubuntu2.1 [1,254 B]
    Fetched 5,935 kB in 2s (2,290 kB/s)
    Selecting previously unselected package php5-common.
    (Reading ... 25366 files and directories currently installed.)
    Unpacking php5-common (from .../php5-common_5.5.3+dfsg-1ubuntu2.1_amd64.deb) ...
    Selecting previously unselected package php5-cli.
    Unpacking php5-cli (from .../php5-cli_5.5.3+dfsg-1ubuntu2.1_amd64.deb) ...
    Selecting previously unselected package php5-readline.
    Unpacking php5-readline (from .../php5-readline_5.5.3+dfsg-1ubuntu2.1_amd64.deb) ...
    Selecting previously unselected package libapache2-mod-php5.
    Unpacking libapache2-mod-php5 (from .../libapache2-mod-php5_5.5.3+dfsg-1ubuntu2.1_amd64.deb) ...
    Selecting previously unselected package php5.
    Unpacking php5 (from .../php5_5.5.3+dfsg-1ubuntu2.1_all.deb) ...
    Processing triggers for man-db ...
    Setting up php5-common (5.5.3+dfsg-1ubuntu2.1) ...
    Creating config file /etc/php5/mods-available/pdo.ini with new version
    php5_invoke: Enable module pdo for apache2 SAPI
    php5_invoke: Enable module pdo for cli SAPI
    Creating config file /etc/php5/mods-available/opcache.ini with new version
    php5_invoke: Enable module opcache for apache2 SAPI
    php5_invoke: Enable module opcache for cli SAPI
    Setting up php5-cli (5.5.3+dfsg-1ubuntu2.1) ...
    update-alternatives: using /usr/bin/php5 to provide /usr/bin/php (php) in auto mode
    Creating config file /etc/php5/cli/php.ini with new version
    php5_invoke pdo: already enabled for cli SAPI
    php5_invoke opcache: already enabled for cli SAPI
    Setting up php5-readline (5.5.3+dfsg-1ubuntu2.1) ...
    Creating config file /etc/php5/mods-available/readline.ini with new version
    php5_invoke: Enable module readline for apache2 SAPI
    php5_invoke: Enable module readline for cli SAPI
    Setting up libapache2-mod-php5 (5.5.3+dfsg-1ubuntu2.1) ...
    Creating config file /etc/php5/apache2/php.ini with new version
    php5_invoke pdo: already enabled for apache2 SAPI
    php5_invoke opcache: already enabled for apache2 SAPI
    php5_invoke readline: already enabled for apache2 SAPI
    Module mpm_event disabled.
    Enabling module mpm_prefork.
    apache2_switch_mpm Switch to prefork
    * Restarting web server apache2 [ OK ]
    apache2_invoke: Enable module php5
    * Restarting web server apache2 [ OK ]
    Setting up php5 (5.5.3+dfsg-1ubuntu2.1) ...
    root@myserver.com:~#
    root@myserver.com:~#
    root@myserver.com:~#
    root@myserver.com:~#
    root@myserver.com:~#
    root@myserver.com:~#
    root@myserver.com:~# /etc/init.d/apache2 restart
    * Restarting web server apache2
    
```





## Curl library



    
    `sudo apt-get install php5-curl`




## Testing PHP config


The document root of the default web site is /var/www. We will now create a small PHP file (info.php) in that directory and call it in a browser. The file will display lots of useful details about our PHP installation, such as the installed PHP version.

    
    `vim /var/www/info.php`


and we add this to the file

```
    <?php
    phpinfo();
    ?>
```

Now we can check the configuration of our PHP installation on

`http://111.222.333.444/info.php`
