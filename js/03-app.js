
const aplicarDescuento = new Promise( (resolve, reject) => {
    const descuento = false;

    if(descuento) {
        resolve('Descuento aplicado');
    }else{
        reject('No se pudo aplicar el descuento');
    }
})

// aplicarDescuento.then();

// aplicarDescuento

// console.log(aplicarDescuento)

aplicarDescuento
    .then( resultado => console.log(resultado))
    // .then( resultadoo => descuento(resultadoo))

    .catch(error => console.log(error))

function descuento(mensaje) {
    console.log(mensaje); // Interesting!
}


//------------ <> Hay 3 estados del Promise
/*
    fulfilled : El promise se cumplió

    rejected : El Promise no se cumplió

    pending : No se ha cumplido y tampoco fue rechazado

*/






