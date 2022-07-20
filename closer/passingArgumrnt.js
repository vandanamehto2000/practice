const flight = 'LH234';
const jonas = {
    name: 'Jonas Schmedtmann',
    passport: 24739479284
}

const checkIn = function (flightNum, passenger) {
    flightNum = 'LH999';
    passenger.name = 'Mr. ' + passenger.name;

    if (passenger.passport === 24739479284) {
        console.log('Check in')

    } else {
        console.log('wrong passport!')
    }
}
// checkIn(flight, jonas);
// console.log(jonas);
// console.log(flight);

// // Is the same as doing.....
// const flightNum = flight;
// const passenger = jonas;

const newPassport = function(person){
    person.passport = Math.trunc(Math.random() * 1000000000000);
}

newPassport(jonas);
checkIn(flight, jonas);