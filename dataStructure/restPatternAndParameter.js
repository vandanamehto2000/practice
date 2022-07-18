const restaurant = {
    name: 'classico, italino',
    categories: ['italian', 'pizzeria', 'vegetarian', 'organic'],
    starterMenu: ['focaccia', 'Bruschetta', 'garlic bread', 'CAPRESE salad'],
    mainMenu: ['pizza', 'pasta', 'risotto'],
    openingHours: {
        thu: {
            open: 12,
            close: 22,
        },
        fri: {
            open: 11,
            close: 23,
        },
        sat: {
            open: 0,
            close: 24
        },
    },

    order: function (starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]]
    },

    orderDelivery: function ({
        starterIndex = 1,
        mainIndex = 0,
        time = '20:00',
        address
    }) {
        console.log(`Order received ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`);
    },

    orderPasts: function (ing1, ing2, ing3) {
        console.log(`Here is your declicious pasta with ${ing1}, ${ing2} and ${ing3}`);

    },

    orderPizza: function(mainIngredient, ...otherIngredients){
        console.log(mainIngredient);
        console.log(otherIngredients);
    }
};


// 1) DEstructuring
// SPREAD, because on RIGHT side of =  
const arr = [1,2,...[3,4]];

// REST, because on LEFT side of = 
const [a,b, ...others] = [1,2,3,4,5]
console.log(a,b, others)

const [pizza, , risotto, ...otherFood] = [...restaurant.mainMenu, ...restaurant.starterMenu]
console.log(pizza, risotto, ...otherFood);


// objects
const {sat, ...weekdays} = restaurant.openingHours;
console.log(weekdays);

// 2) functions
// const add = function(...numbers){
//     console.log(numbers);

const add = function(...numbers){
    // console.log(numbers);
    let sum = 0;
    for(let i = 0; i < numbers.length; i++){
        sum = sum +numbers[i];
        console.log(sum);
    }
}
add(2,3);
add(2,5,4,3);
add(8,2,5,3,2,1,4)

const x = [23,5,7];
add(...x);

restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach')
restaurant.orderPizza('mushrooms');