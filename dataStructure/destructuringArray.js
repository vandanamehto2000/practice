const restaurant = {
    name: 'classico, italino',
    categories: ['italian', 'pizzeria', 'vegetarian', 'organic'],
    starterMenu: ['focaccia', 'Bruschetta', 'garlic bread', 'CAPRESE salad'],
    mainMenu: ['pizza', 'pasta', 'risotto'],

    order: function (starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]]
    }
}
const arr = [2, 3, 4]
const a = arr[0]
const b = arr[1]
const c = arr[2]

const [x, y, z] = arr;
console.log(x, y, z)
console.log(arr);

let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

//switching variables
// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);


[main, secondary] = [secondary, main]
console.log(main, secondary);

// console.log(restaurant.order(2,0))

// REceive 2 return values from a function
const [starter, mainCourse] = restaurant.order(2, 0)
console.log(starter, mainCourse);


// nested destructuring
const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;
// console.log(i, j)

const [i, , [j, k]] = nested
console.log(i, j, k);


// default values
const [p = 1, q = 1, r = 1] = [8];
console.log(p, q, r);
