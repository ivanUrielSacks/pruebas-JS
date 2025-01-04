//CAP 6 problema 1. Cofla perdio su llave y necesita encontrarla en una pagina web para mandarsela a a su cerrajero
// 20 Llaves con 4 imagenes cada una. Una vez seleccionada la llave, enviar los datos al servidor


for(x = 1; x < 21; x++)
{
    formularios = document.querySelector(".Formularios");
    form = document.createElement("form");
    label = document.createElement("label");
    boton = document.createElement("button");
    
    boton.setAttribute("type","submit");
    boton.setAttribute("class","botones");
    boton.innerHTML = "Enviar";
    label.setAttribute("class","labels");
    label.innerHTML = "Esta es la llave?";
    fragmento = document.createDocumentFragment();
    
    for(i = 0; i < 4; i++)
    {
        imagen = document.createElement("img");
        imagen.src = (`imagenesLlaves/Llave${x}-${i}.jpg`);
        imagen.setAttribute("class", "logo");
    
        fragmento.appendChild(imagen);
    }
    
    form.appendChild(fragmento);
    form.appendChild(label);
    form.appendChild(boton);
    
    formularios.appendChild(form);
}

