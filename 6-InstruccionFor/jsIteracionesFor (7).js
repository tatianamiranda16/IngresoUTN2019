function Mostrar()
{
var numero;
var acumulador = 0;

numero = parseInt(prompt("Ingrese un numero"));
while (numero < 0 || isNan(numero) )
numero = parseInt(prompt("Error al ingresar numero"));
for( var i = 1; i <=numero ; i++)
{
 if(numero % i== 0  )   {
     console.log(i)
        acumulador++;
 }
}
console.log ( "contador de pares" + acumulador);


}//FIN DE LA FUNCIÓN