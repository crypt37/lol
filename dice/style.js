var player_1 = Math.floor(Math.random() * 5) + 1;
var player_2 = Math.floor(Math.random() * 5) + 1;
var x = document.getElementsByClassName("img");
x[0].src = "images/" + player_1 + ".png";
x[1].src = "images/" + player_2 + ".png";