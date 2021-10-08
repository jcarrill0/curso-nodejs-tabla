const argv = require('yargs')
                .options({
                    'b': {
                        alias:'base',
                        type: 'number',
                        demandOption: true,
                        default: 5,
                        describe: 'Es la base de la tabla de multiplicar'
                    },
                    'l': {
                        alias: 'listar',
                        type: 'boolean',
                        default: false,
                        describe: 'Muestra la tabla en consola'
                    },
                    'h': {
                        alias: 'hasta',
                        type: 'number',
                        default: 10,
                        describe: 'Es el límite de nuestra tabala de multiplicar'
                    }
                })
                .check((argv, options) => {
                    if(isNaN(argv.b)) { 
                        throw 'La base tiene que ser un número'
                    }
                    if(argv.h < 1) { 
                        throw 'El límite tiene que ser mayor o igual a 1'
                    }
                    return true
                })
                .argv;

module.exports  = argv