//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar() {
	 
     var notas;
     var sexo ;
     var notabaja;
     var contadorvarones = 0;
     var acumulador = 0 ;
     var flag;
     var promedio;
     var sexobajo;
     

     
    for(var i = 0 ; i <= 6  ; i++ ){
         
         notas = parseInt(prompt("NOTAS "));
         
         while( i < 0 || nota > 10 || isNan(notas) )
                  notas = parseInt(prompt(" error NOTAS "));

        sexo = prompt("ingrese sexo");
        while (sexo != "f" && sexo != "m")
        
 sexo = prompt(" error ingrese sexo");

 acumulador = acumulador + nota;
 if (nota < notabaja ||flag == 0)

{   sexobajo = sexo
    notabaja = nota
    flag = 1

}
if ( sexo == "m" && nota >= 6){
    contadorvarones++;
}




}



