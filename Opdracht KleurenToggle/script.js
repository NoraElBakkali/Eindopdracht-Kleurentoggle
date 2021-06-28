document.getElementById("myDropdown").onclick = function () { myFunction() };

function myFunction() {
    document.getElementById("myBtn").classList.toggle("hide");
}

document.getElementById("myBtn").onclick = function () { myFunction() };

function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

function changeBodyBg(color) {
    document.body.style.background = color;

}

