


function change(){

    document.getElementById("cont").style.display="block";

    var color="#";
    var symbols="0123456789abcdf"
    for(var i=0 ; i<6 ; i++){
        color+=symbols[Math.floor(Math.random() * 16)]
    }
    document.getElementById("demo").style.color=color
    document.getElementById("cont").style.background=color;

    button_();
}
function button_(){
    const aud = new Audio() ; 
    aud.src = "aud/button.mp3";
    aud.play() ;
}

window.onload = function() {
    const aud = new Audio() ; 
    aud.src = "aud/amongdead.mp3";
    aud.volume = 0.4; 
    aud.play() ;
}

