function turnoff() {
    const bodyElement = document.getElementById("body");
    const cardElement = document.getElementById("card");
    const headingElement = document.getElementById("heading");
    const bulb = document.getElementById("bulb-off");
    bodyElement.style.backgroundColor = "black";
    cardElement.style.backgroundColor = "grey";
    headingElement.style.color = "white";
    headingElement.style.textShadow = "1px 1px 3px white";
    cardElement.style.boxShadow = "4px 4px 8px rgba(155, 144, 144, 0.2)";
    bulb.src = "lightbulb.png";
}
function turnon() {
    const bodyElement = document.getElementById("body");
    const cardElement = document.getElementById("card");
    const headingElement = document.getElementById("heading");
    const bulb = document.getElementById("bulb-off");
    bodyElement.style.backgroundColor = "lightblue";
    cardElement.style.backgroundColor = "white";
    headingElement.style.color = "black";
    headingElement.style.textShadow = "1px 1px 3px black";
    cardElement.style.boxShadow = "4px 4px 8px rgba(155, 144, 144, 0.2)";
    bulb.src = "lightbulb (1).png";
}
