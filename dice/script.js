let firstrandomNumber = Math.floor(Math.random() * 6) + 1;

// // 
// images from dice 1-6.png
let firstDiceImage = "assets/dice" + firstrandomNumber + ".png";

document.querySelectorAll("img")[0].setAttribute("src",firstDiceImage);




let secondRandomNumber = Math.floor(Math.random() * 6) + 1;

// provides images from dice 1 -6 also adding the source
let secondDiceImage = "assets/dice" + secondRandomNumber + ".png";

document.querySelectorAll("img")[1].setAttribute("src", secondDiceImage);

// setting the text for h1
if (firstrandomNumber > secondRandomNumber){
    document.querySelector('h1').innerHTML = "Winner Is User 1!"
}else if (secondRandomNumber> firstrandomNumber){
    document.querySelector ("h1") . innerHTML = "Winner Is User 2!"
}else {
    document.querySelector ("h1") . innerHTML = "It's a Draw!(like draw soup)"
};
