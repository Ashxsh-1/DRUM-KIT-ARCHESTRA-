var numberOfButtons = document.querySelectorAll(".drum").length;


// for ( var i = 0 ; i<numberOfButtons ; i++)
// {
//     document.querySelectorAll(".drum")[i].addEventListener("click",function(){
//         alert("I got clicked!");
//     });
// }


for(var i = 0 ; i < numberOfButtons; i++){ 
document.querySelectorAll( ".drum")[i].addEventListener( "click" , function() {
    // this.style.color = "white";
    var buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);    
}); 
    

}

//detecting keyboardpress

document.addEventListener("keypress",function(event) {
    // console.log(event);
    makeSound(event.key);

});


function makeSound(key)
{
    switch (key){
        case "w":
            var audio = new Audio("sounds/tom-1.mp3");
audio.play();
break;
        case "a":
            var audio = new Audio("sounds/tom-2.mp3");
audio.play();
break;
        case "s":
            var audio = new Audio("sounds/tom-3.mp3");
audio.play();
break;
        case "d":
            var audio = new Audio("sounds/tom-4.mp3");        
audio.play();              
break;
        case "j":
            var audio = new Audio("sounds/snare.mp3");    
audio.play();                   
break;
        case "k" :
            var audio = new Audio("sounds/kick-bass.mp3");    
audio.play();                                     
break;
        case "l":
            var audio = new Audio("sounds/crash.mp3");
audio.play();
break;
            default: console.log(buttonInnerHTML);
        
    }

    

    

});

}

// var audio = new Audio("sounds/tom-1.mp3");
//     audio.play();






// document.querySelector(".drum")[i].addEventListener("click",handleClick);
// // finds the place with buttons as no number is mentioned so automatically first one gets selected and add even listener attribute when clicked adds functionality of function handleclick on it....//
// // no parentesis in query selector



// function handleClick() {
//     alert("I got clicked! ");
// }
// }