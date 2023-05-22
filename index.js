let randomNumber1 = Math.floor(Math.random() * 6) + 1; //1-6

let diceImg = "dice" + randomNumber1 + ".png"; //dice1-dice6.png

let randomImgSource = "images/" + diceImg;  //images/dice1.png - images/dice6.png

let image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImgSource);

let randomNumber2 = Math.floor(Math.random() * 6) + 1;

let randomImgSource2 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImgSource2);


// result

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML= " Player 1 Win 🚩 ";
} else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "🚩 player 2 win";
} else {
    document.querySelector("h1").innerHTML = " Draw !";
}

