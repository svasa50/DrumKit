var switchCase="";
var nOfDrums=document.querySelectorAll(".drum").length;
//assigning drum inner HTML to call play drums function
for(var i=0; i<nOfDrums; i++)
{document.querySelectorAll(".drum")[i].addEventListener("click", function(){
    playDrums(this.innerHTML);
    addAnimation(this.innerHTML);
    })};

//Assigning key press to call playdrums function

document.addEventListener("keypress", function(event){
    playDrums(event.key);
    addAnimation(event.key);
    });
// function to be called to play sounds

function playDrums(switchCase){
    switch(switchCase){
        case"w":(new Audio("./sounds/tom-1.mp3")).play();
        break;
        case"a":(new Audio("./sounds/tom-2.mp3")).play();
        break;
        case"s":(new Audio("./sounds/tom-3.mp3")).play();
        break;
        case"d":(new Audio("./sounds/tom-4.mp3")).play();
        break;
        case"j":(new Audio("./sounds/snare.mp3")).play();
        break;
        case"k":(new Audio("./sounds/crash.mp3")).play();
        break;
        case"l":(new Audio("./sounds/kick-bass.mp3")).play();
        break;
        default: alert("Press only  w a s d j k l  ");
        };
    };
// to create a function to add animation effect
function addAnimation(currentKey){
    var activeDrum = document.querySelector("." + currentKey);
    activeDrum.classList.add('pulse');
    setTimeout(function(){
        activeDrum.classList.remove('pulse');
    },100);
}





