//CAP 5 problema 1. 6 materias cofla quiere saber que materia aprueba o no
//Contar con min 90% de asistencia. Promedio min de 7. Tps entregados como min 75%. En cada materia hay 4 tps

materias =
{
    "mates":{"asistencia": 90, "promedio": 9, "tps": 4},
    "fisica":{"asistencia": 40, "promedio": 8, "tps": 3},
    "lengua":{"asistencia": 70, "promedio": 9, "tps": 1},
    "programacion":{"asistencia": 50, "promedio": 5, "tps": 4},
    "robotica":{"asistencia": 95, "promedio": 10, "tps": 2},
    "arte":{"asistencia": 20, "promedio": 2, "Tps": 0}
}

aprobadas = 
{
    "mates": "Aprobada",
    "fisica": "Aprobada",
    "lengua": "Aprobada",
    "programacion": "aprobada",
    "robotica": "Aprobada",
    "arte": "Aprobada"
}
for (materia in materias)
{
    if(materias[materia]["asistencia"] < 90)
    {
        aprobadas[materia] = `Desaprobada por inasistencias`;
    }
    else if(materias[materia]["promedio"] < 7)
    {
        aprobadas[materia] = `Desaprobada por promedio`;
    }
    else if(materias[materia]["tps"] < 3)
    {
        aprobadas[materia] = `Desaprobada por falta de tps`;
    }
    
    if(aprobadas[materia] == "Aprobada")
        {
            console.log(`%c${materia} esta: ${aprobadas[materia]}`, `color: green`);
        }
        else
        {
            console.log(`%c${materia} esta: ${aprobadas[materia]}`, `color: red`);
        }
}



