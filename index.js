var postcss = require('postcss'),
    Table = require('cli-table'),
    chalk = require('chalk');

// Table headers
const table = new Table({
    head: [
        chalk.green('Z-index Value'),
        chalk.green('Selector'),
        chalk.green('From')
    ]
});

module.exports = postcss.plugin('postcss-print-zindex', function (opts) {
    opts = opts || {};

    // Work with options here

    return function (root, result) {

        // Transform CSS AST here
        root.walkDecls('z-index', decl => {
            const val = decl.value > 5 ? chalk.bgRed(decl.value) : chalk.yellow(decl.value);
            const selector = decl.parent.selector.split(/,\s|,/).join(',\n');
            const file = decl.source.input.from.split(/\/|\\/).slice(-1)[0];
            const line = decl.source.start.line;

            table.push([
                val,
                chalk.magenta(selector),
                `line: ${line} \nfile: ${file}`
            ]);
        });

        // Print table
        console.log(table.toString());

    };
});
