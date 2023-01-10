var hiddenPart = document.getElementById("hiddenstuff").style;
var buttonToo = document.getElementById("btn");
var buttonBg = document.querySelector(".button");
var profilePart = document.querySelector(".profile-details").style;
const x = window.matchMedia("(min-width: 1000px)");

function effect(){
    if(x.matches){
        buttonBg.style.backgroundColor = buttonBg.style.backgroundColor === "rgb(236, 242, 248)" ? "rgb(72, 85, 106)" : "rgb(236, 242, 248)";

        profilePart.display = "flex";
        hiddenPart.display = hiddenPart.display === "none" ? "unset" : "none";
        buttonToo.style.fill = buttonToo.style.fill === "rgb(110, 128, 152)" ? "rgb(255, 255, 255)" : "rgb(110, 128, 152)";
    }else{
        hiddenPart.display = hiddenPart.display === "none" ? "unset" : "none";

        buttonToo.style.fill = buttonToo.style.fill === "rgb(110, 128, 152)" ? "rgb(255, 255, 255)" : "rgb(110, 128, 152)";


        profilePart.display = profilePart.display === "flex" ? "none" : "flex";
        
        buttonBg.style.backgroundColor = buttonBg.style.backgroundColor === "rgb(110, 128, 152)" ? "rgb(255, 255, 255)" : "rgb(110, 128, 152)";
    }
}