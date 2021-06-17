document.onclick =function  dice  () {


     var player_1 = Math.floor(Math.random() * 5) + 1;
     var player_2 = Math.floor(Math.random() * 5) + 1;
     var x = document.getElementsByClassName("img");
     x[0].src = "images/" + player_1 + ".png";
     x[1].src = "images/" + player_2 + ".png";


     if (player_1 > player_2) {
         document.getElementById("h1").textContent = "player 1 WON ";


     } else if (player_1 < player_2) {
         document.getElementById("h1").textContent = "player 2 WON ";
          window.location.replace("https://www.youtube.com/watch?v=dQw4w9WgXcQ");
     } else if (player_1 === player_2) {
         document.getElementById("h1").textContent = " DRAW ";

     }

 }
