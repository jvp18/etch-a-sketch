const boxWidth = 1000;
let boxNum = 16;

const container = document.querySelector("#container");
container.setAttribute("style", `max-width: ${boxWidth}px`)

const squareSize = boxWidth/boxNum;

for (let i=0; i<boxNum; i++) {
    for (let j=0; j<boxNum; j++) {
        const box = document.createElement("div");
        box.setAttribute("style", `outline: solid black 1.5px; min-width: ${squareSize}px; height: ${squareSize}px; flex: 1`);
        container.appendChild(box);
    }
}

