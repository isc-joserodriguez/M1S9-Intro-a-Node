const chalk = require('chalk');

const error = chalk.bold.red;
const warning = chalk.keyword('orange');

console.log(error('Error!'));
console.log(warning('Warning!'));


const random = require('randomstring');

console.log(random.generate(3));

const isPrime = require('random-prime');

console.log(isPrime.isPrime(2));