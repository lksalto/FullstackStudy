var btns = document.querySelectorAll(".drum");
var sounds = ["crash", "kick-bass", "snare", "tom-1", "tom-2",
 "tom-3", "tom-4"];

var keys = ["w"];

for(let i = 0; i<btns.length; i++)
{
    btns[i].addEventListener("click", function(){
                                                    playSound(i);});
                                                }


function playSound(i)
{
    var audio = new Audio("./sounds/" + sounds[i] + ".mp3");
    audio.play();
}

document.addEventListener("keydown", function(event){
    
    switch(event.key){
        case 'w':
            var audio = new Audio("./sounds/crash.mp3");
            audio.play();
            break;
        case 'a':
            var audio = new Audio("./sounds/kick-bass.mp3");
            audio.play();
            break;
        case 's':
            var audio = new Audio("./sounds/snare.mp3");
            audio.play();
            break;
        case 'd':
            var audio = new Audio("./sounds/tom-1.mp3");
            audio.play();
            break;
            
        case 'j':
            var audio = new Audio("./sounds/tom-2.mp3");
            audio.play();
            break;
        case 'k':
            var audio = new Audio("./sounds/tom-3.mp3");
            audio.play();
            break;
        case 'l':
            var audio = new Audio("./sounds/tom-4.mp3");
            audio.play();
            break;
        default:
            console.log('Not a valid key');
    }
   
});