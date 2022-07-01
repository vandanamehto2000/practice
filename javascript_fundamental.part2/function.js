function name(){
    console.log("hello world");
}

name();
name();
name();
name();


function fruitProcessor(apples, oranges){
   console.log(apples, oranges);
   const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
   return juice;
    
}

const appleJuice = fruitProcessor(2,5);
console.log(appleJuice);
console.log(fruitProcessor(2, 5));

const appleOrangeJuice = fruitProcessor(5,8);
console.log(appleOrangeJuice);


// function decaration    (hoisting    let age1 = calcAge1(1991);)
function calcAge1(birthYear){
   return  2037 - birthYear;
   
}
let age1 = calcAge1(1991);
console.log(age1)


// function expression
const calcAge2 = function(birthYear){
    return 2037 - birthYear;
}

const age2 = calcAge2(1991);
console.log(age1, age2) 