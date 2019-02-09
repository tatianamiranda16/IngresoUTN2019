/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
Mostar el resulto por medio de "ALERT"*/
function sumar()
{
var sum1;
var sum2;
var resultado
sum1 = parseInt(document.getElementById("numeroUno").value);
sum2 = parseInt(document.getElementById("numeroDos").value);
resultado = sum1 + sum2;
alert("El resultado de la suma de " + resultado);
}

