/***
Ticket fare Calculator
    - Children (age < 10): free
    - Students get a 50% discount
    - Senior citizens (age >= 60) gets a 15% Discount
    - Otherwise Regular ticket fare 800 tk
*/
const age = 65;
const isStudent = false;
let ticketPrice = 800;
if (age < 10) {
  ticketPrice = "Free";
} else if (isStudent) {
  ticketPrice = ticketPrice * (50 / 100);
} else if (age >= 60) {
  ticketPrice = ticketPrice * (15 / 100);
} else {
  ticketPrice;
}
console.log(ticketPrice);
