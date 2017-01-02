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
*/

it('printing zindex', () => {
    return fs.readFile('csstest/styles.css', (err, css) => {
        return run(css.toString(), css.toString(), { });
    });
});
