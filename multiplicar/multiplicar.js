const fs = require('fs');
const colors = require('colors');

let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`El valor ${base} no es un numero`);
            return;
        }

        if (!Number(limite)) {
            reject(`El valor ${limite} no es un numero`);
            return;
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${ base * i }\n`;
        }

        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err)
                reject(err);
            else
                resolve(`tabla-${base}.txt`.green);
        });
    })
}

let listarTabla = (base, limite = 10) => {
    console.log('======================='.green);
    console.log(`     Tabla de ${base}  `.green);
    console.log('======================='.green);

    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`El valor ${base} no es un numero`);
            return;
        }

        if (!Number(limite)) {
            reject(`El valor ${limite} no es un numero`);
            return;
        }

        for (let i = 1; i <= limite; i++) {
            console.log(`${base} * ${i} = ${ base * i }`);
        }

        resolve(`Listada Tabla del ${base}`);
    })
}

module.exports = {
    crearArchivo,
    listarTabla
}