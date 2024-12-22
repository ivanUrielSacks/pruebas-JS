//CAP 4 problema 3. 12 materias cofla se quire inscribir en alguna materia
//Crear funcion que innscriba a Confla en la materia que quiera
//Si hay 20 alumnos negarle la entrada. Si hay menos, inscribirle

alumnosMatematica = ["Ana", "Luis", "Carlos", "Marta", "Pedro", "Sofia", "Javier", "Paco", "Rolo", "Pablo"];
alumnosIngles = ["Ana", "Luis", "Carlos", "Marta", "Pedro", "Sofia", "Javier", "Lola"];
alumnosHistoria = ["Luis", "Carlos", "Marta", "Pedro", "Sofia", "Javier", "Rodolfo", "Rolo", "Pablo"];
alumnosQuimica = ["Sofia", "Javier", "Ivan", "Rolo", "Pablo","Marta", "Pedro", "Sofia", "Javier", "Ivan", "Rolo", "Pablo", "Marta", "Pedro", "Sofia", "Javier", "Ivan", "Rolo", "Pablo", "Roberto"];
alumnosBiologia = ["Marta", "Pedro", "Sofia", "Javier", "Rubius", "Rolo", "Pablo", "Roberto"];
alumnosGeografia = ["Sofia", "Javier", "Vegeta", "Rolo", "Pablo", "Roberto", "Patricia", "Juan", "Maria"];
alumnosFisica = ["Javier", "Messi", "Rolo", "Pablo", "Roberto", "Patricia", "Juan", "Maria"];
alumnosArte = ["Rolo", "Pablo", "Roberto", "Patricia", "Juan", "Maria"];
alumnosLiteratura = ["Pablo", "Roberto", "Patricia", "Juan", "Maria", "Cecilia", "Ricardo"];
alumnosInformatica = ["Roberto", "Patricia", "Juan", "Maria", "Cecilia", "Ricardo", "Carlos", "Jose", "Elena"];
alumnosMusica = ["Ricardo", "Carlos", "Jose", "Elena", "Esteban", "Alberto", "Menem"];
alumnosRobotica = ["Chaplin","Papi", "Rolo", "Pablo", "Roberto", "Estefania", "Juan", "Laura"];

materias = {"Mates": alumnosMatematica, "Ingles": alumnosIngles, "Historia": alumnosHistoria, 
    "Quimica": alumnosQuimica, "Biologia": alumnosBiologia, "Geografia": alumnosGeografia,
    "Fisica": alumnosFisica, "Arte": alumnosArte, "Literatura": alumnosLiteratura,
    "Informatica": alumnosInformatica, "Musica": alumnosMusica, "Robotia": alumnosRobotica
}

function inscribirCofla(materia, materias)
{
    for (clave in materias)
    {
        if (clave == materia)
        {
            if (materias[clave].length < 20)
            {
                materias[clave].push("Cofla");
            }
            else
            {
                alert(`Se ha alcanzado el numero maximo de alumno para ${clave}`);
            }
        }
    }
}
for (materi in materias)
{
    document.write(`<br><b>Materia: ${materi}</b> <br> Alumnos: ${materias[materi]}`);
}


inscribirCofla("Quimica", materias);

for (materi in materias)
    {
        document.write(`<br><b>Materia: ${materi}</b> <br> Alumnos: ${materias[materi]}`);
    }