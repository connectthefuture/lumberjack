LumberJack
===========

A modern client side logging framework 


## How to Use LumberJack

For browserify projects 

```javascript
npm install --save lumberjack
```

For the browser

```html 
<script src="/js/lumberjack.min.js">
```

Once you have LumberJack installed you can use it like this

```javascript
var loggger = lumberjack.logger( "Paul Bunyan" );
logger.log( "Where is Babe" );
logger.info( "pulling the tree" );
```
