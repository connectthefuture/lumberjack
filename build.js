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
        var withLicense = "/** \n" +
            "* Lumberjack - A modern client side logger \n" +
            "* \n" +
            "* Permission is hereby granted, free of charge, to any person obtaining a copy of this software and \n" +
            "* associated documentation files (the \"Software\"), to deal in the Software without restriction, including without \n" +
            "* limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the \n" +
            "* Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions: \n"+
            "* The above copyright notice and this permission notice shall be included in all copies or substantial portions \n" +
            "* of the Software. \n\n" +
            "* THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, \n" +
            "* INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND \n" +
            "* NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR \n" +
            "* OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN \n" +
            "* CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.\n" +
            "* \n" +
            "**/\n\n";
        withLicense = withLicense + code;
        fs.writeFileSync('./dist/lumberjack.js', withLicense);
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
