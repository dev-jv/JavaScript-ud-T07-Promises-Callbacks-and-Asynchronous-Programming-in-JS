const paises = [];

const nuevoPais = pais => new Promise(resolve =>{
    setTimeout(() => {
        paises.push(pais);
        resolve('El resultado del Resolve')
    }, 3000);
})

nuevoPais('Alemania')
.then( resultado => { // resultado es un término cualquiera, es indiferente
    console.log(resultado);
    console.log(paises);
    return nuevoPais('Francia')
})
.then( x => {
    console.log(x); // Siendo x..
    console.log(paises);
    return nuevoPais('Inglaterra')
})
.then( resultado => {
    console.log(resultado);
})


/*
// "Utilizas el promise(1) entonces que es lo que sucede(2)...entonces se resuelve(3)... !"


        nuevoPais('Alemania')           (1)

        .then( resultado => ...         (2)

        resolve('El resultado del Resolve')     (3)

*/