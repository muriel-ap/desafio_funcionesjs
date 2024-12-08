const pintarNegro = (div) => div.style.backgroundColor = "black";

const divBlue = document.querySelector("#div_blue");
const divRed = document.querySelector("#div_red");
const divGreen = document.querySelector("#div_green");
const divYellow = document.querySelector("#div_yellow");

divBlue.addEventListener("click", () => pintarNegro(divBlue));
divRed.addEventListener("click", () => pintarNegro(divRed));
divGreen.addEventListener("click", () => pintarNegro(divGreen));
divYellow.addEventListener("click", () => pintarNegro(divYellow));


