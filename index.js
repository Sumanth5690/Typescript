//Type Annotation
var num = 5;
console.log(num);
//object 
var person = {
    name: "jake",
    age: 30,
    salary: 5000
};
console.log(person);
//type annotaion with function
var a = 10;
var b = 20;
console.log(add(a, b));
function add(a, b) {
    return a + b;
}
//with default parameters
function multiply(a, b) {
    if (b === void 0) { b = 4; }
    return a * b;
}
console.log(multiply(5, 7));
//union types
var myVar;
myVar = "Hello";
console.log(myVar);
myVar = 100;
console.log(myVar);
