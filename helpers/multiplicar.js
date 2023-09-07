const fs = require('fs');
const colors = require('colors');

const crearArchivo = async( base = 5, listar = false, hasta=10 ) => {

    try{

        let salida = '';

        for (let i = 1; i <= hasta; i++) {
            salida += `${base} * ${i} = ${base * i}\n`;
        }

        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);

        if (listar) {
            header = '====================\n';
            header += `   Tabla del: ${base}\n`;
            header += '====================\n';
            console.log(colors.red(header));
            console.log(colors.blue(salida));
        }

        return `tabla-${base}.txt`;

    }catch(err){
        throw err;
    }
    
};


module.exports = {
    crearArchivo
}