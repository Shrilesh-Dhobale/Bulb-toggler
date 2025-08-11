function turnoff() {
    const bodyElement = document.getElementById("body");
    const cardElement = document.getElementById("card");
    const headingElement = document.getElementById("heading");
    const bulb = document.getElementById("bulb-off");
    bodyElement.style.backgroundColor = "black";
    cardElement.style.backgroundColor = "grey";
    headingElement.style.color = "white";
    bulb.src = "lightbulb.png";
}
