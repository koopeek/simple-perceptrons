import Perceptron from './Perceptron.js';
import * as Utils from './Utils.js';

let Perceptrons = [];
let gridValues  = [];

//Initialize array with Perceptrons
for (let i = 0; i < 10; i++) {
    Perceptrons[i] = new Perceptron(i, Utils.getRandomWages());
}

//Initialize grid with pixels
setTimeout(function() {
    Utils.generateGrid(7, 5);
    initializeGridValues();
    addEventListenersForButtons();
}, 200);

function initializeGridValues() {
    for (let i = 1; i <= 35; i++) {
        gridValues[i] = 0;
    }
    gridValues[0] = 1;
}

function addEventListenersForButtons() {
    const cells             = document.getElementsByClassName('grid-item');
    const leranButton       = document.getElementById('button-learn');
    const checkResultButton = document.getElementById('button-check');

    Array.from(cells).forEach(cell => {
        cell.addEventListener('click', function() {
            cell.classList.forEach(function(className) {
                if (className.startsWith('number')) {
                    updateGridValuesAndColor(className.substring(className.indexOf('-') + 1), cell);
                }
            });
        });
    });

    leranButton.addEventListener('click', function() {
        for (let i = 0; i < 10; i++) {
            Perceptrons[i].teachPerceptron(gridValues);
        }
        window.alert("Learning has ended.")
    });

    checkResultButton.addEventListener('click', function() {
        for (let i = 0; i < 10; i++) {
            Perceptrons[i].checkResultFromDisplay(gridValues);
        }
    });
} 

function updateGridValuesAndColor(number, cell) {
    if (gridValues[number] === 0) {
        gridValues[number] = 1;
        cell.style = 'background-color: pink;';
    } else {
        gridValues[number] = 0;
        cell.style = 'background-color: black;';
    }
    for (let i = 0; i < 10; i++) {
        Perceptrons[i].checkNumberFromGrid(gridValues);
    }
}