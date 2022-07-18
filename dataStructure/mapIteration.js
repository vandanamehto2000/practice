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

const question = new Map([['question', 'What is the best programming language in the world?'],
[1,'C'],
[2,'java'],
[3, 'javascript'],
['correct',3],
[true, 'correct'],
[false, 'try again']
])

console.log(question);


// convert object to map
console.log(Object.entries(openingHours));
const hoursMap = new Map(Object.entries(openingHours))
console.log(hoursMap);


// quiz app
console.log(question.get('question'));
for(const [key, value] of question){
    if(typeof key === 'number') console.log(`Answer ${key}: ${value}`)
}

// const answer = Number(prompt('your answer'));
const answer = 3;
console.log(answer);

console.log(question.get(question.get('correct') === answer));

// convert map to array
console.log([...question]);
// console.log(question.entries());
console.log([...question.keys()]);
console.log([...question.values()]);
