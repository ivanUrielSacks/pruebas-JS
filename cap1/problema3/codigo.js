// Cofla cap1 problema 3
//Si miente dar descarga
//Si no miento no hacer nada
//Si el aparato no se decide, volverle a preguntar
//1 verdad; 2 mentira; 3 no se sabe. 3 testigos

declaracion = 2;

function detectorMentiras(declaracion, testigo)
{
    document.write(`*Entra ${testigo} y se sienta* <br>`);
    resultado = Math.round((Math.random() * declaracion) + 1);
    inseguridad = true;

    while (inseguridad == true)
    {
        if (resultado == 1)
            {
                document.write(`Se le dio descarga a ${testigo} <br>`);
                inseguridad = false;
            }
            else if (resultado == 2)
            {
                document.write(`No paso nada` + "<br>");
                inseguridad = false;
            }
            else
            {
                document.write(`${testigo}, aclara la respuesta` + "<br>");
                resultado = Math.round((Math.random() * declaracion) + 1);
            }
    }

}

detectorMentiras(declaracion, "Juan");
detectorMentiras(declaracion, "Pedro");
detectorMentiras(declaracion, "Cofla");


