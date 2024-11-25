export function comprarHelado(plata, nombre)
{
    if (plata >= 2.9)
        {
            alert(`${nombre} compro helado con confites o 1/4`);
            plata -= 2.9;
        }
    else if (plata >= 1.8)
        {
            alert(`${nombre} compro helado marca helardo`);
            plata -= 1.8;
        }
    else if (plata >= 1.7)
        {
            alert(`${nombre} compro helado marca heladovich`);
            plata -= 1.7;
        }
    else if (plata >= 1.6)
        {
            alert(`${nombre} compro helado marca heladix`);
            plata -= 1.6;
        }
    else if (plata >= 1)
        {
            alert(`${nombre} compro helado de crema`);
            plata -= 1;
        }
    else if (plata >= 0.6)
        {
            alert(`${nombre} compro helado de crema`);
            plata -= 0.6;
        }
    return plata;
}
