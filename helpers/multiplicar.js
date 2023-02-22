const fs = require('fs');
var colors = require('colors');

const crearArchivo = async(base = 5, listar, hasta) => {

    try {
        
        let salida = '';
        let consola = '';

        for (let i = 1; i <= hasta; i++) {
            let resultado = base * i;
            salida += (`${base} * ${i} = ${resultado}\n`)
            consola += (`${base} ${colors.brightMagenta("*")} ${i} ${colors.brightCyan('=')} ${resultado}\n`)

        }

        if (listar){
            console.log("===================".brightCyan)
            console.log('Tabla del ' +  colors.cyan(base))
            console.log("===================".brightCyan)
            console.log(consola)
        }
        

        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);

       return `${colors.brightGreen(`tabla-${base}.txt creada`)}`

    } catch (err) {
        throw err
    }

}

module.exports = {
    crearArchivo
}
