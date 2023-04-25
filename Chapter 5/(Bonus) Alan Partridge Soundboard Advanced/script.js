let i = 0;

var page1 = document.getElementById("page1")
var page2 = document.getElementById("page2")
var page3 = document.getElementById("page3")
var page4 = document.getElementById("page4")
var page5 = document.getElementById("page5")
var next = document.getElementById("next")
var last = document.getElementById("last")


function nextPage() {
    if (i == 0) {
        page1.style.display = "none";
        page2.style.display = "block";
        last.style.display = "block"
        i++
    }

    else if (i == 1) {
        page2.style.display = "none";
        page3.style.display = "block";
        i++
    }

    else if (i == 2) {
        page3.style.display = "none";
        page4.style.display = "block";
        i++
    }

    else if (i == 3) {
        page4.style.display = "none";
        page5.style.display = "block";
        next.style.display = "none"
        i++
    }

}

function lastPage() {

    if (i == 1) {
        page1.style.display = "block";
        page2.style.display = "none";
        last.style.display = "none"
        i--
    }

    else if (i == 2) {
        page2.style.display = "block";
        page3.style.display = "none";
        i--
    }

    else if (i == 3) {
        page3.style.display = "block";
        page4.style.display = "none";
        i--
    }

    else if (i == 4) {
        page4.style.display = "block";
        page5.style.display = "none";
        next.style.display = "block"
        i--
    }
}

function textToAudio() {
    let msg = document.getElementById("text-to-speech").value;
    let speech = new SpeechSynthesisUtterance();
    speech.lang = "uk-en";
    speech.text = msg;
    speech.volume = 1;
    speech.rate = 1;
    speech.pitch = 1;
    window.speechSynthesis.speak(speech)
}

function sound1(){
    var snd = new Audio('Ah-Ha.mp3')
    snd.play()
}

function sound2(){
    var snd = new Audio('Dan.mp3')
    snd.play()
}

function sound3(){
    var snd = new Audio('Back Of The Net.mp3')
    snd.play()
}

function sound4(){
    var snd = new Audio('Bang Out Of Order.mp3')
    snd.play()
}

function sound5(){
    var snd = new Audio('Jurassic Park.mp3')
    snd.play()
}

function sound6(){
    var snd = new Audio('Smell My Cheese.mp3')
    snd.play()
}

function sound7(){
    var snd = new Audio('Goal.mp3')
    snd.play()
}

function sound8(){
    var snd = new Audio('Kiss My Face.mp3')
    snd.play()
}

function sound9(){
    var snd = new Audio('Hello Partridge.mp3')
    snd.play()
}