function Mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var nota;
	nota = Math.floor(Math.random()* 10 + 1);
	if (nota > 8 ) {
		alert("nota " + nota + "Excelente");
	
	}  
	else if (nota >= 4) {
		alert("nota " + nota + "Aprobado");
	} else {
		alert("nota" + nota + "vamos la proxima si se puede");
		}	

}//FIN DE LA FUNCIÓN