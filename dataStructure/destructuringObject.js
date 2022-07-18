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

    orderDelivery: function ({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
        console.log(`${starterIndex} ${time} ${address} ${mainIndex}`)
    }
}

restaurant.orderDelivery({
    time: '22:30',
    address: 'inder enclave',
    mainIndex: 2,
    starterIndex: 1,
});

restaurant.orderDelivery({
    address: 'VIa del sole, 21',
    starterIndex: 1
})



// console.log(restaurant.order(1,0))
// console.log(restaurant.openingHours.thu)
const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

const {
    name: restaurantName,
    openingHours: hours,
    categories: tags
} = restaurant;
console.log(restaurantName, hours, tags);


// default values
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

// mutating variables
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };

({ a, b } = obj);
console.log(a, b);


//  nested objects
// const {fri: {open, close}} = openingHours;
// console.log(open, close);

const {
    fri: { open: o, close: c },
} = openingHours;
console.log(o, c);
