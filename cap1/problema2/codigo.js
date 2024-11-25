// Cofla cap1 problema 2
//Si le alcanza uno lo compra
//Si le alcanza dos compra dos
//Si le alcanza tres compra tres y regala el vuelto
//Mostrar cuantos voletos compro y el vuelto
boleto = 0.9;
dinero = 2.7;

function comprarVoleto(plata)
{
    voletos = 0;
    while (plata >= 0.9 && voletos < 3)
    {
        plata -= 0.9;
        voletos++;
    }
    plata = Math.round(plata * 100) / 100; 

    if (voletos == 0)
    {
        alert("No tenes un mango bro");
    }

    return {plata, voletos}
}

var {plata, voletos} = comprarVoleto(0);

document.write(`El vagabundo compro ${voletos} voleto/s<br> Y le sobro: $${plata}`);


