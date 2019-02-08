/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
Mostar el resulto por medio de "ALERT"*/
function sumar()
{ var numerouno; 
 var  numerodos;
 var suma;
 // leo de la caja de texto superior el valor el primer operando
 // covierto el valor leido que estra como string a number
numerouno = parseInt(document.getElementById("numeroUno").value);
numerodos = parseInt( document.getElementById("numeroDos").value);
suma = numerouno + numerodos ;
alert (" El resultado es " + suma);
}

