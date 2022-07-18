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

    }
};


const arr = [7, 8, 9];
const badNewAr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewAr);

const newArr = [1, 2, ...arr];
console.log(newArr);


console.log(...newArr);
console.log(1, 2, 7, 8, 9);


const newMenu = [...restaurant.mainMenu, 'gnocci'];
console.log(newMenu);

// copy array
const mainMenuCOpy = [...restaurant.mainMenu];

// joins 2 arrays
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu]
console.log(menu);

// Iterables: arrays, strings, maps, sets. NOT objects
const str = 'Jonas';
const letters = [...str, ' ', 'S.'];
console.log(letters);
console.log(...str);

// real-world example
const ingredients = [
//     prompt('Let\'s make pasta! Ingredients 1?'),
//     prompt('Ingredients 2?'),
//     prompt('Ingredients 3'),
];

console.log(ingredients);

restaurant.orderPasts(ingredients[0], ingredients[1], ingredients[2]);
restaurant.orderPasts(...ingredients);


// objects
const newRestaurant = {founderIN: 1998,...restaurant, founder:"guiseppe"};
console.log(newRestaurant);

const restaurantCopy = {...restaurant};
restaurantCopy.name = "Ristorante Roma";
console.log(restaurantCopy.name);
console.log(restaurant.name);
