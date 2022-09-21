

function update(){
    let grid = document.getElementById('grid');
    let sliderValue = document.getElementById('slider').value;
    let gridParent = document.getElementsByClassName('grid-flex');

    document.getElementById('dimensions').innerText = sliderValue + " x " + sliderValue;

    grid.style.setProperty('--grid-rows', sliderValue);
    grid.style.setProperty('--grid-columns', sliderValue);

    for(i = 0; i < sliderValue * sliderValue; i++){
        let gridItem = document.createElement('div');
        grid.appendChild(gridItem).className = 'grid-item';
        gridItem.onmouseover = function(){
            this.style.backgroundColor = 'green';
        }
    }
}



