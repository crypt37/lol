document.addEventListener('keyup', (event) => {
    button_pressed(event.key);

});


const lols = document.querySelectorAll(".drum")

for (var i = 0; i <= lols.length; i++) {


    lols[i].addEventListener("click", kek);

}


function kek() {

    var button = this.innerHTML;
    button_pressed(button);
}

function button_pressed(button) {

    switch (button) {
        case "w":

            var lol = "sounds/crash.mp3";
            play_music(lol);
            break;
        case "a":

            play_music("sounds/kick-bass.mp3");
            break;
        case "s":

            play_music("sounds/snare.mp3");
            break;
        case "d":
            play_music("sounds/tom-1.mp3");
            break;
        case "j":
            play_music("sounds/tom-2.mp3");
            break;
        case "k":
            play_music("sounds/tom-3.mp3");
            break;
        case "l":
            play_music("sounds/tom-4.mp3");
            break;
    }
}


function play_music(name) {

    var audio = new Audio(name);

    return audio.play();

}
