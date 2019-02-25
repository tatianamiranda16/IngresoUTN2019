function Mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=1;
	var numero = parseInt(prompt("Ingrese su numero"));
	var seguir = true;
	do {
		numero = parseInt(prompt("ingrese su numero"));
		seguir= confirm ("Quiere continuar");
		positivo = positivo + numero;
		negativo = negativo * numero;
		contador = contador + 1;  
		
	} while (seguir);

document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN