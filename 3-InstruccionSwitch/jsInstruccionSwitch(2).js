function Mostrar()
{
//tomo el mes 
var mesDelAño = document.getElementById('mes').value;

switch (mesDelAño) {
    case "Enero":
    case "Febrero":
    case "Marzo":
    case "Abril":
    case "Mayo":
    case "Junio":

    alert("Falta para el invierno");

        
        break;
   
   case "Julio":
   case "Agosto":
   
   alert("Es invierno");
      
      break; 

   case "Septiembre":
   case "Octubre":
   case "Noviembre":
   case "Diciembre":
   
   alert(" Ya paso el invierno");
   
     break;
}




}//FIN DE LA FUNCIÓN