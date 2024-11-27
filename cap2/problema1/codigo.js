// Cofla cap2 problema 1
invitadosTotales = parseInt(prompt("Cuantos invitados hay?"));


function patovica(invitados)
{
    gratis = true;
    entradas = {};
    for (i = 0; i < invitados; i++)
    {
        hora = parseInt(prompt("Que hora es?"));
        edad = parseInt(prompt("Cuantos tenes?"));
        if (edad >= 18 && hora >= 2 && gratis == true)
        {
            entradas[i] = "Pasa gratis";
            gratis = false
        }
        else if (edad >= 18)
        {
            entradas[i] = "Pasa";
        }
        else
        {
            entradas[i] = "Sos menor, raja de aca";
        }
    }
    return entradas;

}

ingresantes = patovica(invitadosTotales);

for (ingresado in ingresantes)
{
    document.write(`El invitado N${parseInt(ingresado) + 1} ${ingresantes[ingresado]} <br>`);
}
