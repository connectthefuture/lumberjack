LumberJack-Logger
===========

A modern client side logging framework 


## How to Use LumberJack

For browserify projects - coming soon

```javascript
npm install --save lumberjack-logger
```

For the browser

```html 
<script type="text/javascript" src="/js/lumberjack.min.js">
```

Once you have LumberJack installed you can use it like this

```javascript
var loggger = lumberjack.logger( "Paul Bunyan" );
logger.log( "Where is Babe" );
logger.info( "pulling the tree" );
```
### Available Options

```javascript
{
    paddingLength               : 15,
    hue                         : 0,
    enableBy                    : "localStorage", // options are "query" , "localStorage" , "jsVar"
    debugKey                    : "debug",
    logToServer                 : false,
    serverEndPoint              : "http://localhost:3000/client/log",
    showStackTraceInJsConsole   : true,
    buffer                      : 20,
    logWhenBufferFull           : true,
    logLevel                    : "error", // options are "log" , "info" , "debug", "warn", "error"
    colorEnabled                : true
}
```


### Inspiration

[andLog](https://github.com/HenrikJoreteg/andlog) by [@henrikjoreteg](http://twitter.com/henrikjoreteg)

[Bows](https://github.com/HenrikJoreteg/andlog) by [@philip_roberts](http://twitter.com/philip_roberts)


### License

MIT
