//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
 var ventas;
 var diamax;
 var diaminino;
 var mayor;
 var menor;
  ventas = (parseInt(prompt("El importe de ventas")));

 for(var i = 1 ; i <=7 ; i++ ){
   while (importe <=0 || isNan(importe)) {
       importe = parseInt((prompt("error, nuemero equivocado")));
       if (importe > diamax || flag == 0)
       mayor = importe;
       diamax = i;
       if( importe < menor || flag == 0){
           menor = importe;
           diaminimo = i;
           flag = 1;
       }
   }  
 }
 

 ventas = (parseInt(prompt("El importe de ventas")));
 
	

	
}

