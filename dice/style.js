var player_1 = Math.floor(Math.random() * 5) + 1;
var player_2 = Math.floor(Math.random() * 5) + 1;
var x = document.getElementsByClassName("img");
x[0].src = "images/" + player_1 + ".png";
x[1].src = "images/" + player_2 + ".png";




function wait(ms){
    var start = new Date().getTime();
    var end = start;
    while(end < start + ms) {
        end = new Date().getTime();
    }
}



wait(2000);

if ( player_1>player_2)
{
   document.getElementById("h1").textContent="player 1 WON ";

}
 else if ( player_1<player_2)
{
    document.getElementById("h1").textContent="player two WON ";
}
else  if  ( player_1===player_2)
{
    document.getElementById("h1").textContent="it's a  DRAW ";

}
