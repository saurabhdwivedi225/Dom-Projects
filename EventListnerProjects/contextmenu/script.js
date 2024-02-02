let boxElement = document.querySelector("#box");
// adding a contextmenu(rightclick) event listener to the box element
boxElement.addEventListener("contextmenu",()=>{
    alert("Welcome contextmenu eventlistner is working");
})