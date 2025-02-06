/***

Free Drinks
    - Burger more than 500tk: free Coke
    - Else Coke: 30tk
*/

const burger = 500;
let freeDrink;

// if else condition
/*
if (burger > 500) {
  console.log("free Coke");
} else {
  console.log("Coke: 30tk");
} */

// ternary operator
freeDrink = burger > 500 ? console.log("free Coke") : console.log("Coke: 30tk");
