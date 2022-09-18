console.log('-- Exercise 2: Strings');

//Crear una variable de tipo string con al menos 10 caracteres y convertir todo el texto en mayúscula (utilizar toUpperCase).

console.log('-Exercise 2.a:');
var word = 'RadiumRocket';
console.log(word.toUpperCase());

//Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los primeros 5 caracteres guardando el resultado en una nueva variable (utilizar substring).

console.log('-Exercise 2.b:');
var fiveWord = word.substring(0,5);
console.log("First five words:",fiveWord);

//Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los últimos 3 caracteres guardando el resultado en una nueva variable (utilizar substring).

console.log('-Exercise 2.c:');
var lastThree = word.substring(word.length - 3);
console.log("Last three word:",lastThree);

//Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con la primera letra en mayúscula y las demás en minúscula. Guardar el resultado en una nueva variable (utilizar substring, toUpperCase, toLowerCase y el operador +).

console.log('-Exercise 2.d:');
var capitalLetter = word.substring(-word.length,1).toUpperCase() + word.slice(1,word.length).toLowerCase();
console.log("First capital letter:",capitalLetter);

//Crear una variable de tipo string con al menos 10 caracteres y algún espacio en blanco. Encontrar la posición del primer espacio en blanco y guardarla en una variable (utilizar indexOf).

console.log('-Exercise 2.e:');
var spaceWord = 'Radium Rocket';
var spacePosition= spaceWord.indexOf(" ");
console.log(spaceWord, "Space word position =",spacePosition);

//Utilizar los métodos de los ejercicios anteriores para generar un nuevo string que tenga la primera letra de ambas palabras en mayúscula y las demás letras en minúscula (utilizar indexOf, substring, toUpperCase, toLowerCase y el operador +).

console.log('-Exercise 2.e:');
var newWord = 'Radium Rocket';
var completeWord = newWord.substring(-newWord.length,1).toUpperCase()  + newWord.slice(1,newWord.indexOf(" ")).toLowerCase() +
newWord.substring(newWord.indexOf(" "),newWord.indexOf(" ") + 2).toUpperCase() + newWord.slice(newWord.indexOf(" ") +2 ).toLowerCase();
console.log(completeWord);