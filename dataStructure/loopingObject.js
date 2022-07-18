const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun']
const openingHours= {
    [weekdays[3]]: {
        open:12,
        close:22,
    },
    [weekdays[4]]:{
        open: 11,
        close:23,
    },
    [weekdays[5]]:{
        open:0,
        close:24,
    },
};

const restaurant = {
    name: 'classico, italino',
    categories: ['italian', 'pizzeria', 'vegetarian', 'organic'],
    starterMenu: ['focaccia', 'Bruschetta', 'garlic bread', 'CAPRESE salad'],
    mainMenu: ['pizza', 'pasta', 'risotto'],


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


// Property NAMES
const properties = Object.keys(openingHours);
console.log(properties);

// console.log(`we are open on ${properties.length} days`);

// for(const day of Object.keys(openingHours)){
//     console.log(day)
// }

let openStr = `we are on ${properties.length} days:`;
for(const day of properties){
    openStr = openStr + `${day},`;
}
console.log(openStr);


// PROPERTY VALUES
const values = Object.values(openingHours);
console.log(values)

// Entire object
const entries = Object.entries(openingHours);
// console.log(entries);


// for(const x of entries){
    // console.log(x);    
// }

// [key, value]
for(const [key, {open, close}] of entries){
    console.log(`on ${key} we opwn at ${open} and close T ${close}`);

}


