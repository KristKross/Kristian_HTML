// Making variables for the code
var dino = document.getElementById("dino");
var rock = document.getElementById("rock");
let score = 0;
let highscore = localStorage.getItem('highscore') || 0;
let scoreElem = document.getElementById('score');
let highscoreElem = document.getElementById('highscore');


// This is the function that allows the bronto to jump
function jump() {
    dino.classList.add("animate")
    setTimeout(function () {
        dino.classList.remove("animate");
    }, 500);
}


// This is the function to allow space presses to call the jump function
function handleKeyDown(event) {
    if (event.code === 'Space') {
        jump()
    }
}


// This is the function that shows the game screen, gameover screen
function start() {
    var menu = document.getElementById("menuScreen")
    menu.style.display = "none"

    var game = document.getElementById("game")
    game.style.display = "block"

    var gameover = document.getElementById("gameoverScreen")
    gameover.style.display = "none"

    // This is the function to check for collision
    check = setInterval(function() {
        let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
        let rockTop = parseInt(window.getComputedStyle(rock).getPropertyValue("left"));

        // If the bronto hits the rock this chain activates which ends the game
        if (rockTop < 35 && rockTop > -55 && dinoTop >= 180) {

            rock.style.animation = "none";

            scoreElem.textContent = score;

            // The operator that creates the highscore
			if (score > highscore) {
				highscore = score;
				highscoreElem.textContent = highscore;
				localStorage.setItem('highscore', highscore);
            }

            rock.style.animation = "rock 2s infinite linear";

            game.style.display = "none"
            gameover.style.display = "block"

            score = 0;
            clearInterval(check)
        } 
        
        // If the bronto doesn't hit the rock the score goes up by 100 per second.
        else {
            score++;
            document.getElementById("score").innerHTML = score;
            document.getElementById("gamescore").innerHTML = score;
        }
    highscoreElem.textContent = highscore;
    }, 10);
}