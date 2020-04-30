let scrolled;
let timer;
let top_button = document.getElementById("toTop");

top_button.style.display = "none";

window.onscroll = function () {
    if (window.pageYOffset > 500) {
        top_button.style.display = "";
    }
    else {
        top_button.style.display = "none";
    }
}

top_button.onclick = function () {
    scrolled = pageYOffset;
    //window.scrollTo(0,0);
    toTop();
}

function toTop() {
    if (scrolled > 0) {
        window.scrollTo(0, scrolled);
        scrolled = scrolled - 300;
        timer = setTimeout(toTop, 60);
    }
    else {
        clearTimeout(timer);
        window.scrollTo(0, 0);
    }
}