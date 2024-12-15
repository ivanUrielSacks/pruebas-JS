
// Crear un sistema para mostrarle a cofla las particularidades de los 3 celulares.
// Cada celular debe tener color, peso, resolución de pantalla, resolución de camara y memoria ram
// Cada celular debe poder prender, reiniciar, apagar, tomar fotos y grabar 

class Celular
{
    constructor(color, peso, rp, rc, ram)
    {
        this.color = color;
        this.peso = peso;
        this.rp = rp;
        this.rc = rc;
        this.ram = ram;
        this.prendido = false;
        this.apagado = true;
    }
    get infoCelular()
    {
        return (`Color: <b>${this.color}</b>. Peso: <b>${this.peso}kg</b>. Resolucion de pantalla: <b>${this.rp}</b>. 
        <br>Resolucion de camara: <b>${this.rc}</b>. Memoria Ram: <b>${this.ram}</b><br><br>`);
    }
    encender()
    {
        if (this.prendido == false)
        {
            this.prendido = true;
            this.apagado = false;
            alert("Celular encendido");
        }
        else
        {
            alert("Celular ya esta encendido");
        }
    }
    apagar()
    {
        if (this.prendido == true)
            {
                this.prendido = false;
                this.apagado = true;
                alert("Celular apagado");
            }
            else
            {
                alert("Celular ya esta apagado");
            }
    }
    reiniciar()
    {
        if (this.prendido == true)
            {
                alert("Reiniciando");
            }
            else
            {
                alert("Celular esta apagado, no se puede reiniciar");
            }
    }
    tomarFotos()
    {
        if (this.prendido == true)
            {
                alert("Tomando foto");
            }
            else
            {
                alert("Celular esta apagado, no se puede tomar foto");
            } 
    }
    grabar()
    {
        if (this.prendido == true)
            {
                alert("Grabando");
            }
            else
            {
                alert("Celular esta apagado, no se puede grabar");
            } 
    }
}
class Altagama extends Celular
{
    constructor(color, peso, rp, rc, ram, camaras)
    {
        super(color, peso, rp, rc, ram);
        this.camaras = camaras;
    }
    get infoCelular()
    {
        return this.infoCelular + (`Camaras: <b>${this.camaras}</b><br><br>`);
    }
    camaraSuperLenta()
    {
        if (this.prendido == true)
        {
            alert("Camara super lenta activada");
        }
        else
        {
            alert("Celular esta apagado, no se puede activar camara super lenta");
        }
    }
    reconFacial()
    {
        if (this.prendido == true)
        {
            alert("Celular desbloqueado");
        }
        else
        {
            alert("El celular esta apagado, no se puede activar el reconocimiento facial");
        }
    }
}

const samsung = new Celular("Rojo", 7,"HD", "640x480", "2GB");
const motorola = new Celular("Azul", 4,"4K", "4000x300", "3GB");
const huawei = new Celular("Verde", 7,"8K","1600x200", "6GB");

const motorolaPremium = new Altagama("Dorado", 5,"8K", "4000x300", "9GB", 2);
const huaweiPremium = new Altagama("Platino", 6,"8K","4000x300", "7GB", 2);

document.write(samsung.infoCelular);
document.write(motorola.infoCelular);
document.write(huawei.infoCelular);

document.write(motorolaPremium.infoCelular);
document.write(huaweiPremium.infoCelular);

