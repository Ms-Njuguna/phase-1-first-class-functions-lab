// Code your solution in this file!
//created an object
const drivers = [
    'Antonia', 
    'Nuru', 
    'Amari', 
    'Mo'
]

const returnFirstTwoDrivers = function (drivers) {
    return drivers.slice(0,2);
}

const returnLastTwoDrivers = function (drivers) {
    return drivers.slice(-2);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(multiplier) {
    return function (fare) {
        return fare * multiplier;;
    }
}

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3) ;

// Function that selects different drivers using the passed-in function
function selectDifferentDrivers(arrayOfDrivers, driverFunction) {
    return driverFunction(arrayOfDrivers);
}


// Temporary logs to test functionality
console.log("First two drivers:", returnFirstTwoDrivers(drivers));
console.log("Last two drivers:", returnLastTwoDrivers(drivers));
console.log("Double 10:", fareDoubler(10));
console.log("Triple 10:", fareTripler(10));
console.log("Using selectDifferentDrivers (first):", selectDifferentDrivers(drivers, returnFirstTwoDrivers));
console.log("Using selectDifferentDrivers (last):", selectDifferentDrivers(drivers, returnLastTwoDrivers));

