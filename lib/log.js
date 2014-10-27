var logger      = console;
var bind        = Function.prototype.bind;
var stackTrace  = require( "stacktrace-js" );
var enabled     = require( "./enableLogger" );
var toServer    = require( "./postToServer" );


var log = function( logInfo , type ){

    var loggerOptions = logInfo.options;

    enabled();

    var _logger = function(){

        var trace = stackTrace({e: new Error});

        var args = Array.prototype.slice.call(arguments);

        args.push( { stackTrace : trace } );

        toServer( logInfo , type , args );

        if( enabled.clientSideLoggingIsEnabled() ){
            // Log the correct type of log [ "log" , "debug", "warn", "error", "info" ]
            console[ type ].apply( logger , args );
        } else {

            console[ type ] = function(){};

        }

    };


    var args = [ logger ];

    // check to see if color is enabled
    if( loggerOptions.colorEnabled ) {

        // Set up the log title and color
        var logTitle = "%c" + logInfo.name;

        // Add the log title and color so that browsers can use it
        args.push( logTitle, logInfo.color );

    } else {

        // Add the formatted log name to be logged first
        args.push( logInfo.name );

    }

    // Add the arguments that were passed to the log statement
    if( arguments.length > 1 ){
        var logArgs = Array.prototype.slice.call( arguments , 2 );
        args = args.concat( logArgs );
    }

    return bind.apply( _logger , args );

};

module.exports = log;
