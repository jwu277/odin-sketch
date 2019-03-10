/* Constants */

const container = document.querySelector("#container");
const cells     = [];

const WIDTH  = 500; // px
const HEIGHT = WIDTH; // px

const NUM_ROWS = 16;
const NUM_COLS = NUM_ROWS;

const COL_WIDTH = ` ${WIDTH / NUM_COLS}px`;
const ROW_HEIGHT = ` ${HEIGHT / NUM_ROWS}px`;


createGrid();

function createGrid() {
    setupContainer();
    createCells();
}

function setupContainer() {

    container.style.width  = `${WIDTH}px`;
    container.style.height = `${HEIGHT}px`;

    container.style.gridTemplateColumns = COL_WIDTH.repeat(NUM_COLS);
    container.style.gridTemplateRows    = ROW_HEIGHT.repeat(NUM_ROWS);

}

function createCells() {
    for (let i = 0; i < NUM_ROWS; i++) {
        createRow();
    }
}

function createRow() {

    let rowCells = [];

    for (let i = 0; i < NUM_COLS; i++) {
        let cell = document.createElement("div");
        initializeCell(cell);
        rowCells.push(cell);
    }

    cells.push(rowCells);

}

function initializeCell(cell) {

    cell.setAttribute("class", "cell");
    cell.addEventListener("mouseover", increaseOpacity);

    container.appendChild(cell);
    
}

function increaseOpacity(e) {
    e.target.style.opacity = 1;
}
