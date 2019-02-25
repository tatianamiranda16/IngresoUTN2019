function Mostrar()
{

	var contador=0;
	var acumulador=0;
	var numero = parseInt(prompt("ingrese su numero")) ;
	var seguir = confirm("Quiere continuar?");
	var promedio;
do {
	numero = parseInt(prompt("ingrese su numero")) ;
    seguir = confirm ("Quiere continuar");
    acumulador = acumulador + numero;
	contador = contador + 1; 
} while (seguir == true );




document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN