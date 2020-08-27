// variables
const resultado = document.querySelector('#resultado');
const year = document.querySelector('#year');

const max = new Date().getFullYear();
const min = max - 10;

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
//genera los años del select
function llenarSelect(){

    for (let i = max; i >= min; i--) {
        const opcion = document.createElement('option');
        opcion.value = i;
        opcion.textContent = i;
        year.appendChild(opcion);//agrega las opciones del año al select

    } 
    
}