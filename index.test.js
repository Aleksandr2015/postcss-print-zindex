var postcss = require('postcss');
var fs = require('fs');

var plugin = require('./index.js');

function run(input, output, opts) {
    return postcss([ plugin(opts) ]).process(input)
        .then(result => {
            expect(result.css).toEqual(output);
            expect(result.warnings().length).toBe(0);
        });
}

/* Write tests here

it('does something', () => {
    return run('a{ }', 'a{ }', { });
});

*/

// run index.js
fs.readFile('styles.css', (err, css) => {
    postcss([plugin])
        .process(css, { from: 'styles.css', to: 'styles.css' })
        .then(result => {
            //fs.writeFile('dest/app.css', result.css);
            //if ( result.map ) fs.writeFile('dest/app.css.map', result.map);
        });
});
