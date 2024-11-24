// Cofla 1

import * as funciones from './funciones.js';

var plataRoberto = parseFloat(prompt("Cuanta plata tiene Roberto?"));
var plataCofla =  parseFloat(prompt("Cuanta plata tiene Cofla?"));
var plataPedro =  parseFloat(prompt("Cuanta plata tiene Pedro?"));


while (plataRoberto >= 0.6)
    {
        plataRoberto = funciones.comprarHelado(plataRoberto, "Roberto");
        document.getElementById('resultado1').innerText = `El vuelto de Roberto es de: ${plataRoberto}`
    }

while (plataCofla >= 0.6)
    {
        plataCofla = funciones.comprarHelado(plataCofla, "Cofla");
        document.getElementById('resultado2').innerText = `El vuelto de Cofla es de: ${plataCofla}`
    }


while (plataPedro >= 0.6)
    {
        plataPedro = funciones.comprarHelado(plataPedro ,"Pedro");
        document.getElementById('resultado3').innerText = `El vuelto de Pedro es de: ${plataPedro}`
    }