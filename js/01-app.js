
const paises = ['Francia', 'España', 'Portugal', 'Australia', 'Inglaterra'];

function nuevoPais(pais, callback) {
    setTimeout(() => {
        paises.push(pais); //Agrega después de 2 seg...
        callback(); // Vuelve a llamar...
    }, 2000)
}

function mostrarPaises() {
    setTimeout(() => {
        paises.forEach(pais => {
            console.log(pais);
        });
    }, 1000);
}
  
mostrarPaises();

nuevoPais('Alemania', mostrarPaises);




