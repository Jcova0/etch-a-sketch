const grid = document.getElementById('grid');
const reset = document.getElementById('reset');
let size = 16;

reset.addEventListener('click', () => {
    const squares = document.querySelectorAll('.grid-item');
    squares.forEach(square => {
        grid.removeChild(square)
    });

    let newSize = prompt('Enter a new grid size');
    while (newSize > 100) {
        newSize = prompt("Enter a number less than 101");
    }
    if (newSize <= 100) {
        size = newSize;
        grid.style.display = 'grid';
        grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
        grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    }

    for (let i = 0; i < size * size; i++) {
        const div = document.createElement('div');
        div.classList.add('grid-item');
        grid.appendChild(div);
    
        div.addEventListener('mouseover', mouseOver);
    }
});

grid.style.display = 'grid';
grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;

function mouseOver(event) {
    changeColor(event.target);
}

function changeColor(element) {
    element.style.background = 'black';
}

for (let i = 0; i < size * size; i++) {
    const div = document.createElement('div');
    div.classList.add('grid-item');
    grid.appendChild(div);

    div.addEventListener('mouseover', mouseOver);
}

