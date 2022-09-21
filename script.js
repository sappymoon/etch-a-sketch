let grid = document.getElementById('grid');
let cols = 20;
let rows = 20;

grid.style.setProperty('--grid-rows', rows);
grid.style.setProperty('--grid-columns', cols);

    for(i = 0; i < rows * cols; i++){
        let gridItem = document.createElement('div');
        grid.appendChild(gridItem).className = 'grid-item';
        gridItem.onmouseover = function(){
            this.style.backgroundColor = 'green';
        }
    }

