const container = document.querySelector(".container");
const restartButton = document.querySelector(".restartButton");
let gridSize = 16;
let spacePressed = false;
let mouseClicked = false;

function drawCanvas(newGridSize) {

    for (let i = 0; i < newGridSize; i++) {
        let column = document.createElement("div");
        column.classList.add("column");
        container.appendChild(column);
        for (let j = 0; j < newGridSize; j++) {
            let square = document.createElement("div");
            square.classList.add("square");
            square.addEventListener("mouseenter", function(e) {
                drawOrErase(square);
            });
            column.appendChild(square);
        }
    }
}

function drawOrErase(element) {
    if (mouseClicked) {
        if (!spacePressed) {
            element.classList.add("filled");
        } else {
            element.classList.remove("filled");
        }
    }
}

function redrawCanvas() {
    newGridSize = prompt("grid size? this sets the number of squares for each row/column");
    if (newGridSize > 100) {
        alert(`${newGridSize} is too high a number. has been set to 100`);
        newGridSize = 100;
    }
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
    drawCanvas(newGridSize);
}

document.addEventListener("mousedown", () => mouseClicked = true);
document.addEventListener("mouseup", () => mouseClicked = false);
document.addEventListener("keydown", () => spacePressed = true);
document.addEventListener("keyup", () => spacePressed = false);

restartButton.addEventListener("click", () => redrawCanvas());

drawCanvas(gridSize);

