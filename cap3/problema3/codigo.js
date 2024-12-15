//Cap3 Cofla problema 3
// Crear un sistema para decidir que 2 de 7 mejores apps descargar.
// Debe contener cantidad de descargas, puntuacion y peso
// Se deben poder abrir, cerrar, instalar e desinstalar
// Crear un menu donde se eliga que apps descargar, como max 2. Si se desinstala alguna, poder instlar otra

class app
{
    constructor(nombre, cantidadDescargas, puntuacion, peso)
    {
        this.nombre = nombre;
        this.cantidadDescargas = cantidadDescargas;
        this.puntuacion = puntuacion;
        this.peso = peso;
        this.instalada = false;
        this.ejecutando = false;
    
    }
    instalar(appsInstaladas)
    {
        if (this.instalada == false)
        {
            this.instalada = true;
            alert("La app ha sido instalada correctamente");
            return appsInstaladas + 1;
        }
        else
        {
            alert("Error: La app ya esta instalada");

            return appsInstaladas;
        }
    }
    desinstalar(appsInstaladas)
    {
        if (this.instalada == true)
        {
            this.instalada = false;
            alert("La app ha sido desintalada correctamente");
            this.ejecutando = false;
            return appsInstaladas - 1;
        }
        else
        {
            alert("Error: La app ya esta desinstalada");

            return appsInstaladas;
        }
    }
    abrir()
    {
        if (this.ejecutando == false)
        {
            this.ejecutando = true;
            alert("Aplicacion ejecutandose");
        }
        else
        {
            alert("Error: La aplicacion ya estaba ejecutandose");
        }
    }
    cerrar()
    {
        if (this.ejecutando == true)
        {
            this.ejecutando = false;
            alert("Aplicacion cerrandose");
        }
        else
        {
            alert("Error: La aplicacion ya estaba cerrada");
        }
    }
}
function accionApp(app, resultado)
{
    accion = prompt(opcionAccion);

    while (accion != "Instalar" && accion != "Desinstalar" && accion != "Abrir" && accion != "Cerrar")
        accion = prompt(`Ha ocurrido un error. Por favor dime ` + opcionAccion);

    if(accion == "Instalar")
    {
        if (resultado["cantidadApps"] < 2) 
        {
            if (resultado["cantidadApps"] == 0)
            {
                resultado["app1"] = app.nombre;
            }
            else
            {
                resultado["app2"] = app.nombre;
            }
            resultado["cantidadApps"] = app.instalar(resultado["cantidadApps"]);
        }
        else
        {
            alert(`Las apps: ${resultado["app1"]} e ${resultado["app2"]} ya estan instaladas. Y solo se permiten 2`);
        }
    }
    else if(accion == "Desinstalar" )
    {
        if (resultado["cantidadApps"] >= 1 && app.instalada == true)
        {
            if (app.nombre == resultado["app1"]) 
                {
                    if (resultado["cantidadApps"] == 1)
                    {
                        resultado["app1"] = "";
                    }
                    else
                    {
                        resultado["app1"] = resultado["app2"];
                    }            
                }
            else
            {
                resultado["app2"] = "";
            }
            resultado["cantidadApps"] = app.desinstalar(resultado["cantidadApps"]);
        }
        else
        {
            alert(`${app.nombre} no esta instalada por lo tanto no se puede desinstalar`);
        }
    }
    else if(accion == "Abrir")
    {
        if (app.instalada == true)
        {
            app.abrir();
        }
        else
        {
            alert("La app esta desinstalada, no se puede abrir")
        }
    }
    else if(accion == "Cerrar")
    {
        if (app.instalada == true)
        {
            app.cerrar();
        }
        else
        {
            alert("La app esta desinstalada, no se puede cerrar")
        }
    }

    return resultado;
}
const clashOfClans = new app("Clash Of Clans", "4k", 3, "3GB");
const clashRoyale = new app("Clash Royale", "4M", 5, "2GB");
const pokemon = new app("Pokemon", "20k", 3, "8GB");
const kenshi = new app("Kenshi", "2k", 5, "5GB");
const persona3 = new app("Persona 3", "1M", 3, "45GB");
const fallout = new app("Fallout", "1k", 1, "6GB");
const totalWar = new app("Total War", "300k", 2.9, "30GB");

menu = `Que app deseas seleccionar?\n 
1: Clash Of Clans - Puntuacion: ${clashOfClans.puntuacion} - Peso: ${clashOfClans.peso} - Descargas: ${clashOfClans.cantidadDescargas}
2: Clash Royale - Puntuacion: ${clashRoyale.puntuacion} - Peso: ${clashRoyale.peso} - Descargas: ${clashRoyale.cantidadDescargas}
3: Pokemon - Puntuacion: ${pokemon.puntuacion} - Peso: ${pokemon.peso} - Descargas: ${pokemon.cantidadDescargas}
4: Kenshi - Puntuacion: ${kenshi.puntuacion} - Peso: ${kenshi.peso} - Descargas: ${kenshi.cantidadDescargas}
5: Persona 3 - Puntuacion: ${persona3.puntuacion} - Peso: ${persona3.peso} - Descargas: ${persona3.cantidadDescargas}
6: Fallout - Puntuacion: ${fallout.puntuacion} - Peso: ${fallout.peso} - Descargas: ${fallout.cantidadDescargas}
7: Total War - Puntuacion: ${totalWar.puntuacion} - Peso: ${totalWar.peso} - Descargas: ${totalWar.cantidadDescargas}`;



menu2 = `Deseas: \n 1: Seleccionar otra app \n 2: Realizar otra accion\n 3: Cerrar programa`;
opcionAccion = `Que accion desea realizar: Instalar-Desinstalar-Abrir-Cerrar`;

opcion = parseInt(prompt(menu));

appsInstaladas = 0;
resultado = {app1: "", app2: "", cantidadApps: appsInstaladas};
corriendo = true;
while (corriendo)
{
    switch(opcion)
    {
        case 1:
            resultado = accionApp(clashOfClans, resultado);
            break;
        case 2:
            resultado = accionApp(clashRoyale, resultado);
            break;
        case 3:
            resultado = accionApp(pokemon, resultado);
            break;
        case 4:
            resultado = accionApp(kenshi, resultado);
            break;
        case 5:
            resultado = accionApp(persona3, resultado);
            break;
        case 6:
            resultado = accionApp(fallout, resultado);
            break;
        case 7:
            resultado = accionApp(totalWar, resultado);
            break;
        default:
            break;
    }
    alert(resultado["cantidadApps"]);

    opcion2 = parseInt(prompt(menu2));

    if (opcion2 == 1)
    {
        if (resultado["cantidadApps"] == 1)
            {
                opcion = parseInt(prompt(`Apps instaladas: ${resultado["cantidadApps"]}.\n${resultado["app1"]} \n`
                    + menu));
            }
        else if (resultado["cantidadApps"] == 2)
            {
                opcion = parseInt(prompt(`Apps instaladas: ${resultado["cantidadApps"]}.\n${resultado["app1"]} e ${resultado["app2"]} \n` 
                    + menu));
            }
        else
        {
            opcion = parseInt(prompt(menu));
        }
            
    }
    else if(opcion2 == 3)
    {
        corriendo = false;
    }
}
