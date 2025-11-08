const enote = document.getElementById("enotecheck");
const anote = document.getElementById("anotecheck");
const bnote = document.getElementById("dnotecheck");
const gnote = document.getElementById("gnotecheck");
const dnote = document.getElementById("bnotecheck");
const ehighnote = document.getElementById("ehighnotecheck");

var audio1 = new Audio('notes/e2.mp3');
var audio2 = new Audio('notes/a2.mp3');
var audio3 = new Audio('notes/d3.mp3');
var audio4 = new Audio('notes/g3.mp3');
var audio5 = new Audio('notes/b3.mp3');
var audio6 = new Audio('notes/e4.mp3');

const playsound = document.getElementById("soundtest")

playsound.onclick = function() {

    if(enote.checked)
    {
        audio1.play();
    }
    else if(anote.checked)
    {
        audio2.play();
    }
    else if(dnote.checked)
    {
        audio3.play();
    }
    else if(gnote.checked)
    {
        audio4.play();
    }
    else if(bnote.checked)
    {
        audio5.play();
    }
    else if(ehighnote.checked)
    {
        audio6.play();
    }
    else
    {
        soundresponse.textContent = "No note selected";
    }
}
