---
author: cristinallamas
comments: true
date: 2014-02-12 13:30:17+00:00
layout: post
link: https://cristinallamas.wordpress.com/2014/02/12/remote-drupal-site-with-cloud-storage-db-sync/
slug: remote-drupal-site-with-cloud-storage-db-sync
title: Remote drupal site with cloud storage db sync
wordpress_id: 174
categories:
  - Drupal
---

## Creating your Dropbox Database

1. Set your directory to Dropbox / Google Drive
2. Move the current MAMP database to Dropbox / Google Drive
3. Remove the old MAMP database folder
4. Create a symbolic link in your MAMP folder to your Dropbox database folder

Each of those steps can be achieved with the corresponding Terminal commands below...

```
    cd ~/Dropbox/
    cp -r /Applications/MAMP/db MAMP_DATABASE
    rm -rf /Applications/MAMP/db
    ln -s ~/Dropbox/MAMP_DATABASE/db /Applications/MAMP/db <br></br><b>Adding Computers to your Dropbox Database sync setup</b>
```

The Terminal commands we used earlier are useful in this situation, but we certainly don't want to just overwrite the existing Dropbox database - We want to use it. This can be achieved with the following steps…

1. Set your directory to Dropbox
2. Remove the old MAMP database folder
3. Create a symbolic link in your MAMP folder to your Dropbox database folder

Each of those steps can be achieved with the corresponding Terminal commands below...

```
    cd ~/Dropbox/
    rm -rf /Applications/MAMP/db
    ln -s ~/Dropbox/MAMP_DATABASE/db /Applications/MAMP/db

    <br></br><br></br>
```
