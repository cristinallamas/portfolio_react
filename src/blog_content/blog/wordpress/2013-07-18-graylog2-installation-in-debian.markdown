---
author: cristinallamas
comments: true
date: 2013-07-18 14:36:52+00:00
layout: post
link: https://cristinallamas.wordpress.com/2013/07/18/graylog2-installation-in-debian/
slug: graylog2-installation-in-debian
title: Graylog2 installation in Debian
wordpress_id: 60
tags:
- debian
- elasticsearch
- graylog2
- install
- installation
- log
- mongodb
- ruby
---

# Install ElasticSearch 0.20.4




### You **must** use ElasticSearch v0.20.4 to avoid compatibility problems.

```
wget https://download.elasticsearch.org/elasticsearch/elasticsearch/elasticsearch-0.20.4.deb

dpkg -i elasticsearch-0.20.4.deb


service elasticsearch start

```








`root@graylog:~# wget https://download.elasticsearch.org/elasticsearch/elasticsearch/elasticsearch-0.90.2.deb
--2013-07-18 15:05:26-- https://download.elasticsearch.org/elasticsearch/elasticsearch/elasticsearch-0.90.2.deb
Resolving download.elasticsearch.org (download.elasticsearch.org)... 2406:da00:ff00::36e1:f7f0, 2406:da00:ff00::36f3:6077, 54.225.247.240, ...
Connecting to download.elasticsearch.org (download.elasticsearch.org)|2406:da00:ff00::36e1:f7f0|:443... connected.
HTTP request sent, awaiting response... 200 OK
Length: 17136512 (16M) [application/octet-stream]
Saving to: ‘elasticsearch-0.90.2.deb’
100%[===================================================>] 17,136,512 4.71MB/s in 3.5s
2013-07-18 15:05:30 (4.71 MB/s) - ‘elasticsearch-0.90.2.deb’ saved [17136512/17136512]
root@graylog:~#
root@graylog:~# dpkg -i elasticsearch-0.90.2.deb
Selecting previously unselected package elasticsearch.
(Reading database ... 76390 files and directories currently installed.)
Unpacking elasticsearch (from elasticsearch-0.90.2.deb) ...
Setting up elasticsearch (0.90.2) ...
Adding system user `elasticsearch' (UID 106) ...
Adding new user `elasticsearch' (UID 106) with group `elasticsearch' ...
Not creating home directory `/usr/share/elasticsearch'.
* Starting ElasticSearch Server [ OK ]
Processing triggers for ureadahead ...
root@graylog:~#
root@graylog:~#
root@graylog:~# service elasticsearch start
* Starting ElasticSearch Server [ OK ]
root@graylog:~#`







## Install MongoDB







### Configure Package Management System (APT)


