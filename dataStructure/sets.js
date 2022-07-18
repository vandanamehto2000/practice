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

const ordersSet = new Set(['pasta', 'pizza', 'pizza', 'risotto', 'pasta', 'pizza'])
console.log(ordersSet);

console.log(new Set('jonas'))

console.log(ordersSet.size);
console.log(ordersSet.has('pizza'));
console.log(ordersSet.has('bread'));
ordersSet.add("garlic bread");
ordersSet.delete("risotto");
// not much important
// ordersSet.clear();
console.log(ordersSet);

// for(const order of ordersSet){
//     console.log(order);
// }

// example
// const staff = ['waiter', 'chef', 'waiter', 'manager', 'chef', 'waiter']
// const staffUnique = new Set(staff);
// console.log(staffUnique)


const staff = ['waiter', 'chef', 'waiter', 'manager', 'chef', 'waiter'];
const staffUnique = [...new Set(staff)];
console.log(staffUnique);
console.log(new Set(['waiter', 'chef', 'waiter', 'manager', 'chef', 'waiter']).size);

console.log(new Set('jonasschmedtmann').size);


