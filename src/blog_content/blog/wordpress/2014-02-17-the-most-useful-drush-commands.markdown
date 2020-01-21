---
author: cristinallamas
comments: true
date: 2014-02-17 11:08:41+00:00
layout: post
link: https://cristinallamas.wordpress.com/2014/02/17/the-most-useful-drush-commands/
slug: the-most-useful-drush-commands
title: The most useful Drush commands
wordpress_id: 188
categories:
  - Drupal
---

# See main information and status of the site

`drush status`

# Clear the cache

    `drush cc all`

### Clear the cache, even if Drupal is broken

    `drush sql-query "DELETE FROM cache"`

`sql-query` executes sql queries in the database where Drupal is installed.

### Download the last recommended release of 2 modules (and their dependencies)

    `drush dl module1 module2`

### Download a -dev version of a module

`drush dl views-7.x-3.x --package-handler=git_drupalorg`

Seems that adding `--package-handler=git_drupalorg` is not needed anymore.

### Download the git HEAD version of a module

Short answer: drush does not do that.  
Long answer: See [http://drupal.stackexchange.com/q/62934/10086](http://drupal.stackexchange.com/q/62934/10086)

### Enable a module

    `drush en name_of_module -y`

`-y` skips the confirmation question. Some drush commands may miss the `-y` part, a workaround for this that always works is putting it before:

`drush -y en name_of_module`

Newer versions of drush automatically download the module if needed.

### Disable a module

    `drush dis name_of_module`

### Disable a module, even if Drupal is broken

```bash
    drush sql-query "UPDATE system SET status='0' WHERE name='module_name'"
    drush sql-query "DELETE FROM cache_bootstrap WHERE cid='system_list'"
```

Source: [https://drupal.org/node/157632](https://drupal.org/node/157632)

### Uninstall a module

    `drush pm-uninstall name_of_module -y`

### Update a module

    `drush up name_of_module`

### Update Drupal

    `drush up drupal`

### Update all contrib modules and Drupal

    `drush up`

### Delete a field

    `drush field-delete fieldname`

### Delete an instance of a field

    `drush field-delete fieldname --bundle=article`

### Manually delete a field and all its data (not recommended)

```
    drush sql-query "delete from field_config where field_name='fieldname'"
    drush sql-query "delete from field_config_instance where field_name='fieldname'"
    drush sql-query "drop table field_data_field_fieldname"
    drush sql-query "drop table field_revision_field_fieldname"
```

### Set a password for a user

    `drush upwd --password="asdf" admin`

### Get a one-time login link for the Administrator user

    `drush uli`

### Run cron

    `drush cron`

### Set a variable

    `drush vset variable_name 'value'`

### Get the value of a variable

    `drush vget variable_name`

### See last logged events (watchdog)

    `drush ws`

### Run a php script with Drupal bootstrapped

    `drush scr --uri=domain.com script.php`

Use --uri to specify the server name. Useful in cron:

```
    /usr/bin/drush --root=/var/www/drupal scr /var/www/drupal/sites/all/scripts/example.php >>/root/logs/scripts/example_log.txt 2>>/root/logs/scripts/example_errors.txt
```

### Run custom code

    `drush eval "variable_set('foo', 'bar');"`

### Repopulate database tables used by menu functions

    `drush eval "menu_rebuild();"`

See [https://api.drupal.org/api/drupal/includes!menu.inc/function/menu_rebuild/7](https://api.drupal.org/api/drupal/includes!menu.inc/function/menu_rebuild/7)

### Rescan all code in modules or includes directories, storing the location of each interface or class in the database

    `drush eval "registry_rebuild();"`

Useful when moving installed modules. See [http://drupal.stackexchange.com/q/17657/10086](http://drupal.stackexchange.com/q/17657/10086)

### Open a mysql console logged in

`drush sql-cli`

### Export a backup of the database

```
    drush sql-dump | gzip --stdout > $(date +\%Y-\%M-\%d-\%H-\%M-\%S).sql.gz
```

### Remove all database tables (empty the database)

    `drush sql-drop`

Useful before importing a database backup.

### See all drush alias defined

    `drush site-alias`

### Use an alias

    `drush @aliasname command`

### Flush image styles

    `drush image-flush all`

### Install Drupal

    `drush site-install`

### A more general and exhaustive list can be found here: [https://groups.drupal.org/node/28088](https://groups.drupal.org/node/28088)

Full documentation is available at [http://drush.ws](http://drush.ws/)
