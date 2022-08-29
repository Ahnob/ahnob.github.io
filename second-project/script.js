let hamburger=document.querySelector(".hamburger");
let secondContainer=document.querySelector(".second-container");
hamburger.addEventListener("click", () =>{
    hamburger.classList.toggle("active")
    secondContainer.classList.toggle("active")
})

document.querySelectorAll(".list").forEach(n=> n.addEventListener("click", ()=>{
     hamburger.classList.remove("active")
})); 

document.querySelectorAll(".list").forEach(n=> n.addEventListener("click", ()=>{
    hamburger.classList.remove("active")
})); 


