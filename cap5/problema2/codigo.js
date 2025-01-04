//CAP 5 problema 2. Cofla debe trbajar 8hs cada dia por 14 dias
// 24hs para estudiar, 24 en hacer tps, 8 en cosas de la casa, 56 en trabajar
//Organizar las actividades diariamente, todo por consola, el tiempo por tarea no puede superar las 4hs

actividades =
{
    "estudiar": 24,
    "tps": 24,
    "cosasCasa": 8,
    "trabajar": 56,
}

for(actividad in actividades)
{
    actividades[actividad] = parseFloat((actividades[actividad] / 14).toFixed(2));
    if(actividades[actividad] > 4)
    {
        console.error(`El tiempo de la tarea: ${actividad} supera las 4hs diarias`);
    }
    console.log(`%cCofla gasta: ${actividades[actividad]}hs en ${actividad} diariamente.`, `color: green`)
}

if(actividades["estudiar"] + actividades["tps"] + actividades["cosasCasa"] + actividades["trabajar"] > 8)
    {
        console.error(`El tiempo de la tareas: supera las 8hs diarias`);
    }