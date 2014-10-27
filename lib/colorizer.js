var options     = require( "./options" );

var yieldColor = function( ) {
    var goldenRatio = 0.618033988749895;
    options.hue += goldenRatio;
    options.hue = options.hue % 1;
    return options.hue * 360;
};


var colorSupported = function colorSupported ( ) {

    var chrome          = !!window.chrome;
    var firefox         = /firefox/i.test(navigator.userAgent);
    var safari          = /Safari/i.test(navigator.userAgent);
    var firefoxVersion  = null;
    var safariVersion   = null;

    if (firefox) {
        var match = navigator.userAgent.match(/Firefox\/(\d+\.\d+)/);
        if (match && match[1] && Number(match[1])) {
            firefoxVersion = Number(match[1]);
        }
    }

    if (safari) {
        var match = navigator.userAgent.match(/Version\/(\d+\.\d+)/);
        if (match && match[1] && Number(match[1])) {
            safariVersion = Number(match[1]);
        }
    }

    return chrome || firefoxVersion >= 31.0 || safariVersion >= 6.0;

};


module.exports.yieldColor       = yieldColor;
module.exports.colorSupported   = colorSupported;