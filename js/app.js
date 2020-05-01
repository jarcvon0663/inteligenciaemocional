document.getElementById("button-up").addEventListener("click", scrollup);

function scrollup(){
    var currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
    if (currentScroll > 0){
        window.requestAnimationFrame(scrollup);
        window.scrollTo(0, currentScroll - (currentScroll / 5));

    }
}