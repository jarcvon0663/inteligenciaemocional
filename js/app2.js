buttonUp = getElementById("button-up");

window.onscroll = function(){
    
    var scroll = document.documentElement.scrollTop;

    if (scroll > 10){
        buttonUp.style.transform = "scale(1)";
    }else if (scroll < 10){
        buttonUp.style.transform = "scale(0)";
    }
}