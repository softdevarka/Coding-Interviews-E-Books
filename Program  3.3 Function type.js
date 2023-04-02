var myFun = new Function('5 + 2');
var func = new Function('msg');
var shape = 'round';
var size = 1;
var foo = ['Apple', 'Mango', 'Orange'];
var today = new Date();
console.log(typeof myFun);       // returns "function"
console.log(typeof func);        // returns "function"
console.log(typeof shape);       // returns "string"
console.log(typeof size);        // returns "number"
console.log(typeof foo);         // returns "object"
console.log(typeof today);       // returns "object"
console.log(typeof Novalue);      // returns "undefined"
console.log(typeof Date);           // returns "function"
console.log(typeof date);           // returns "undefined"