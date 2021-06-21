var game_over = true;
const __tOut = 500
let pattern = [];
let pattern_pushed = [];
const delayInMilliseconds = 90;
const colors = ["green", "red", "yellow", "blue"];

$(document).on('keypress', function (e) {

    if (e.key === 'Enter') {
        game_over = false;
        start_game();
    }
});


function start_game() {

    pattern.length = 0;
    pattern_pushed.length = 0;
    let level = 1;
    let count = 0;

    let counter = level;

    $("#level-title").text(" level: " + level);

    setTimeout(task, __tOut, counter);


    function task(counter) {


        if (counter === 0) {
            return;
        } else {

            const r = random();
            pattern.push(colors[r]);


            switch (r) {
                case 0 :
                    play_music("sounds/68441-piano-c-wav.mp3");
                    $(".green").fadeOut(delayInMilliseconds).fadeIn(80);
                    break;
                case 1 :
                    play_music("sounds/68442-piano-d-wav.mp3");
                    $(".red").fadeOut(delayInMilliseconds).fadeIn(80);
                    break;
                case 2 :
                    play_music("sounds/68443-piano-e-wav.mp3");
                    $(".yellow").fadeOut(delayInMilliseconds).fadeIn(80);
                    break;
                case 3 :
                    play_music("sounds/68448-piano-g-wav.mp3");
                    $(".blue").fadeOut(delayInMilliseconds).fadeIn(80);
                    break;
            }
        }

        setTimeout(task, __tOut, counter - 1)
    }


    if (game_over === false) {

        $(".btn").click(function () {

            let btn = this;

            pattern_pushed.push(this.id);

            setTimeout(function () {
                $(btn).removeClass("pressed");

            }, 40);

            $(btn).addClass("pressed");


            check();
        });


    }


    function check() {

        if (pattern[count] !== pattern_pushed[count]) {
            play_music("sounds/sound_wrong.mp3");
            $('body').addClass("game-over");
            game_over = true;
            over();

        } else {

            count++;

            pattern.length = level;
            if (pattern_pushed.length === pattern.length) {
                level++;
                count = 0;
                pattern.length = 0;
                pattern_pushed.length = 0;
                setTimeout(task, __tOut, level);


                $("#level-title").text(" level: " + level);

            }
        }
    }


    function random() {
        return (Math.floor(Math.random() * 4));
    }

    function play_music(name) {

        const audio = new Audio(name);

        audio.play();

    }


    function over() {
        game_over = true;

        setTimeout(function () {
            $('body').removeClass("game-over");
        }, 1000);

        $("#level-title").text("press enter   key to try again ");
        location.reload(true);


    }
}



