function Mostrar()
{
//tomo la hora
var laHora = document.getElementById('hora').value;

switch (laHora) {
    case "7":
    case "10":
    case"11":
    alert("ES DE MAÑANA");
        
        break;
    case "12":
    case "13":
    case "14":
    case "15":
    case "17":
    case "18":
    case "19":
    alert("es de tarde");
    
    default:
        break;
}

}//FIN DE LA FUNCIÓN