var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumButtons; i++){

    document.querySelectorAll(".drum")[i].addEventListener("click",function () { 
        var buttonInnerHTML = this.innerHTML;

        switch (buttonInnerHTML) {
            case "w":
                var tom1 = new Audio("sounds/tom-1.mp3");
                audio.play();
                break;
            
            case "a":
                var tom2 = new Audio("sounds/tom-2.mp3");
                audio.play();
                break;

            case "s":
                var tom3 = new Audio("sounds/tom-3.mp3");
                audio.play();
                break;

            case "d":
                var tom4 = new Audio("sounds/tom-4.mp3");
                audio.play();
                break;

            case "j":
                var snare = new Audio("sounds/snare.mp3");
                audio.play();
                break;

            case "k":
                var crash = new Audio("sounds/crash.mp3");
                audio.play();
                break;

            case "l":
                var kickbass = new Audio("sounds/kick-bass.mp3");
                audio.play();
                break;

            default:
                break;
        }
        this.style.color = "white";


    });

}
/*
var audio = new Audio("sounds/tom-1.mp3");
audio.play(); */ 