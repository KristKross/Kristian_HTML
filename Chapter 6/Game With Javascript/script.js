var dino = document.getElementById("dino");
var rock = document.getElementById("rock");
let score = 0;
let highscore = localStorage.getItem('highscore') || 0;
let scoreElem = document.getElementById('score');
let highscoreElem = document.getElementById('highscore');



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

        if (rockTop < 35 && rockTop > -55 && dinoTop >= 180) {

            rock.style.animation = "none";

            scoreElem.textContent = score;
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
        
        else {
            score++;
            document.getElementById("score").innerHTML = score;
            document.getElementById("gamescore").innerHTML = score;
        }
    highscoreElem.textContent = highscore;
    }, 10);
}