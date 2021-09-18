const suma = (num1 = 10, num2 = 5) => {
    return num1 + num2
};

let suma4_7 = suma(4, 7);
let suma3_9 = suma(3, 9);

let sumaX = suma(12);
let sumaY = suma(undefined, 10);

console.log(suma4_7, suma3_9);

console.log(sumaX, sumaY);

let parametro = 'Rosy';
console.log('Hola ' + parametro + ' desde Node.JS ')
console.log(`Hola ${parametro} desde Node.JS Tu suma es: ${suma(3, 6)}`)
//Backtick

console.log('Hola, amigo');