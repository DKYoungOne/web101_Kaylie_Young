
function playSound() {


var audio = new Audio("nothing.mp3");
    
    audio.play();
    audio.currentTime=0;
    audio.volume=.2;
    
    
}

function nowAWebsite(){
    playSound();
    var x = document.getElementById('secretstash');
    x.style.display = 'block';
}