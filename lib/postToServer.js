var ajax            = require( "component-ajax" );
var debugLevelMap   = require( "./debugLevels" );
var queue           = [];
var currentLogData  = [];


var submitLog = function SubmitLog ( logData ) {

    if( typeof logData == "object"){

        logData = {
            logs : logData
        }

    }

    logData = JSON.stringify( logData );

    ajax( {
        url         : "http://localhost:3000/client/log",
        type        : "POST",
        contentType : "application/json",
        crossDomain : true,
        data        : logData,
        success: function (data) {
            //console.log(  data );
        },
        error: function (error) {
            console.log(error);
        }
    } );

};

module.exports = function(  logInfo , type , args , options ){

    var argsToBeLogged = args.slice( 2 );

    var logData = {

        logName : logInfo.name,
        color   : logInfo.color,
        logType : type,
        logs    : argsToBeLogged

    };



    if( debugLevelMap[ options.logLevel ] <= debugLevelMap[ type ] ) {

        if( queue.length > 0 ){

            currentLogData = queue;

            currentLogData.push( logData );

            logData = currentLogData;
        }

        submitLog( logData );

    } else {

        if( queue.length < options.buffer ){

            queue.push( logData );

        } else if( options.logWhenBufferFull ){

            currentLogData = queue;

            currentLogData.push( logData );

            logData = currentLogData;

            submitLog( logData );

        } else {

            queue = queue.slice( 1 );

            queue.push( logData );

        }


    }
}