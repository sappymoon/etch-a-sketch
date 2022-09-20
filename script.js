let grid = document.getElementById('grid');

    for(i = 1; i <= 256; i++){
        let gridItem = document.createElement('div');
        grid.appendChild(gridItem).className = 'grid-item';
        gridItem.onmouseover = function(){
            this.style.backgroundColor = 'green';
        }
    }

