
const fs = require('fs')
const colors = require('colors')

const crearArchivo = async (base = 5, listar = false, hasta = 10) => {
    try {
        let salida = ''
        let consola = ''

        for(let i = 1; i <= hasta; i++) {
            salida += `${ base } x ${ i } = ${ base*i } \n`;
            consola += `${ colors.cyan(base) } x ${ colors.magenta.bold(i) } = ${ colors.brightGreen(base*i) } \n`;
        }

        if(listar) {
            console.log('===================='.green)
            console.log(`  Tabla del: ${ colors.cyan.bold(base) }`.green)
            console.log('===================='.green)
            console.log(consola)
        }

        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida)

        return `tabla-${base}.txt`
    } catch (err) {
        throw err
    }
}

module.exports  = {
    crearArchivo
}