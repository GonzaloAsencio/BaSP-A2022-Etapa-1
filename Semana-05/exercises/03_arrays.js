console.log('-- Exercise 3: Arrays');

//3.a)Dado el siguiente array: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"] mostrar por consola los meses 5 y 11 (utilizar console.log).

console.log('-Exercise 3.a:');
var months =  ["January", "February ", "March", "April", "May", "June", "July", "Augus", "September", "Octuber", "November", "December"];
console.log("Month 5 and 11:" , months[4], months[10]);

//3.b) Ordenar el array de meses alfabéticamente y mostrarlo por consola (utilizar sort).*/
console.log('-Exercise 3.b:');
months.sort();
console.log("Order months:",months);

//3.c)Agregar un elemento al principio y al final del array (utilizar unshift y push).
console.log('-Exercise 3.c:');
months.unshift("First");
months.push("Last");
console.log("Added months:", months);

//3.d)Quitar un elemento del principio y del final del array (utilizar shift y pop).
console.log('-Exercise 3.d:');
months.shift("First");
months.pop("Last");
console.log("Removed months:", months);

//3.e)Invertir el orden del array (utilizar reverse).
console.log('-Exercise 3.e:');
months.reverse();
console.log("Reverse months", months);

//3.f)Unir todos los elementos del array en un único string donde cada mes este separado por un guión - (utilizar join).
console.log('-Exercise 3.f:');
console.log("Join months:" , months.join('-'));

//3.g)Crear una copia del array de meses que contenga desde Mayo hasta Noviembre (utilizar slice).
console.log('-Exercise 3.g:');
var slicedMonths = months.slice(4,11);
console.log("Sliced Months", slicedMonths);