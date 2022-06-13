 window.onload = async function() {
    const aud = new Audio() ; 
    aud.src = "aud/amongimpo.mp3";
    aud.volume = 0.05; 
    aud.play() ;
    await sleep(5000) ;
   //background(0,1);

}
 const aud = new Audio() ; 
const aud1 = new Audio() ; 
const aud2 = new Audio() ; 
async function background(s,t){
    
     switch (s){
    case 0 :  
    if(t==0){
        aud.pause() ; 
    }else{
    console.log("hamood99") ; 
   
    aud.src = "aud/hamood.mp3";
    aud.volume = 0.005; 
    aud.play() ;}

     break ; 
    case 1 :
        if(t==0){
            aud1.pause() ; 
        }else{
     
    console.log("jojo") ; 
    aud1.src = "aud/jojo.mp3";
    aud1.volume = 0.005; 
    aud1.play() ;
    
        }
      break ; 
      case 2 :
        if(t==0){
            aud1.pause() ; 
        }else{
     
    console.log("poop") ; 
    aud2.src = "aud/poop.mp3";
    aud2.volume = 0.5; 
    aud2.play() ;
           
        }
       break;
    } 

}

function print(){

    console.log("clickme") ; 
    document.getElementById("printshit").innerHTML = document.getElementById("textarea").value
    console.log(document.getElementById("sizefont").value) ; 
    document.getElementById("printshit").style.fontSize =document.getElementById("sizefont").value +"px"
    document.getElementById("printshit").style.color =document.getElementById("stylecolor").value 
    //stylecolor
    boom();
    if(document.getElementById("textarea").value == "jojo"){
        console.log("start any jojo") ; 
        background(0,0);
        background(1,1);     
    }
    if(document.getElementById("textarea").value == "shit"){
        console.log("start any shit") ; 
        background(0,0);
        background(1,0);
        background(2,1);  
    }
}



function changestyle(){
var color = getnewcolor() ; 
    document.getElementById("printshit").style.color = color
    console.log("color: " +color ) ; 
   
    amongoos();

}
function button_(){
    console.log("button shit") ; 
    const aud = new Audio() ; 
    aud.src = "aud/button.mp3";
    
    aud.play() ;
}

function amongoos(){
    const aud = new Audio() ; 
    aud.src = "aud/amongoos.mp3";
    aud.volume = 0.05; 
    aud.play() ;
}

function boom(){
    console.log("boom") ; 
    const aud = new Audio() ; 
    aud.src = "aud/boom.mp3";
    aud.volume = 0.05; 
    aud.play() ;
}
function jojo(){
    const aud = new Audio() ; 
    aud.src = "aud/jojo.mp3";
    aud.volume = 0.1; 
    aud.play() ;
    aud.loop ;  
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
        aud.pause() ; 
}


async function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
 }