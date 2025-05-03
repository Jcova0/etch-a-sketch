let setSizeButton = document.querySelector(".set-size");
let resetButton = document.querySelector(".reset");
let gridContainer = document.querySelector(".container");

let gridSize = 16;
let containerSize = 700;


createGrid(gridSize);

function createGrid(size) {
    gridContainer.innerHTML = "";

    let squareSize = containerSize / size;

    for (let i = 0; i < size * size; i++) {
        let gridSquares = document.createElement("div");
        gridSquares.classList.add("grid-square");   
        gridSquares.style.width = `${squareSize}px`;
        gridSquares.style.height = `${squareSize}px`;

        gridSquares.addEventListener("mouseenter", () => {
            gridSquares.style.backgroundColor = "black";
        });

        gridContainer.appendChild(gridSquares);
    }
}

setSizeButton.addEventListener("click", () => {
    let newSize = prompt("Enter new grid size");
    if (newSize < 1 || newSize > 100) {
        alert("Please enter a number between 1 and 100");
    }
    else {
        createGrid(newSize);
    }
});

resetButton.addEventListener("click", () => {
    let gridSquares = document.querySelectorAll(".grid-square");
    gridSquares.forEach(square => {
        square.style.backgroundColor = "white";
    });
});


