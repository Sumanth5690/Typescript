
//Type Annotation

let num:number=5;
console.log(num);


//object 

const person:{
    name:string,
    age:number,
    salary:number
}={
    name:"jake",
    age:30,
    salary:5000
};
console.log(person);

//type annotaion with function


const a:number=10;
const b:number=20;
console.log(add(a,b));


function add(a:number,b:number):number{
    return a+b;
}


//with default parameters

function multiply(a:number,b:number=4){
    return a*b;
}
console.log(multiply(5,7));

//union types


let myVar:String | number;

myVar="Hello";
console.log(myVar);

myVar=100;
console.log(myVar);