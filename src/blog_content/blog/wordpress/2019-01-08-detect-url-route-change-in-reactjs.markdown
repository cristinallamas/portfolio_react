---
author: cristinallamas
comments: true
date: 2019-01-08 15:57:53+00:00
layout: post
link: https://cristinallamas.wordpress.com/2019/01/08/detect-url-route-change-in-reactjs/
slug: detect-url-route-change-in-reactjs
title: Detect URL Route change in ReactJS
wordpress_id: 299
categories:
- Development
tags:
- javascript
- react
- react-router
- reactjs
- router
---

To detect a URL change in a single page React application you can use the following code snippet:

```javascript
import { withRouter } from 'react-router-dom';

history.listen((location, action) => {
console.log("on route change");
// Do stuff.
})
```