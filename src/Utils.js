export function getRandomWages() {
    let wages = [];
    for (let i = 0; i <= 35; i++) {
        wages[i] = (2 * Math.random()) - 1;
    }
    return wages;
}

export function generateGrid(rowsAmount, colsAmount) {
    const containter = document.getElementById('container');

    container.style.setProperty('--grid-rows', rowsAmount);
    container.style.setProperty('--grid-cols', colsAmount);

    for (let c = 1; c <= (rowsAmount * colsAmount); c++) {
        const cell = document.createElement("div");
        container.appendChild(cell).className   = `grid-item number-${c}`;
        containter.appendChild(cell).style      = 'background-color: black;';
    };
};

export function getRandomInt(max) {
    return (Math.floor(Math.random() * Math.floor(max)));
}
