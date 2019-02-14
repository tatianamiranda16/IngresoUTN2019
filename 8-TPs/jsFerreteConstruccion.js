/*2.	Para el departamento de Construcción:
A.	 Mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	Mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{var largodeterreno;
    var anchodelterreno;
    var alambre;
    largodeterreno=document.getElementById("Largo").value;
    largodeterreno=parseFloat(largodeterreno);
anchodelterreno=document.getElementById("Ancho").value;
anchodelterreno=parseFloat(anchodelterreno);
alambre= (anchodelterreno * 2 + largodeterreno * 2) * 3;
alert("el alambre a comprar es " + alambre);


}
function Circulo () 
{var radio;
    var alambre;
    var comprar
    radio=document.getElementById("Radio").value;
	radio=parseFloat(radio)
    radio=radio.toFixed (2);
    alambre=(Math.PI * radio * 2) * 3;
    alert("el alambre a comprar es "+ alambre +"cm");
    
    
}
function Materiales () 
{var cemento;
    var cal;
    var largo;
    var ancho;
    var superficie;
var Materiales
    largo=parseFloat(document.getElementById("Largo").value);
    ancho=parseFloat(document.getElementById("Ancho").value);
    superficie= largo * ancho
    cal=superficie * 3 ; 
    cemento= superficie * 2 
    alert("el m2 es " + superficie + ("necesito ") + cal + ("de cal ") + ("y de cemento" + cemento));

     
	
}