const grid = document.querySelector("#grid");

function createGrid() {
    for (let i = 0; i < 16 ** 2; i++) {
        const div = document.createElement("div");
        div.classList.add("square");
        div.addEventListener("mouseover", function () {
            this.style.backgroundColor = "black";
        })
        grid.appendChild(div);
    }
}

createGrid()