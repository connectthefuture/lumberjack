var options = {
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
};

module.exports = options;
