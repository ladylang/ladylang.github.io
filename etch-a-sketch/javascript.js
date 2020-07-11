

const button = document.getElementById('resetButton');
const sketchContainer = document.getElementById('sketchContainer');


let squareDivs;
let grid;


createSquares(16);

button.addEventListener('click', function(e) {
    const sketchContainer = document.querySelector('#sketchContainer');
    const squareDivs = document.querySelectorAll('.squareDivs');
    squareDivs.forEach(squareDivs => {
        sketchContainer.removeChild(squareDivs)
    });
    let grid = prompt('How many squares should each side of the grid have?');
    createSquares(grid);
});



function createSquares (grid) {
    let i=1;
    let totalSquares=grid*grid;
    let divWidth=(500-grid)/grid + 'px';//500px is size of sketchContainer. -grid for the border (2*0.5px*grid)
    console.log(totalSquares);
    console.log(divWidth);
    while (i<=totalSquares) {
        let squareDivs = document.createElement('div');
        squareDivs.classList.add('squareDivs');
        squareDivs.style.width=divWidth;
        squareDivs.style.height=divWidth;
        squareDivs.addEventListener('mouseover', function(e) {
            squareDivs.style.backgroundColor='blue';
            squareDivs.style.color='blue';
        });
        sketchContainer.appendChild(squareDivs);
        i++;
    };
};
