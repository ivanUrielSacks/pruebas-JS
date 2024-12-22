//CAP 4 problema 2. 12 materias. Cada materia un profesor. Y todos los alumnos ya inscriptos
//Crear funcion que al pasarle una meteria devuelva el profesor asignado y todos los alumnos
//Crear funcion que diga en cuantas clases esta Cofla
//Crear funcion que nombre las clases en donde esta Cofla y los profes de esas clases

alumnos_matematica = ["Ana", "Luis", "Carlos", "Marta", "Pedro", "Sofia", "Javier", "Paco", "Rolo", "Pablo"];
alumnos_ingles = ["Ana", "Luis", "Carlos", "Marta", "Pedro", "Sofia", "Javier", "Cofla"];
alumnos_historia = ["Luis", "Carlos", "Marta", "Pedro", "Sofia", "Javier", "Cofla", "Rolo", "Pablo"];
alumnos_quimica = ["Carlos", "Marta", "Pedro", "Sofia", "Javier", "Cofla", "Rolo", "Pablo", "Roberto"];
alumnos_biologia = ["Marta", "Pedro", "Sofia", "Javier", "Cofla", "Rolo", "Pablo", "Roberto"];
alumnos_geografia = ["Sofia", "Javier", "Cofla", "Rolo", "Pablo", "Roberto", "Patricia", "Juan", "Maria"];
alumnos_fisica = ["Javier", "Cofla", "Rolo", "Pablo", "Roberto", "Patricia", "Juan", "Maria"];
alumnos_arte = ["Rolo", "Pablo", "Roberto", "Patricia", "Juan", "Maria"];
alumnos_literatura = ["Pablo", "Roberto", "Patricia", "Juan", "Maria", "Cecilia", "Ricardo"];
alumnos_informatica = ["Roberto", "Patricia", "Juan", "Maria", "Cecilia", "Ricardo", "Carlos", "Jose", "Elena"];
alumnos_musica = ["Ricardo", "Carlos", "Jose", "Elena", "Esteban", "Alberto", "Menem"];
alumnos_educacion_fisica = ["Chaplin","Papi", "Rolo", "Pablo", "Roberto", "Estefania", "Juan", "Laura"];



materias = 
{
    "Matematica": ["Profe: Ale", alumnos_matematica],
    "Ingles": ["Profe: Olga", alumnos_ingles],
    "Historia": ["Profe: Pedro", alumnos_historia],
    "Quimica": ["Profe: Raul", alumnos_quimica],
    "Biologia": ["Profe: Maria", alumnos_biologia],
    "Geografia": ["Profe: Marta", alumnos_geografia],
    "Fisica": ["Profe: Luis", alumnos_fisica],
    "Arte": ["Profe: Ana", alumnos_arte],
    "Literatura": ["Profe: Juan", alumnos_literatura],
    "Informatica": ["Profe: Carlos", alumnos_informatica],
    "Musica": ["David", alumnos_musica],
    "Educacion Fisica": ["Profe: Esteban", alumnos_educacion_fisica]
};

function listaMateriasAlumnos(materia, materias)
{
    while(true)
    {
        for(clave in materias)
        {
            if (materia == clave)
            {
                return materias[materia];
            }
        }
        materia = prompt(`Has escrito mal la materia, por favor vuelva a intentar \n Materias: ${materiasTotales}`);

    }


}

function clasesCofla(materias)
{
    coflaProfeClases = {};
    cantidadMateriasCofla = 0;
    for (clave in materias)
    {
        coflaEsta = materias[clave][1].includes("Cofla");
        if (coflaEsta == true)
        {
            cantidadMateriasCofla += 1;
            coflaProfeClases[clave] = materias[clave][0];
        }
    }
    return [cantidadMateriasCofla, coflaProfeClases];
}


[cantidadMateriasCofla, coflaProfeClases] = clasesCofla(materias);
materiasTotales = [];

for (materia in materias)
{
    materiasTotales.push(materia + " ");
}

res = listaMateriasAlumnos(prompt(`Que materia quieres encontrar?\n Materias: ${materiasTotales}`), materias);

document.write(`${res[0]}<br>Alumnos: ${res[1]}<br>`);
document.write(`Cofla esta inscipto en: ${cantidadMateriasCofla} materias <br>`);

for (clave in coflaProfeClases)
{
    document.write(`Cofla esta en ${clave}. Y el profe asignado es: ${coflaProfeClases[clave]} <br>`);
}
