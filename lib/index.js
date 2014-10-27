var loggerOptions       = require( "./options");
var colorizer           = require( "./colorizer" );
var merge               = require( "merge" );
var loggerMap           = {};

var setOptions = function setOptions ( logOptions ){

    loggerOptions = merge( loggerOptions , logOptions );

};

var getOptions = function getOptions (){

    return loggerOptions;

};

var logger = function( loggerName ){

    var options = getOptions();
    var logName = (loggerName.slice(0, options.paddingLength));
        logName = logName + Array( options.paddingLength + 3 - logName.length ).join( " " ) + "|";

    // color support
    var color               = colorizer.yieldColor( options );
    options.colorEnabled    = colorizer.colorSupported( options );


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

module.exports.setOptions   = setOptions;
module.exports.options      = getOptions.apply();
module.exports.logger       = logger;
