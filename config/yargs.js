const { describe } = require('yargs');

const argv = require('yargs')
.options('b', {
    alias: 'base',
    type: 'number',
    demandOption: true,
    describe: 'Es la base de la table de multiplicar'
})
.options('l', {
    alias: 'listar',
    type: 'boolean',
    default: false,
    demandOption: false,
    describe: 'Muestra el resultado de tabla de multiplicacion'
})
.options('h', {
    alias: 'hasta',
    type: 'number',
    default: 10,
    demandOption: false,
    describe: 'Especifica hasta que numero se va a multiplicar la base'
})
.check( (argv, options) => {
    if( isNaN(argv.b) ) {
        throw 'La base debe ser un numero'
    }

    if( isNaN(argv.h) ) {
        throw 'El multiplicador debe ser un numero'
    }

    return true;
} )
.argv;

module.exports = argv;