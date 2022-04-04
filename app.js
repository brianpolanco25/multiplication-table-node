
const { isBooleanObject } = require('util/types');
const { crearArchivo } = require('./helpers/multiplicar');
const argv = require('./config/yargs.js');

console.clear();


crearArchivo( argv.base, argv.listar, argv.hasta).then( nombreArchivo => console.log(nombreArchivo, 'creado') )
.catch( err => console.log( err ) );
