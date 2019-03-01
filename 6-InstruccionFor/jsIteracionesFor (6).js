function Mostrar()
{
var numero;
var acumulador = 0;
numero = (parseInt(prompt("Ingrese un numero")));

while( numero <= 0 || isNaN(numero))
numero = (parseInt(prompt("error Ingrese un numero")));
    for(var i = 1 ; i <= numero ; i++  ){
  
    if( i % 2 == 0 )
    {
        console.log(i)
        acumulador++;

    }
}
console.log ( "contador de pares" + acumulador);


}//FIN DE LA FUNCIÓN