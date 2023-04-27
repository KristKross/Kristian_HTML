var dino = document.getElementById("dino");
var rock = document.getElementById("rock");
var counter = 0;
var highscore = 0;
var previousHighscore = 0;

function jump() {
    dino.classList.add("animate")
    setTimeout(function () {
        dino.classList.remove("animate");
    }, 500);
}

function handleKeyDown(event) {
    if (event.code === 'Space') {
        jump()
    }
}



function start() {
    var menu = document.getElementById("menuScreen")
    menu.style.display = "none"

    var game = document.getElementById("game")
    game.style.display = "block"

    var gameover = document.getElementById("gameoverScreen")
    gameover.style.display = "none"

    check = setInterval(function() {
        let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
        let rockTop = parseInt(window.getComputedStyle(rock).getPropertyValue("left"));

        if (rockTop < 65 && rockTop > -25 && dinoTop >= 180) {
            rock.style.animation = "none";

            highscore = counter;

            if(highscore > previousHighscore) {
                document.getElementById("highscoreSpan").innerHTML = counter;
            }
            else {
                document.getElementById("highscoreSpan").innerHTML = previousHighscore;
            }

            rock.style.animation = "blue 2s infinite linear";

            game.style.display = "none"
            gameover.style.display = "block"

            counter = 0;

            clearInterval(check)
        } 
        
        else {
            counter++;
            document.getElementById("scoreSpan").innerHTML = counter;
            document.getElementById("gamescoreSpan").innerHTML = counter;
        }

    previousHighscore = highscore;

    }, 10);
}

