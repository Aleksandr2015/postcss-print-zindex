var postcss = require('postcss');
var fs = require('fs');

var plugin = require('./index.js');

// run index.js
fs.readFile('styles.css', (err, css) => {
    postcss([plugin])
        .process(css, { from: 'styles.css', to: 'styles.css' })
        .then(result => {
            //fs.writeFile('dest/app.css', result.css);
            //if ( result.map ) fs.writeFile('dest/app.css.map', result.map);
        });
});
