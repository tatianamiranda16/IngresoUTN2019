function Mostrar()
{
//tomo el mes 
var mesDelAño = document.getElementById('mes').value;

//alert (mesDelAño);
	
switch (mesDelAño) {
    case "Febrero":
        alert("Este mes no tiene mas de 29 dias");
        break;
    
    default:
	alert ("ESTE MES ES DE MAS DE 30 DIAS")
}

}//FIN DE LA FUNCIÓN