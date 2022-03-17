
let i = 0;
let images =[];
let time = 3000;
images [0] = "../assests/eat health.webp";
images [1] = "../assests/weightloss.webp";
images [2] = "../assests/brocolli.jpg";
function  changeImg (){
    document.slide.src = images[i]  
    if(i < images.length -1) {
        i++
    }else{
        i = 0;
    }
    setTimeout("changeImg()", time);
}
console.log(changeImg);
    window.onload = changeImg;

    // function printNumbers(){
//     for(let i =1; i<=10; i++){
//         console.log(i);
//     }
// }

// let base = "Anob, Anoi, Angj";
// console.log(base);function myFunction() {
// function myFunction(){
//    let element = document.body;
//    element.classList.toggle("dark-mode");
// }