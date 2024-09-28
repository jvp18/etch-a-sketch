const boxWidth = 850;

const container = document.querySelector("#container");
container.setAttribute("style", `max-width: ${boxWidth}px`);

function askUser () {
    let userPrompt = Number(prompt("How many number of squares per side would you like in the grid?"));
    while (isNaN(userPrompt)) {
        userPrompt = Number(prompt("Your entry was not a number! Please enter again:"));
    }
    while (userPrompt > 100) {
        userPrompt = Number(prompt("Maximum of 100 squares per side! Please enter again:"));
    }
    return userPrompt
}


function createGrid () {
    removeGrid ()
    const boxNum = askUser()
    const squareSize = boxWidth/boxNum;
    for (let i=0; i<boxNum; i++) {
        for (let j=0; j<boxNum; j++) {
            const box = document.createElement("div");
            box.setAttribute("style", `outline: solid gray 1px; min-width: ${squareSize}px; min-height: ${squareSize}px; margin: 0; padding: 0; flex: 1`);
            container.appendChild(box);   
            box.addEventListener("mouseover", addColor)
        }
    }
}


function removeGrid () {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
}


function addColor (e) {
    const rgbColor1 = Math.floor(Math.random() *255)
    const rgbColor2 = Math.floor(Math.random() *255)
    const rgbColor3 = Math.floor(Math.random() *255)
    e.target.style.background = `rgb(${rgbColor1}, ${rgbColor2}, ${rgbColor3})`;
}


const button = document.querySelector("#button-grid");
button.addEventListener("click", createGrid)

