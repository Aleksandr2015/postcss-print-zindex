var postcss = require('postcss'),
    Table = require('cli-table'),
    chalk = require('chalk');

// Table headers
const table = new Table({
    head: [chalk.green('Z-index Value'), chalk.green('Selector'), chalk.green('From')]
});

module.exports = postcss.plugin('postcss-print-zindex', function (opts) {
    opts = opts || {};

    // Work with options here

    return function (root, result) {

        // Transform CSS AST here
        root.walkDecls('z-index', decl => {
            const zindex_val = decl.value > 5 ? chalk.bgRed(decl.value) : chalk.yellow(decl.value);
            table.push([
                zindex_val,
                chalk.magenta(decl.parent.selector),
                `${chalk.gray(decl.source.input.from)}\n\line: ${decl.source.start.line}`
            ]);
        });

        // Print table
        console.log(table.toString());

    };
});
