const grid = document.querySelector("#grid");
const gridSizeSlider = document.getElementById("grid-size-slider");
let gridSize = gridSizeSlider.value;
let drawingMode = "classic";
let gridSizeLabel = document.querySelector("#grid-size-label");

document.documentElement.style.setProperty("--grid-size", gridSize);

gridSizeSlider.addEventListener("input", function () {
    gridSize = this.value;
    gridSizeLabel.textContent = `${gridSize} x ${gridSize}`;
    resetGrid();
})

function resetGrid() {
    grid.innerHTML = "";
    document.documentElement.style.setProperty("--grid-size", gridSize);
    createGrid(gridSize, drawingMode);
}

resetButton = document.querySelector("#reset-button");
resetButton.addEventListener("click", resetGrid)

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

createGrid(gridSize, drawingMode);