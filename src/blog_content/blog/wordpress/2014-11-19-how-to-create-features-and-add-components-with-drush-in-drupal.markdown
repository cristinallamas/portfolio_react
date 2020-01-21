---
author: cristinallamas
comments: true
date: 2014-11-19 12:04:36+00:00
layout: post
link: https://cristinallamas.wordpress.com/2014/11/19/how-to-create-features-and-add-components-with-drush-in-drupal/
slug: how-to-create-features-and-add-components-with-drush-in-drupal
title: How to create Features and add components with Drush in Drupal
wordpress_id: 230
categories:
- Drupal
tags:
- drupal
- drush
- features
---

# Creation



```
    drush fe --d --destination="sites/all/modules/custom"  my_feature views:my_view
```

We can find this information in the .info file

```
name = my_feature
core = 7.x
package = Features
dependencies[] = views
features[ctools][] = views:views_default:3.0
features[features_api][] = api:2
features[views_view][] = my_view
```

# Enable your Feature



    
    ```drush cc all```



    
    ```drush en my_feature```




# Adding Components


To see that components are available to add into your feature we'll run Feature Compile

    
    `drush fc`




If we get something like this:







Available sources
image:adaptive
image:thumbnail
image:medium
image:largeI could add into the .info file the following syntax.

    
    `features[image][] = thumbnail`




# Update the Feature


via Drush using`drush fu`, short for `drush features-update`.

    
    `drush --d fu my_feature`



