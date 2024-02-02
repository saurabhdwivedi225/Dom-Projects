let input = document.querySelector("input");
let log = document.querySelector("#paragraph");

// adding a keypress event listener to the inputbox 
    input.addEventListener("keypress",(e)=>{
    log.textContent= "You have pressed:-" + e.key;
    })