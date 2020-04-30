document.getElementById("light").onclick = function () {
    document.getElementById("style").setAttribute("href", "team.css");
    localStorage.setItem("theme", "light");
}
document.getElementById("dark").onclick = function () {
    document.getElementById("style").setAttribute("href", "dark_team.css");
    localStorage.setItem("theme", "dark");
}
if (localStorage.getItem("theme") == "dark") {
    document.getElementById("style").href = "dark_team.css";
}
else if (localStorage.getItem("theme") == "light" || localStorage.getItem("theme") == null) {
    document.getElementById("style").href = "team.css";
}
