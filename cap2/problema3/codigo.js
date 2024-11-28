// Cofla cap2 problema 3. 
// Crear una calculadora que sea capaz de sumar, restar, dividir, multiplicar

function sumar(num1, num2)
{
    return num1 + num2;
}

function restar(num1, num2)
{
    return num1 - num2;
}

function multiplicar(num1, num2)
{
    return num1 * num2;
}

function dividir(num1, num2)
{
    return num1 / num2;
}


menu = parseInt(prompt(`Que operacion desea realizar?. \n 1: Sumar \n 2: Restar \n 3: divdir \n 4: multiplicar`));
while(menu != 1 && menu != 2 && menu != 3 && menu != 4 )
{
    menu = parseInt(prompt("Reingresa que operacion desea realizar.\n 1: Sumar \n 2: Restar \n 3: divdir \n 4: multiplicar"));
}


num1 = prompt("Ingresa el primer numero ");
num2 = prompt("Ingresa el segundo numero ");

num1 = num1.replace(",", ".");
num2 = num2.replace(",", ".");

num1 = parseFloat(num1);
num2 = parseFloat(num2);

while (Number.isNaN(num1))
{
    num1 = prompt("Por favor, Reingresa el primer numero ");
    num1 = num1.replace(",", ".");
    num1 = parseFloat(num1);

}

while (Number.isNaN(num2))
{
    num2 = prompt("Por favor, Reingresa el segundo numero");
    num2 = num2.replace(",", ".");
    num2 = parseFloat(num2);

}

if (menu == 1)
{
    res = sumar(num1, num2);
}
else if (menu == 2)
{
    res = restar(num1, num2);
}
else if (menu == 3)
{
    res = dividir(num1, num2);
}
else if (menu == 4)
{
    res = multiplicar(num1, num2);
}
else
{
    alert("Algo salio horriblemente maal");
}

document.write(res);