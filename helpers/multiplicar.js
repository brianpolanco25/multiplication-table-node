
const colors = require('colors');
const fs = require('fs');

const crearArchivo = async ( base = 5, listar = false, hasta ) => {

    try {

        let salida = '';

        for( let i = 1; i <= hasta; i++ ){
            salida += `${ base } x ${ i } = ${ base * i }\n` ;
        }

        fs.writeFileSync(`./salida/tabla-${ base }.txt`, salida);

        if(listar){
            console.log('==================='.yellow)
            console.log(`    Tabla del: ${ base }`.yellow )
            console.log('==================='.yellow)
            console.log(salida.green);
        }

        return `tabla-${ base }.txt`.yellow;
        
    } catch (err) {
        throw err
    }
} 

module.exports = {
    crearArchivo
}