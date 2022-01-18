const grid = document.querySelector("#grid");
let gridSize = 16;
let drawingMode = "classic";

function resetGrid() {
    grid.innerHTML = "";
    createGrid(gridSize, drawingMode);
}

function setDrawingMode(mode) {
    if (drawingMode !== mode) {
        drawingMode = mode;
        resetGrid();
    }
}

function drawClassic() {
    this.style.backgroundColor = "black";
}

function drawRainbow() {
    if (!this.style.backgroundColor) {
        let hue = Math.floor(Math.random() * 361).toString();
        this.style.backgroundColor = `hsl(${hue},100%,70%)`;
    }
}

function createGrid(gridSize, drawingMode) {
    for (let i = 0; i < gridSize ** 2; i++) {
        const div = document.createElement("div");
        div.classList.add("square");

        if (drawingMode === "classic") {
            div.addEventListener("mouseover", drawClassic);
        } else if (drawingMode === "rainbow") {
            div.addEventListener("mouseover", drawRainbow);
        }

        grid.appendChild(div);
    }
}

createGrid(16, "classic")