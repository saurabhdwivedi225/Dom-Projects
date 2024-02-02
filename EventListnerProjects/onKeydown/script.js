const input = document.querySelector("input");
   const paragraph = document.querySelector("#log");
    // Adding a keydown event listener to the inputbox
  input.addEventListener("keydown",logKey);
  function logKey(e){
    // paragraph.textContent += `${e.code}`;
    paragraph.textContent = " Key down is :- " +  e.key ;
  }