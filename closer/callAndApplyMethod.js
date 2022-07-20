const lufthansa = {
    airline: "lufthansa",
    iatacode: 'LH',
    bookings: [],
    // book: function(){}
    book(flightNum, name){
        console.log(`${name} booked a seat on ${this.airline} flight ${this.iatacode} ${flightNum}`);
        this.bookings.push({flight: `${this.iatacode} ${flightNum}`, name});
    }
}

lufthansa.book(239, 'vandu sharma');
lufthansa.book(900, 'pinky varma sharma');
lufthansa.book(12, 'radha');
console.log(lufthansa);

const eurowings  = {
    airline: "Eurowings",
    iatacode: "EW",
    bookings: []
}

const book = lufthansa.book;

// does not work
// book(23, "sarah williams");
book.call(eurowings, 23, "VANADANA");
console.log(eurowings);

book.call(lufthansa, 239, "mary cooper");
console.log(lufthansa);

const swiss = {
    airline: "swiss air lines",
    iatacode: "LX",
    bookings: []
}

book.call(swiss, 583, "mary cooper");
console.log(swiss)


// apply method
const flightDate = [583, 'George Cooper'];
book.apply(swiss, );
console.log(swiss, flightDate);

book.call(swiss, ...flightDate);



// bind methods
// book.call(eurowings, 23, 'vandu);

const bookEW = book.bind(eurowings);
bookEW(23, 'steven williams');
