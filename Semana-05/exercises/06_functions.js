console.log('-- Exercise 6: Functions');

//6.a)Crear una función suma que reciba dos valores numéricos y retorne el resultado. Ejecutar la función y guardar el resultado en una variable, mostrando el valor de dicha variable en la consola del navegador.*/

console.log('-Exercise 6.a:');
function Suma(firstNumber, secondNumber){
    var sum = firstNumber + secondNumber;
    return sum;
}
console.log('1+1', Suma(1, 1))

//6.b)A la función suma anterior, agregarle una validación para controlar si alguno de los parámetros no es un número; de no ser un número, mostrar una alerta aclarando que uno de los parámetros tiene error y retornar el valor NaN como resultado.

console.log('-Exercise 6.b:');
function Suma(firstNumber, secondNumber){
    if (typeof firstNumber !== 'number'||typeof secondNumber !== 'number') {
        alert('One of the values is not a number');
        return NaN;
      }
    var sum = firstNumber +secondNumber;
    return sum;
}
console.log('a + 1', Suma('a', 1))
console.log('1 + b', Suma(1, 'b'))
console.log('a + b', Suma('a', 'b'))

//6.c)Aparte, crear una función validate Integer que reciba un número como parámetro y devuelva verdadero si es un número entero.*/

console.log('-Exercise 6.c:');
function ValidateInteger(number){
    return Number.isInteger(number);
}
console.log('5.5', ValidateInteger(5.5));
console.log('5', ValidateInteger(5));

//6.d)A la función suma del ejercicio 6b) agregarle una llamada a la función del ejercicio 6c. y que valide que los números sean enteros. En caso que haya decimales mostrar un alerta con el error y retornar el número convertido a entero (redondeado).*/

console.log('-Exercise 6.d:');
function Suma(firstNumber, secondNumber){
    if (typeof firstNumber !== 'number'||typeof secondNumber !== 'number') {
        alert('One of the values is not a number');
        return NaN;
    }else if(ValidateInteger(firstNumber) == false ){
        alert(firstNumber + ' is not integer');
        firstNumber = Math.round(firstNumber);
        return firstNumber;
    }else if (ValidateInteger(secondNumber) == false){
        alert(secondNumber + ' is not integer');
        secondNumber = Math.round(secondNumber);
        return secondNumber;
    }
    var suma = firstNumber + secondNumber;
    
    return suma;
}
console.log('1.2 + 5 ', Suma(1.2,5));
console.log('1.2 + a ', Suma(1.2,'a'));
//6.e)Convertir la validación del ejercicio 6d) en una función separada y llamarla dentro de la función suma probando que todo siga funcionando igual.

console.log('-Exercise 6.e:');
function Suma(firstNumber, secondNumber){
    if (typeof firstNumber !== 'number'||typeof secondNumber !== 'number') {
        alert('One of the values ​​is not a number');
        return NaN;
    }
    var sum = ValidarSuma(firstNumber) +ValidarSuma(secondNumber);;
    return sum;
}

function ValidarSuma(number){
    if(ValidateInteger(number) === false ){
        alert( number + ' is not integer');
        return Math.round(number);
    }else{
        return number;
    }
}
console.log('1.2 + 5', Suma(1.2,5.5));
console.log('1.2 + a', Suma(1.2,'a'));
console.log('hola + mundo', Suma('hola','mundo'));
console.log('"5 + 6"', Suma('5','6'));

