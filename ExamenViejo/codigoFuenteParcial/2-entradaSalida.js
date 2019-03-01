//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
var importe;
var descuento;
var importefinal;	
importe = parseInt(prompt("ingrese un importe"));
descuento = importe * 21 /100;
importefinal = importe + descuento;
document.getElementById("importe" ).value = importefinal;

}

