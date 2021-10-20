let  valorm = 0;
let mon1, mon2;
let conversion = 0;

let conversiones = ['Elige tu moneda', 'Dolar', 'Peso Mexicano', 'Peso Colombiano', 'Euro', 'Libra Escterlina' ]; 
// Quiero hacer el array pero no estoy seguro como insertarlo como 'boton' , la opcion que tenia es muy larga para seleccionar el tipo de moneda

let form = document.querySelector('form');
form.addEventListener('submit', (e) => {
    e.preventDefault();

    valorm = document.getElementById('Cantidad').value;

});