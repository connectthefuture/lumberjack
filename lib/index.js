var options     = require( "./options" );
var colorizer   = require( "./colorizer" );
var loggerMap   = {};




var logger = function( loggerName ){

    var logName = (loggerName.slice(0, options.paddingLength));
        logName = logName + Array( options.paddingLength + 3 - logName.length ).join( " " ) + "|";

    // color support
    var color               = colorizer.yieldColor();
    options.colorEnabled    = colorizer.colorSupported();


    loggerMap[ logName ] = {
        color : color,
        style : "color: hsl(" + ( color ) + ",99%,40%); font-weight: bold"
    };

    var logInfo = {
        name    : logName,
        color   : loggerMap[ logName ].style,
        options : options
    };

    var _logger = {
        log     : require( "./log" )( logInfo , "log"   ),
        debug   : require( "./log" )( logInfo , "debug" ),
        warn    : require( "./log" )( logInfo , "warn"  ),
        error   : require( "./log" )( logInfo , "error" ),
        info    : require( "./log" )( logInfo , "info"  )
    };


    return _logger;

};

module.exports.options = options;
module.exports.logger  = logger;
