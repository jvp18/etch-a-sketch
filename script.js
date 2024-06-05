const boxWidth = 1000;

const container = document.querySelector("#container");
container.setAttribute("style", `max-width: ${boxWidth}px`);

function askUser () {
    let userPrompt = Number(prompt("How many number of squares per side would you like in the grid?"));
    while (userPrompt > 100) {
        userPrompt = Number(prompt("Maximum of 100 squares per side! Please enter a new amount:"));
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
            box.setAttribute("style", `outline: solid gray 1.5px; min-width: ${squareSize}px; height: ${squareSize}px; flex: 1`);
            container.appendChild(box);
        }
    }
}

function removeGrid () {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
}

const button = document.querySelector("#button-grid");
button.addEventListener("click", createGrid)


