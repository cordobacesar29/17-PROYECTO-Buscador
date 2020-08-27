// variables
const resultado = document.querySelector('#resultado');


//eventos
document.addEventListener('DOMContentLoaded', () => {

    mostrarAutos();//muestra los autos al cargar

    //llenar las opciones de años
    llenarSelect();


})

//funciones
function mostrarAutos() {
    autos.forEach( auto => {
        const {marca, modelo, year, puertas, transmision, precio, color} = auto;
        const autoHTML = document.createElement('p');

        autoHTML.textContent = `
            ${marca} ${modelo} - ${year} - ${puertas} Puertas - Transmisión: ${transmision} - Precio: ${precio} - color: ${color}

        
        `;

        //insertar en el HTML
        resultado.appendChild(autoHTML)

    })
}
