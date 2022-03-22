// alert("hello world");
let image = document.querySelector(".image");
console.log(image);
let images = ['image1.jpg', 'image2.jpg', 'image3.jpg', './images/image4.jpg'];
setInterval(function(){
    let random = Math.floor(Math.random() *4);
    image.src = images[random];
}, 800);
console.log(random);
