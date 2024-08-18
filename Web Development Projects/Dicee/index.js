var randomNumber = Math.floor(Math.random() * 6);
const dices = ["dice1.png","dice2.png","dice3.png","dice4.png","dice5.png","dice6.png"]

var i1 = dices[randomNumber]
randomNumber = Math.floor(Math.random() * 6);
var i2 = dices[randomNumber];

var result = document.querySelector(".result")

document.querySelector(".img1").setAttribute("src", "./images/" + i1);
document.querySelector(".img2").setAttribute("src", "./images/" + i2);

if(i1 > i2)
{
    result.textContent = "😎 Player 1 won!"
}
else if(i1 < i2)
{
    result.textContent = "Player 2 won! 😎"
}
else
{
    result.textContent = "😒 DRAW! 😒"
}