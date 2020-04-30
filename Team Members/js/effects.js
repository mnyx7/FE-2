/*mouseover photo*/
document.getElementById("man").addEventListener("mouseover", function () {
    document.getElementById("man").setAttribute("src", "img/man2.png");
});
document.getElementById("man").addEventListener("mouseout", function () {
    document.getElementById("man").setAttribute("src", "img/man.png");
})
