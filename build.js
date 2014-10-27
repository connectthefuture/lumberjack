var browserify  = require('browserify');
var fs          = require('fs');
var uglify      = require("uglify-js");

var b           = browserify({ standalone: 'lumberjack' });

b.add('./index.js');

b.bundle(function (error, code) {

    if( error ){
        console.log( error );
    } else {
        console.log( "--------------------------" );
        console.log( "Building ./dist/lumberjack.js" );
        fs.writeFileSync('./dist/lumberjack.js', code);
        console.log( "Built ./dist/lumberjack.js" );
        console.log( "-------------------------- \n\n" );

        //Uglify
        console.log( "--------------------------" );
        console.log( "Building ./dist/lumberjack.min.js" );
        var min_code = uglify.minify('./dist/lumberjack.js').code;
        fs.writeFileSync('./dist/lumberjack.min.js', min_code);
        console.log( "Built ./dist/lumberjack.min.js" );
        console.log( "-------------------------- \n\n" );
    }


});
