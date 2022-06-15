// Llamando axios
const axios = requiere('axios');
const fs = require('fs');

// Condición de los parametros

if (process.argv.length < 6) {
    console.log(`Este programa requiere 6 argumentos para su ejecucion`);
    process.exit(1);
} else {

    // Asignando valor a las variables
    const bluemoney = process.argv[2];
    const extension = process.argv[3];
    const divisa = process.argv[4];
    let pesos = process.argv[5];

    // Llamada de axios
    async function convertidorDivisa() {
        let respuesta = await axios.get('https://mindicador.cl/api');
        const now = new Date();
        // Transformar a numero la cantidad ingresada
        let valorCambio =  (parseInt(pesos)/ parseInt(respuesta.data[divisa].valor)).toFixed(2);
        const mensaje = `A la fecha: ${now}\n Fue realizada cotización con los siguientes datos:\n
        Cantidad de pesos a convertir: ${divisa}' da un total de:\n
        ${valorCambio}`
        console.log(mensaje);


    }

}

convertidorDivisa()