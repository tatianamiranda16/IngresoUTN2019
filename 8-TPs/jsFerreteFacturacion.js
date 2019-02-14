/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{var productos
    var productodos
    var productotres
    var PrecioFinal
    productos=document.getElementById("PrecioUno").value;
productos=parseFloat(productos);
productodos=document.getElementById("PrecioDos").value;
productodos=parseFloat(productodos);
productotres=document.getElementById("PrecioTres").value;
productotres=parseFloat(productotres);
PrecioFinal=productos + productodos + productotres;
alert("el precio final es " + PrecioFinal);

	
}
function Promedio () 
{var productos
    var productodos;
    var productotres;
    var PrecioFinal;
    productos=document.getElementById("PrecioUno").value;
    productos=parseFloat(productos);
    productodos=document.getElementById("PrecioDos").value;
    productodos=parseFloat(productodos);
    productotres=document.getElementById("PrecioTres").value;
    productotres=parseFloat(productotres);
    PrecioFinal= (productos + productodos + productotres) / 3;
	alert("el precio final es " + PrecioFinal);
}
function PrecioFinal () 
{var productos
    var productodos
    var productotres
    var PrecioFinal
    var precioconiva
    productos=document.getElementById("PrecioUno").value;
    productos=parseFloat(productos);
    productodos=document.getElementById("PrecioDos").value;
    productodos=parseFloat(productodos);
    productotres=document.getElementById("PrecioTres").value;
    productotres=parseFloat(productotres);
    PrecioFinal= (productos + productodos + productotres) * 21 / 100;
    precioconiva=productos + productodos + productotres - PrecioFinal;
    alert("el precio final es " + precioconiva);
	
}