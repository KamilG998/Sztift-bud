const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".nav");


hamburger.addEventListener("click",()=>{
    hamburger.classList.toggle("active");
    nav.classList.toggle("active");
});


let image = document.getElementById("image");
let images=['gallery-header/img1.jpg','gallery-header/img2.jpg','gallery-header/img3.jpg','gallery-header/img4.jpg'];
setInterval(function(){
    let random=Math.floor(Math.random()*4);
    image.src=images[random];
}, 3500)