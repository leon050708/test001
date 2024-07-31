var a = document.getElementById("a");
var uls = document.getElementById("ul1");
a.addEventListener("click", () => {
    uls.classList.toggle("ndisp");
    uls.classList.toggle("disp")
})