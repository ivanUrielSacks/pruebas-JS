// Cofla cap2 problema 2. Hay 19 alumnos
// Crear mini-sistema que nos permita registrar los alumnos que estan presentes (P) y ausentes (A). 
// Pasados los 30 días mostrar la situación final de todos los alumnos (Nro total de presentes y ausentes). 
// Se puede tener un maximo de 10% de ausencias por semestre, si se tienen mas aclarar que está reprobado.

alumnosTotales = 19;
diasTotales = 30;
alumnos = {};
aprobados = [];
desaprobados = [];
//Nombre del alumno
for (i = 0; i < alumnosTotales; i++)
{
    nombre = prompt(`Dime el nombre del alumno ${i + 1}`);
    alumnos[nombre] = [0, 0];
}

//Tomar asistencia
for (i = 0; i < diasTotales; i++)
{
    for (alumno in alumnos)
    {
        asistencia = true;
        while(asistencia)
        {
            presente = prompt(`${alumno} esta presente o no?(P/A)`);
            if (presente == "P")
            {
                alumnos[alumno][0]++;
                asistencia = false;
            }
            else if (presente == "A")
            {
                alumnos[alumno][1]++;
                asistencia = false;
            }
            else
            {
                alert("Por favor, marque solamente A(En caso de ausente) o P(En caso de presente)");
            }
        }

    }

}

//Mostrar ausentes o presentes
for (alumno in alumnos)
    {
        document.write(`  ${alumno} - Presntes: ${alumnos[alumno][0]} - Ausentes: ${alumnos[alumno][1]}<br>`);
    }

//Calcular desaprobados o aprobados
let maxAusencias = diasTotales * 0.10
for (alumno in alumnos)
    {
        if (alumnos[alumno][1] > maxAusencias)
        {
            desaprobados.push(alumno);
        } 
        else
        {
            aprobados.push(alumno);
        }
        i++;
    }
//Mostrar aprobados o desaprobados
document.write("<br><br> Desaprobados: ");

for (desaprobado of desaprobados)
{
    document.write(`-${desaprobado}-`);
}
document.write("<br><br> Aprobados: ");

for (aprobado of aprobados)
{
    document.write(`-${aprobado}-`);

}