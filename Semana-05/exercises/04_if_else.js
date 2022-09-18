console.log('-- Exercise 4: If Else');

//4.a)Crear un número aleatorio entre 0 y 1 utilizando la función Math.random(), si el valor es mayor o igual que 0,5 mostrar una alerta con el mensaje “Greater than 0,5” y sino un alerta con el mensaje “Lower than 0,5”.

console.log('-Exercise 4.a:');
var randomNumber = Math.random(0,1);
if (randomNumber >= 0.5) {
    console.log('Greater than 0,5'); 
}else{
    console.log('Lower than 0,5'); 
}

//4.b)Crear una variable “Age” que contenga un número entero entre 0 y 100 y muestre los siguientes mensajes de alerta:
//i.“Bebe” si la edad es menor a 2 años;
//ii.“Niño” si la edad es entre 2 y 12 años;
//iii.“Adolescente” entre 13 y 19 años;
//iv.“Joven” entre 20 y 30 años;
//v.“Adulto” entre 31 y 60 años;
//vi.“Adulto mayor” entre 61 y 75 años;
//vii.“Anciano” si es mayor a 75 años.*/

console.log('-Exercise 4.b:');
var Age = Math.floor(Math.random() * 100);
console.log(Age);
if(Age < 2){
    console.log('Baby');
}else if (Age >=2 && Age <=12){
    console.log('Children');
}
else if (Age >=13 && Age<=19){
    console.log('Teen');
}
else if (Age >=20 && Age<=30){
    console.log('Young man');
}
else if (Age >=31 && Age<=60){
    console.log('Adult');
}
else if (Age >=61 && Age<=75){
    console.log('Senior adult');
}
else if (Age > 75){
    console.log('Old man');
}
