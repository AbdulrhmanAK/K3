function print(){

    console.log("SHIT") ; 
    document.getElementById("printshit").innerHTML = document.getElementById("textarea").value
    console.log(document.getElementById("sizefont").value) ; 
    document.getElementById("printshit").style.fontSize =document.getElementById("sizefont").value +"px"
    document.getElementById("printshit").style.color =document.getElementById("stylecolor").value 
    //stylecolor
    boom();
}



function changestyle(){
var color = getnewcolor() ; 
    document.getElementById("printshit").style.color = color
    console.log("color: " +color ) ; 

    amongoos();

}
function button_(){
    const aud = new Audio() ; 
    aud.src = "aud/button.mp3";
    aud.play() ;
}

function amongoos(){
    const aud = new Audio() ; 
    aud.src = "aud/amongoos.mp3";
    aud.play() ;
}

function boom(){
    console.log("SHIT") ; 
    const aud = new Audio() ; 
    aud.src = "aud/boom.mp3";
    aud.play() ;
}

function getnewcolor(){
var symbols,color;
symbols="0123456789ABCDEF" 
color="#"
for(var i=0 ; i<6 ; i++)
 color +=symbols[Math.floor(Math.random()*16)]; 
return color
}


function small(){
    var number=""  ; 
var size=0 ; 
    var computedFontSize = window.getComputedStyle(document.getElementById("printshit")).fontSize  ;
    var i=0 ; 
    while( computedFontSize[i]!='p'){       
        number += computedFontSize[i];
        i++ ; 
     }
  
    
    number= parseInt(number)-5  + "px"  ; 
     console.log(number) ; 
    document.getElementById("printshit").style.fontSize = number   ;   
    button_();
}

function big(){
    var number=""  ; 
    var size=0 ; 
        var computedFontSize = window.getComputedStyle(document.getElementById("printshit")).fontSize  ;
        var i=0 ; 
        while( computedFontSize[i]!='p'){       
            number += computedFontSize[i];
            i++ ; 
         }
      
        
        number= parseInt(number)+5  + "px"  ; 
         console.log(number) ; 
        document.getElementById("printshit").style.fontSize = number   ;  
        button_(); 
}