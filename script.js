/////////////////////////////////////////////////////
// Fat Arrows
// TODO: Re-create the following function using the ES6 fat arrow syntax.
/*
function powered2() {
    let values = []
    for (let i = 0; i < 100; i++) {
        let x = Math.pow(i, 2)
        values.push(x);
    }
    return values;
}
*/

let powered2 = () => {
    let values = []
    for (let i = 0; i < 100; i++) {
        let x = Math.pow(i, 2);
        values.push(x);
    }
    return values;
}
console.log(powered2());

/////////////////////////////////////////////////////
// Anonymous Functions
// TODO: Create an anonymous function that prints the square root of a number.
// Hint: Use the built-in JavaScript Math function, sqrt().

(function (num) {
    console.log("The square root of " + num + " is " + Math.sqrt(num));
}) (4);


/////////////////////////////////////////////////////
// Default Parameters
// TODO: Create a function called player() and set up default parameters for the name, health, strength, and defense stats
// Hint: In the function, print out the player's name and stats.

function player(name = "Bob", health = 100, strength = 10, defense = 10) {
    console.log(name);
    console.log(health);
    console.log(strength);
    console.log(defense);
}
player("Michael");


/////////////////////////////////////////////////////
// Destructuring Assignment
// TODO: Store the first 5 array values in separate variables and the remaining values in the "rest" variable.
function getCosine() {
    let values = []
    for (let i = 0; i < 10; i++) {
        let x = Math.cos(10);
        values.push(x);
    }

    // Add your code here
    let val1, val2, val3, val4, val5, rest;
    [val1, val2, val3, val4, val5, ...rest] = values;
    console.log(val1);
    console.log(val2);
    console.log(val3);
    console.log(val4);
    console.log(val5);

    console.log(rest);
}
getCosine();