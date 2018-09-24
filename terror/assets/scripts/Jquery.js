//alert("hola mundo js");
//console.log("hola mundo js en consola");
//DOM (document object model)

//let element = document.queryselector(".fa-star");
//los objetos dentro del DOM se conocen como Nodos

// let elementList = document.querySelectorAll(".fa-star");

// elementList.forEach(function(element){
//     element.addEventListener("click",function(){
//          alert("estrellita clickeada");
//          element.classList.remove("far");
//          element.classList.add("fas");
//     })
 
// });




let closes = document.querySelectorAll(".close");
let content = document.querySelector(".content");

closes.forEach(function(close){
    close.addEventListener('click',function(ev) {
        
   
        ev.preventDefault();
        content.classList.remove("animated");
        content.classList.remove("fadeInRight");
        content.classList.add("animated");
        content.classList.add("fadeOutRight");
        setTimeout(() => {
           location.href="../index.html";
        },500);
    });  
})