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

    orderPizza: function (mainIngredient, ...otherIngredients) {
        console.log(mainIngredient);
        console.log(otherIngredients);
    }
};

// console.log(restaurant.openingHours.thu);

if(restaurant.openingHours && restaurant.openingHours.mon) 
console.log(estaurant.openingHours.mon.open);

// console.log(restaurant.openingHours.mon.open);

// // with optional chaining
// console.log(restaurant.openingHours.mon?.open);
// console.log(restaurant.openingHours?.mon?.open);

// example
const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
for(const day of days){
    const open = restaurant.openingHours[day]?.open ?? 'closed';
    console.log(`On ${day}, we open at ${open}`);
}





// if(restaurant.openingHours.fri) console.log
// (restaurant.openingHours.fri.open);


// methods
console.log(restaurant.order?.(0,1)?? 'method does not exist');

// arrays
// const users = [{name: 'Jonas', email: 'hello@jonas.io'}];
const users = []


console.log(users[0]?.name ?? 'user arrya empty'); 

if(users.length > 0) console.log(users[0].name);
else console.log('user array empty');

