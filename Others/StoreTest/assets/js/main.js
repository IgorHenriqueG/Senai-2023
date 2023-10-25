var principal = document.querySelector(".principalImg");
var miniatures = document.querySelector(".miniatures").childNodes;

miniatures.forEach((element) => {
    element.onmouseover = () => {
        principal.src = element.src
    }
    element.onmouseout = () => {
        principal.src = "assets/img/Jordanog.png"
    }
})