const jonas = [
    'Jonas',
    'Schmedtmann',
    2037-1991,
    'teacher',
    ['Michael', 'Peter', 'Steven'],
    true
]
const types = [];

console.log(jonas[0])
console.log(jonas[1])
console.log(jonas[4])

for(let i = 0; i < jonas.length; i++){
    console.log(jonas[i], typeof jonas[i]);

    // filling types array
    // types[i] = typeOf jones[i];

    types.push(typeof jonas[i]);

}

console.log(types);




const years = [191, 2007, 1969, 2020];
const ages = [];
for(let i = 0; i < years.lengthl; i++){
    ages.push(2037 - years[i]);
}
console.log(ages);

// continue and break
// only string
for(let i = 0; i < jonas.length; i++){
    if(typeof jonas[i] !== 'string') continue;
    console.log(jonas[i], typeof jonas[i]);
}

// break with number
for(let i = 0; i < jonas.length; i++){
    if(typeof jonas[i] === 'number') break;
    console.log(jonas[i], typeof jonas[i]);
}

