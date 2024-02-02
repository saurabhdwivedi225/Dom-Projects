// Selecting with css selector for targeting html elements:-
const outputArea = document.querySelector("#show-output");
const decrementBtn = document.querySelector("#decrement-btn");
const incrementBtn = document.querySelector("#increment-btn");
const  resetBtn = document.querySelector("#reset-btn");
let currVal = 0;
// Adding EventListeners 
incrementBtn.addEventListener("click",() => {
 currVal++;
 outputArea .textContent = currVal;
});
decrementBtn.addEventListener("click", () => {
  if (currVal > 0) { // Prevent negative values
    currVal--; // Decrement the value
    outputArea.textContent = currVal; // Update the output
  }
});
resetBtn.addEventListener("click",() =>{
  currVal = 0;
  outputArea .textContent = currVal;
});