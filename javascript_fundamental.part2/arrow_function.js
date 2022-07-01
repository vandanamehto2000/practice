// function expression
const age = function(birthYear){
    return 2000-birthYear;
}

// arrow function
const calcAge3 = birthYear => 2000-birthYear;
console.log(calcAge3(1997));

const yearUNitRetrirement = (birthYear , firstName)=> {
    const age = 2037-birthYear;
    const retrirement = 65-age;
    // return retrirement;
    return `${firstName} retries in ${retrirement} years`
;}
console.log(yearUNitRetrirement(1991, "vandana"))




// function calling another function

function cutFruitPieces(fruit){
    return fruit * 4;
}


function fruitProcessor(apples, oranges){
    const appplePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);
    const juice = `Juice with ${appplePieces} apples and ${orangePieces} oranges.`;
    return juice;
     
 }
 console.log(fruitProcessor(2,3)) 