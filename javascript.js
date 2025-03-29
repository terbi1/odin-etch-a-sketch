let size = 16;
const gridSize = 480;

const body = document.querySelector("body");
const grid = document.querySelector("grid");

let isMouseDown = false;
let mode = "brush";

body.addEventListener("mousedown", (e) => {
    e.preventDefault(); // to prevent dragging cells
    isMouseDown = true;
});

body.addEventListener("mouseup", () => {
    isMouseDown = false;
});

function getCellElement(width, height) {

    const cell = document.createElement("cell");
    cell.style.border = "solid";
    cell.style.borderColor = "black";
    cell.style.height = `${height}px`;
    cell.style.width = `${width}px`;
    cell.style.display = "flex";
    cell.style.boxSizing = "border-box";
    cell.style.borderWidth = "thin";
    cell.style.backgroundColor = "none";

    return cell;
}

function gridInitializer() {

    for (let i = 0; i < size; ++i) {
        for (let j = 0; j < size; ++j) {
            let tempCell = getCellElement(gridSize / size, gridSize / size);
            // tempCell.addEventListener("mouseenter", () => {
            //     event.target.style.backgroundColor = "gray";
            // });
            // tempCell.addEventListener("mouseleave", () => {
            //     event.target.style.backgroundColor = "transparent";
            // });
            tempCell.addEventListener("mouseover", () => {

                if (isMouseDown) {
                    switch (mode) {
                        case "brush":
                            event.target.style.backgroundColor = "gray";
                            break;
                        case "eraser":
                            event.target.style.backgroundColor = "transparent";
                            break;
                        case "rainbow":
                            event.target.style.backgroundColor = "red";
                            break;
                    }
                }
            });
            grid.appendChild(tempCell);

        }
    }

}

function clearCell(cell) {
    cell.style.backgroundColor = "transparent";
}


function clearGrid() {
    const cells = document.querySelectorAll("grid > cell");

    for (let i = 0; i < size; ++i) {
        for (let j = 0; j < size; ++j) {
            cells.forEach(clearCell);
        }
    }
}

document.querySelector(".clear").addEventListener("click", clearGrid);

document.querySelector(".eraser").addEventListener("click", () => {
    mode = "eraser";
})

document.querySelector(".rainbow").addEventListener("click", () => {
    mode = "rainbow";
})

document.querySelector(".brush").addEventListener("click", () => {
    mode = "brush";
})

gridInitializer();