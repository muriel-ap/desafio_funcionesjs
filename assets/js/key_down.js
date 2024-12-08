let color = "";

document.addEventListener("keydown", (event) => {
  const divKey = document.querySelector("#key");
  if (event.key === "a") {
    color = "pink";
    divKey.style.backgroundColor = color;
  } else if (event.key === "s") {
    color = "orange";
    divKey.style.backgroundColor = color;
  } else if (event.key === "d") {
    color = "cyan";
    divKey.style.backgroundColor = color;
  }  else if (event.key === "q") {
    crearDiv("purple");
  } else if (event.key === "w") {
    crearDiv("gray");
  } else if (event.key === "e") {
    crearDiv("brown");
  }
});

const crearDiv = (color) => {
  const nuevoDiv = document.createElement("div");
  nuevoDiv.style.width = "200px";
  nuevoDiv.style.height = "200px";
  nuevoDiv.style.backgroundColor = color;
  nuevoDiv.style.marginBottom = "10px";
  document.body.appendChild(nuevoDiv);
};
