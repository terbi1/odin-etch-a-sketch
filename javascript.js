let size = 16;
const gridSize = 480;

const body = document.querySelector("body");
const grid = document.querySelector("grid");

let isMouseDown = false;

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
                    event.target.style.backgroundColor = "gray";
                }
            });
            grid.appendChild(tempCell);

        }
    }

}


gridInitializer();