The Ubuntu package management tool (i.e. dpkg and apt) ensure package consistency and authenticity by requiring that distributors sign packages with GPG keys. Issue the following command to import the [10gen public GPG Key](http://docs.mongodb.org/10gen-gpg-key.asc):







```
    sudo apt-key adv --keyserver keyserver.ubuntu.com --recv 7F0CEB10

```






Create a /etc/apt/sources.list.d/10gen.list file using the following command.







```
    echo 'deb http://downloads-distro.mongodb.org/repo/ubuntu-upstart dist 10gen' | sudo tee /etc/apt/sources.list.d/10gen.list
```







Now issue the following command to reload your repository:







    
   ` sudo apt-get update`
















### Install Packages


Issue the following command to install the latest stable version of MongoDB:







    
    `sudo apt-get install mongodb-10gen`








When this command completes, you have successfully installed MongoDB! Continue for configuration and start-up suggestions.









### Manage Installed Versions


You can use the mongodb-10gen package to install previous versions of MongoDB. To install a specific release, append the version number to the package name, as in the following example:







    
    `apt-get install mongodb-10gen=2.2.3`








This will install the 2.2.3 release of MongoDB. You can specify any available version of MongoDB; however apt-get **will** upgrade the mongodb-10gen package when a newer version becomes available. Use the following _pinning_ procedure to prevent unintended upgrades.

To pin a package, issue the following command at the system prompt to _pin_ the version of MongoDB at the currently installed version:




`echo "mongodb-10gen hold" | sudo dpkg --set-selections`

I wasn't able to access mongo with this line

``` 
    mongo --username grayloguser --host localhost --password 123 graylog2
```

so I had to create a user and grant permissions

``` 
    db.addUser( { user: "grayloguser",pwd: "123",roles: [ "userAdminAnyDatabase","clusterAdmin" ] } );
```



# Downloading and extracting the Graylog server




### Download the current stable version from the [download pages](http://graylog2.org/download).


Extract the archive:

    
    ```~$ wget https://github.com/Graylog2/graylog2-server/releases/download/0.12.0/graylog2-server-0.12.0.tar.gz
    ~$ tar xvfz graylog2-server-0.12.0.tar.gz
    ~$ cd graylog2-server-0.12.0```




## Configuration


Now copy the example configuration files:

    
    ```~# cp graylog2.conf.example /etc/graylog2.conf
    ~# cp elasticsearch.yml.example /etc/graylog2-elasticsearch.yml```


You can leave most variables as they are for a first start. All of them should be well documented.

Configure at least these variables in `/etc/graylog2.conf`:



	
  * `is_master = true`

	
    * Set only one `graylog2-server` node as the master. This node will perform periodical and maintenance actions that slave nodes won't. Every slave node will accept messages just as the master nodes. Nodes will fall back to slave mode if there already is a master in the cluster.




	
  * `elasticsearch_config_file = /etc/graylog2-elasticsearch.yml`

	
    * This is the path to the ElasticSearch configuration file for the built-in ElasticSearch node of `graylog2-server`. Your `graylog2-server` node will act as a node in your ElasticSearch cluster, but not store any data itself. It will distribute the writes to other nodes in the ElasticSearch cluster.




	
  * `elasticsearch_max_docs_per_index = 20000000`

	
    * How many log messages to keep per index. This setting multiplied with`elasticsearch_max_number_of_indices` results in the maximum number of messages in your Graylog2 setup. It is always better to have several more smaller indices than just a few larger ones.




	
  * `elasticsearch_max_number_of_indices = 20`

	
    * How many indices to have in total. If this number is reached, the oldest index will be deleted.




	
  * `elasticsearch_shards = 4`

	
    * The number of shards for your indices. A good setting here highly depends on the number of nodes in your ElasticSearch cluster. If you have one node, set it to `1`. Read more about this in the knowledge base article about [configuring and tuning ElasticSearch](http://support.torch.sh/help/kb/graylog2-server/configuring-and-tuning-elasticsearch-for-graylog2).




	
  * `elasticsearch_replicas = 0`

	
    * The number of replicas for your indices. A good setting here highly depends on the number of nodes in your ElasticSearch cluster. If you have one node, set it to `0`. Read more about this in the knowledge base article about [configuring and tuning ElasticSearch](http://support.torch.sh/help/kb/graylog2-server/configuring-and-tuning-elasticsearch-for-graylog2).




	
  * `recent_index_ttl_minutes = 60`

	
    * Graylog2 keeps a so called recent index that includes only the newest log messages. This allows fast overview pages in the web interface. The messages you see in the "show recent messages" view are from this index. If you have thousands of messages per minute, set it to 1 minute because there are so many new messages coming in. If you have just a few messages per minute, set it to a higher values to still have a good overview without having to click on "show all messages".




	
  * `mongodb_*`

	
    * Enter your MongoDB connection and authentication information here. Make sure that you connect the web interface to the same database. You don't need to configure `mongodb_user` and `mongodb_password` if`mongodb_useauth` is set to `false`.





...and at least these in `/etc/graylog2-elasticsearch.yml`:



	
  * `cluster.name: graylog2`

	
    * The cluster name of your ElasticSearch cluster. All nodes that are discovered will join the cluster if they have the same cluster name. This must be the same cluster name your ElasticSearch nodes have configured.




	
  * Multicast/Unicast

	
    * The default setting of ElasticSearch is to use Multicast to discover other nodes. This can be useful but a bit hard to configure depending on your network architecture. Also think about your broadcast domains: If a developer starts up an ElasticSearch node and is in the same multicast broadcast domain, he will join your production cluster (if the `cluster.name` is the same). If you don't plan to change or add ElasticSearch nodes regulary, I would recommend to disable multicast and enable unicast. Do this by setting`discovery.zen.ping.multicast.enabled: false` to `true` and add your ElasticSearch node hosts to `discovery.zen.ping.unicast.hosts`. Multicast should be fine for a first quick start though and have no problems discovering a node on localhost.





Example for unicast discovery of a standard ElasticSearch server on the same host:

    
    ```discovery.zen.ping.multicast.enabled: false
    discovery.zen.ping.unicast.hosts: ["127.0.0.1:9300"]```


You might have to define different ports for your ElasticSearch node and the embedded `graylog2-server`ElasticSearch node if you are running them on the same host if you get port binding errors. It is recommended to have at least ElasticSearch running on a different host than `graylog2-server`.

A [detailled documentation of all important configuration variables](http://support.torch.sh/help/kb/graylog2-server/configuration) is available in this knowledge base and should be read after you have a first setup of Graylog2 running.


## Starting the server


You need to have Java installed. Running the OpenJDK is totally fine and should be available on all platforms:

    
    `~$ apt-get install openjdk-6-jre`


The first start should be performed without the `bin/graylog2ctl script to easily see warnings, errors or problems:

    
```
    ~$ java -jar graylog2-server.jar --debug 
    
 ```


See the [startup parameters](http://support.torch.sh/help/kb/graylog2-server/starting-and-stopping-the-server-cli-parameters) page to learn more about available startup parameters. Note that you might have to be `root`to bind to port 514 for syslog.

You should see a line like this in the debug output if `graylog2-server` successfully connected to your ElasticSearch cluster:

    
    ```2012-12-03 00:26:00,080 DEBUG: org.elasticsearch.transport.netty - [graylog2-server] connected to node [[Cyber][APKeeyD_T2uULknphyKlBg][inet[/192.168.1.6:9300]]]```


This line indicates that your `graylog2-server` instance is up and ready to accept messages:

    
    ```2012-12-03 00:26:01,684 INFO : org.graylog2.Core - Graylog2 up and running.```


Let's try that out! Send in a simple (not standard compliant) syslog message using netcat or your preferred socket communication tool:

    
    ```~$ echo "<34> Hello Graylog2. Let's be friends." | nc -w 1 -u localhost 514```


You should see this message being handled in your `graylog2-server` debug output:

    
    ```2012-12-03 00:47:37,128 INFO : org.graylog2.inputs.syslog.SyslogProcessor - Date could not be parsed. Was set to NOW because allow_override_syslog_date is true.
    2012-12-03 00:47:37,128 DEBUG: org.graylog2.inputs.syslog.SyslogProcessor - Adding received syslog message <Ae1F6Of3RtWZWMofKtbx5w> to process buffer: level: 2 | host: localhost | facility: security/authorization | add.: 0 | shortMessage:  Hello Graylog2. Let's be friends.
    2012-12-03 00:47:37,128 DEBUG: org.graylog2.buffers.processors.ProcessBufferProcessor - Starting to process message <Ae1F6Of3RtWZWMofKtbx5w>.
    2012-12-03 00:47:37,128 DEBUG: org.graylog2.buffers.processors.ProcessBufferProcessor - Applying filter [Rewriter] on message <Ae1F6Of3RtWZWMofKtbx5w>.
    2012-12-03 00:47:37,129 DEBUG: org.graylog2.buffers.processors.ProcessBufferProcessor - Applying filter [Blacklister] on message <Ae1F6Of3RtWZWMofKtbx5w>.
    2012-12-03 00:47:37,129 DEBUG: org.graylog2.buffers.processors.ProcessBufferProcessor - Applying filter [Tokenizer] on message <Ae1F6Of3RtWZWMofKtbx5w>.
    2012-12-03 00:47:37,129 DEBUG: org.graylog2.filters.TokenizerFilter - Extracted <0> additional fields from message <Ae1F6Of3RtWZWMofKtbx5w> k=v pairs.
    2012-12-03 00:47:37,129 DEBUG: org.graylog2.buffers.processors.ProcessBufferProcessor - Applying filter [StreamMatcher] on message <Ae1F6Of3RtWZWMofKtbx5w>.
    2012-12-03 00:47:37,130 DEBUG: org.graylog2.filters.StreamMatcherFilter - Routed message <Ae1F6Of3RtWZWMofKtbx5w> to 1 streams.
    2012-12-03 00:47:37,131 DEBUG: org.graylog2.buffers.processors.ProcessBufferProcessor - Applying filter [CounterUpdater] on message <Ae1F6Of3RtWZWMofKtbx5w>.
    2012-12-03 00:47:37,131 DEBUG: org.graylog2.buffers.processors.ProcessBufferProcessor - Finished processing message. Writing to output buffer.
    2012-12-03 00:47:37,131 DEBUG: org.graylog2.buffers.processors.OutputBufferProcessor - Processing message <Ae1F6Of3RtWZWMofKtbx5w> from OutputBuffer.
    2012-12-03 00:47:37,131 DEBUG: org.graylog2.buffers.processors.OutputBufferProcessor - Writing message batch to [ElasticSearch Output]. Size <1>
    2012-12-03 00:47:37,131 DEBUG: org.graylog2.outputs.ElasticSearchOutput - Writing <1> messages.
    2012-12-03 00:47:37,141 DEBUG: org.graylog2.indexer.EmbeddedElasticSearchClient - Deflector index: Bulk indexed 1 messages, took 9 ms, failures: false
    2012-12-03 00:47:37,141 DEBUG: org.graylog2.indexer.EmbeddedElasticSearchClient - Recent index: Bulk indexed 1 messages, took 9 ms, failures: false
    2012-12-03 00:47:37,142 DEBUG: org.graylog2.buffers.processors.OutputBufferProcessor - Wrote message <Ae1F6Of3RtWZWMofKtbx5w> to all outputs. Finished handling.```


Now exit and start the server using the control script:

    
    ```~$ cd bin/
    ~$ ./graylog2ctl start```


This will start your graylog2-server in the background. Find a log in nohup.out in the same directory.

That's it! Now go on by [installing the graylog2-webinterface](http://support.torch.sh/help/kb/graylog2-web-interface/installing-graylog2-web-interface-on-debian-6) to finish your installation.


# Installing graylog2-web-interface on Debian 6







## [](http://support.torch.sh/help/kb/graylog2-web-interface/installing-graylog2-web-interface-on-debian-6#prerequisites)Prerequisites


You will need to have the following services installed on either the host you are running `graylog2-web-interface`on or on dedicated machines:



	
  * One or more instances of `graylog2-server`

	
  * ElasticSearch v0.20.4

	
  * MongoDB (as recent stable version as possible, **at least v2.0**)


You **must** use ElasticSearch v0.20.4 to avoid compatibility problems.
The Debian MongoDB packages are outdated. Use the [official MongoDB apt source](http://docs.mongodb.org/manual/tutorial/install-mongodb-on-debian/). (Available for many distributions and operating systems)

**Install graylog2-server first.** Here is the guide for that: [Installing graylog2-server v0.10.0 on Debian](http://support.torch.sh/help/kb/graylog2-server/installing-graylog2-server-v0100-on-debian-6)


## [](http://support.torch.sh/help/kb/graylog2-web-interface/installing-graylog2-web-interface-on-debian-6#installing-ruby)Installing Ruby


First make sure that you don't have an existing Ruby version installed that might cause version conflicts. You **must** run at least Ruby 1.9.2.

    
    ```admin@ip-10-54-125-95:~$ ruby -v
    -bash: ruby: command not found```


That is fine. Let's install it. Remove versions below 1.9.2 and make sure that they were completely purged before continuing.

$ruby -v
The program 'ruby' can be found in the following packages:
* ruby1.8
* ruby1.9.1
Try: apt-get install <selected package>
$ apt-get install ruby1.9.2

This already shows how broken the Debian package management of Ruby is. Let's make `ruby` default to Ruby 1.9.2. (On Ubuntu you can run `update-alternatives --config ruby`):

    
    ```$ cd /usr/bin
    $ ln -sf ruby1.9.1 ruby
    $ ln -sf gem1.9.1 gem
    $ ln -sf erb1.9.1 erb
    $ ln -sf irb1.9.1 irb
    $ ln -sf rake1.9.1 rake
    $ ln -sf rdoc1.9.1 rdoc
    $ ln -sf testrb1.9.1 testrb```


... and finally:

    
    ```$ ruby -v
    ruby 1.9.2p0 (2010-08-18 revision 29036) [x86_64-linux]```


Now install bundler, which will take care or installing required library Ruby libraries later:

    
    ```$  gem install bundler --no-rdoc --no-ri
    Successfully installed bundler-1.2.3
    1 gem installed
    $ ln -sf /var/lib/gems/1.9.1/bin/bundle /usr/bin/bundle
    $ bundle -v
    Bundler version 1.2.3```


An alternative to this setup is using the [https://rvm.io/rvm/install/](http://support.torch.sh/help/kb/graylog2-web-interface/Ruby%20Version%20Manager).


## [](http://support.torch.sh/help/kb/graylog2-web-interface/installing-graylog2-web-interface-on-debian-6#downloading-and-extracting-the-web-interface)Downloading and extracting the web interface



    
    ```$ ``````cd /opt wget https://github.com/Graylog2/graylog2-web-interface/releases/download/0.12.0/graylog2-web-interface-0.12.0.tar.gz```
    ```$ tar -xzf graylog2-web-interface-0.12.0.tar.gz  
    $ mv graylog2-web-interface-0.12.0 graylog2-web-interface 
    $ cd graylog2-web-interface```




## [](http://support.torch.sh/help/kb/graylog2-web-interface/installing-graylog2-web-interface-on-debian-6#configuration)Configuration


Edit all `config/*.yml` configuration files - They should be pretty self-explanatory and are commented. Of course the configured MongoDB and ElasticSearch instances/databases (`mongoid.yml`, `indexer.yml`) have to be the same that `graylog2-server` uses. The web interface won’t start up if it can’t connect to the specified MongoDB instance. You can specify any ElasticSearch node as target (except the `graylog2-server` data-only nodes) - The read operations will be distributed over the cluster automatically.


## [](http://support.torch.sh/help/kb/graylog2-web-interface/installing-graylog2-web-interface-on-debian-6#installing-the-web-interface)Installing the web interface


First install some dependencies:

    
    ```$ ``````apt-get install ruby1.9.1-dev build-essential libcurl4-openssl-dev libssl-dev zlib1g-dev bundler ruby-bundler```


Now let bundler install all required Ruby libraries:

    
    ```$ bundle install --without=development
    Fetching gem metadata from http://rubygems.org/.........
    Fetching gem metadata from http://rubygems.org/..
    Installing rake (0.9.2.2) 
    Installing i18n (0.6.1) 
    [ ... ]
    Your bundle is complete! Use `bundle show [gemname]` to see where a bundled gem is installed.```




## [](http://support.torch.sh/help/kb/graylog2-web-interface/installing-graylog2-web-interface-on-debian-6#configuring-a-secret-toking)Configuring a secret toking


You will have to generate a secret token to secure encryption and cookies. **From version 0.12.0 on the web interface will refuse to start if you did not generate a token!**

It's this easy: Open the file `config/initializers/secret_token.rb` and replace `CHANGE ME` with an at least 30 characters long and all random string:

    
```
Graylog2WebInterface::Application.config.secret_token = '509f002ab9473c97b1642cb94741c38a076a7e606210b9603ce035bebc5b982a639386751361919b2e71bdd5d161ad695110912f7010062e13b390d6d8abc154'
```


Hint: You can generate a strong token by running `rake secret`.

Let's give it a first quick try by starting [passenger](https://www.phusionpassenger.com/) (the recommended HTTP server we will later use as Apache2 module) in standalone mode:

    
```
root@ip-10-54-125-95:/opt/graylog2-web-interface# gem install passenger --no-rdoc --no-ri
Successfully installed passenger-3.0.18
1 gem installed

$ /var/lib/gems/1.9.1/gems/passenger-4.0.10/bin/passenger start -e production


root@graylog:/opt/graylog2-web-interface# /var/lib/gems/1.9.1/gems/passenger-4.0.10/bin/passenger start -e production


    [ ... possibly compiling itself ... ]
    =============== Phusion Passenger Standalone web server started ===============
    PID file: /opt/graylog2-web-interface/tmp/pids/passenger.3000.pid
    Log file: /opt/graylog2-web-interface/log/passenger.3000.log
    Environment: development
    Accessible via: http://0.0.0.0:3000/
    
    You can stop Phusion Passenger Standalone by pressing Ctrl-C.
    ===============================================================================```

```

Point your browser to your server on port 3000 and see if the web interface is working and promts you to create the first user. Check the shell output if you get an error.

The last step is to use `graylog2-web-interface` with Apache2. Stop the standalone passenger instance and install Apache2 with the required libraries and dependencies:


```
root@ip-10-54-125-95:/opt/graylog2-web-interface# apt-get install apache2-mpm-prefork apache2-prefork-dev libapr1-dev libaprutil1-dev
```


Now install the passenger Apache2 module:

```
$ /var/lib/gems/1.9.1/gems/passenger-4.0.10/bin/passenger-install-apache2-module

    
    
    Compiling and installing Apache 2 module...
    [ ... compile compile compile ...]
    The Apache 2 module was successfully installed.```

```

Add these lines to your `/etc/apache2/apache2.conf` before the `Include sites-enabled/` line to enable the module:

```
LoadModule passenger_module /var/lib/gems/1.9.1/gems/passenger-4.0.10/buildout/apache2/mod_passenger.so
PassengerRoot /var/lib/gems/1.9.1/gems/passenger-4.0.10
PassengerDefaultRuby /usr/bin/ruby1.9.1
```

The last step is to configure a virtual host (for example `/etc/apache2/sites-available/default`):

    
```
root@ip-10-54-125-95:/opt/graylog2-web-interface# cat /etc/apache2/sites-available/default
<VirtualHost *:80>
    ServerAdmin you@example.com
    DocumentRoot /opt/graylog2-web-interface/public

    RailsEnv 'production'

    <Directory /opt/graylog2-web-interface/public>
        Allow from all
        Options -MultiViews
    </Directory>

    ErrorLog /var/log/apache2/error.log
    LogLevel warn
    CustomLog /var/log/apache2/access.log combined
</VirtualHost>
```


Finally give correct permissions to the web interface folder:

    
`$ chown www-data.www-data /opt/graylog2-web-interface -R`


Restart Apache2:

    
`$  /etc/init.d/apache2 restart`


Point your browser to your server and enjoy your Graylog2 setup!

`curl localhost:80`

```
<html><body>You are being <a href="http://localhost/login">redirected</a>.</body></html>
```

We have to open the port 80 to be able to access from the browser.

`sudo iptables -A INPUT -p tcp --dport 80 -j ACCEPT`











