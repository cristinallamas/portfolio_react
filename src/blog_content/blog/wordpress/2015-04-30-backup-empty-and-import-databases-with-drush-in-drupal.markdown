---
author: cristinallamas
comments: true
date: 2015-04-30 14:03:14+00:00
layout: post
link: https://cristinallamas.wordpress.com/2015/04/30/backup-empty-and-import-databases-with-drush-in-drupal/
slug: backup-empty-and-import-databases-with-drush-in-drupal
title: Backup, Empty and Import databases with Drush in Drupal.
wordpress_id: 239
categories:
  - Drupal
tags:
  - backup
  - database
  - db
  - drupal
  - drush
---

## Create a backup.

```
drush sql-dump > /path/to/folder/backup.sql
```

## Empty the database tables.

```
drush sql-drop
```

## Import the tables.

```
drush sql-cli < /path/to/folder/backup.sql
```
