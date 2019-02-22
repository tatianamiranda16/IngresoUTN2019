function Mostrar()
{

var numero = parseInt(prompt("ingrese un número entre 0 y 10."));
while (numero  < 0 || numero > 10 || isNaN(numero)  )
 {
	numero =parseInt( prompt("No es un numero entre 0 y 9"));
}

document.getElementById("Numero").value = numero;
}//FIN DE LA FUNCIÓN