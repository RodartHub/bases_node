const argv = require('yargs').option('b', {
                'alias': 'base',
                'type': 'number',
                'demandOption': true,
                'describe': 'Es la base de la tabla de multiplicar'
            })
            .option('l', {
                alias: 'listar',
                type: 'boolean',
                describe: 'Ver en consola tabla de multiplicar',
                default: false
            })
            .option('h', {
                'alias': 'hasta',
                'type': 'number',
                'describe': 'Establece el numero de veces que se va a multiplicar la base',
                'default': 10
            })
            .check((argv, options) => {
                if ( isNaN(argv.b) ) {
                    throw 'La base tiene que ser un número';
                }
                if ( isNaN(argv.h) ) {
                    throw 'El limite tiene que ser un número';
                }
                return true;
            } )
            .argv;

module.exports = argv;
