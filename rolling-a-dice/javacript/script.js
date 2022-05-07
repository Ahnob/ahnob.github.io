// let randomNumber = Math.floor(Math.random() * 6) + 1;
// console.log(randomNumber);
// document.querySelector(".btn").addEventListener("click", GameStart);

function GameStart(){
    const randomDice = GetRandomNumbers()
    let imageTag = document.querySelector(".img1");
    imageTag.src = "assets/dice" + randomDice + ".png";
}

function GetRandomNumbers(){
    return Math.floor(Math.random()*6)+1;
}
    console.log(4);
