var options = require( "./options" );
var qs      = require( "querystring" );


var clientSideLoggingIsEnabled = function clientSideLoggingIsEnabled () {

    var enableBy    = options.enableBy;
    var isEnabled   = false;
    var inNode      = typeof window === 'undefined';

    var queryParams = qs.decode( window.location.search.split("").splice( 1 ).join("") );

    switch ( enableBy ) {

        case "localStorage" :

            if( !inNode && window.localStorage ){

                var localStorage = window.localStorage;

                if( localStorage[ options.debugKey ] == "true" ){

                    isEnabled = true;

                }

            }

            break;
        case "query" :

            if( !inNode && queryParams[ options.debugKey ] == "true" ){

                isEnabled = true;

            }

            break;
        case "jsVar" :

            if( window[ options.debugKey ] ) {

                isEnabled = true;

            }

            break;
    }

    return isEnabled;
};




module.exports.clientSideLoggingIsEnabled = clientSideLoggingIsEnabled;