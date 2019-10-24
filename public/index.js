let examples = [
    {
        number: 0,
        values : [1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1]
    },
    {
        number: 0,
        values : [1, 0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1, 0]
    },
    {
        number: 0,
        values : [1, 0, 1, 1, 1, 1, 0, 1, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 1, 1, 0]
    }, 
    {
        number: 0,
        values : [1, 0, 1, 1, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 1, 1, 0]
    },
    {
        number: 1,
        values: [1, 0, 0, 0, 1, 0, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0]
    },
    {
        number: 1,
        values: [1, 0, 0, 0, 1, 0, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0]
    },
    {
        number: 1,
        values: [1, 0, 0, 0, 1, 0, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 1, 1, 1]
    },
    {
        number: 1,
        values: [1, 0, 0, 0, 1, 0, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 1, 1]
    },
    {
        number: 2,
        values: [1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0]
    },
    {
        number: 2,
        values: [1, 0, 0, 1, 1, 1, 0, 1, 0, 0, 1, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 1, 1]
    }
    ,
    {
        number: 2,
        values: [1, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 0, 1]
    },
    {
        number: 2,
        values: [1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 1, 1]
    },
    {
        number: 3,
        values: [1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1]
    },
    {
        number: 3,
        values: [1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 0, 1, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 1, 0]
    },
    {
        number: 3,
        values: [1, 0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 0, 1, 1, 1, 1]
    },
    {
        number: 3,
        values: [1, 0, 1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 0, 1, 1, 0, 1]
    },
    {
        number: 4,
        values: [1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]
    },
    {
        number: 4,
        values: [1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1]
    },
    {
        number: 4,
        values: [1, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1]
    },
    {
        number: 4,
        values: [1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]
    },
    {
        number: 5,
        values: [1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1]
    },
    {
        number: 5,
        values: [1, 0, 1, 0, 1, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 1, 1]
    },
    {
        number: 5,
        values: [1, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 1, 1, 1, 0]
    },
    {
        number: 5,
        values: [1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 0]
    },
    {
        number: 6,
        values: [1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1]
    },
    {
        number: 6,
        values: [1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 1, 0, 0, 1, 1, 1, 0, 0, 1, 0, 0, 0, 0, 1, 1, 0, 1, 1, 1, 0]
    },
    {
        number: 6,
        values: [1, 1, 1, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1, 0, 0, 1, 1, 1, 0]
    },
    {
        number: 6,
        values: [1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1]
    },
    {
        number: 7,
        values: [1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]
    },
    {
        number: 7,
        values: [1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]
    },
    {
        number: 7,
        values: [1, 1, 1, 1, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0, 1, 0, 0, 0, 0, 1, 1, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 0]
    },
    {
        number: 7,
        values: [1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]
    },
    {
        number: 8,
        values: [1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1]
    },
    {
        number: 8,
        values: [1, 0, 1, 1, 1, 0, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 1, 0, 1, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 0, 1, 1, 1, 0]
    },
    {
        number: 8,
        values: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    },
    {
        number: 8,
        values: [1, 0, 1, 1, 1, 0, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0]
    },
    {
        number: 9,
        values: [1,
                     1, 1, 1, 1, 1,
                      1, 0, 0, 0, 1,
                      1, 1, 1, 1, 1, 
                      0, 0, 0, 0, 1,
                       0, 0, 0, 0, 1,
                        0, 0, 0, 0, 1,
                         0, 0, 0, 0, 1]
    },
    {
        number: 9,
        values: [1,
             0, 0, 1, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0]
    },
    {
        number: 9,
        values: [1, 0, 1, 1, 1, 0, 0, 1, 0, 0, 1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0]
    },
    {
        number: 9,
        values: [1,
             0, 1, 1, 1, 1,
              0, 1, 1, 0, 1, 
              0, 1, 1, 1, 1,
               0, 0, 0, 1, 1,
                0, 0, 0, 1, 1,
                 0, 1, 1, 1, 1,
                  0, 1, 1, 1, 1]
    }
];

let Perceptrons     = [];
let displayValues   = [];

class Perceptron {

    constructor(number, wages) {
        this.number = number;
        this.wages = [...wages];
    }

    teachPerceptron() {
        let pocket_record = {
            record: 0,
            wages: this.wages
        };

        let pocket = Object.assign({}, pocket_record);

        for (let i = 0; i < 10000; i++) {
            let example_number  = this.getRandomInt(40);
            let correctAnswer   = examples[example_number].number === this.number ? 1 : -1;
            let ERR             = correctAnswer - this.getTresholdFunctionResult('learn', example_number);

            if (ERR === 0) {
                pocket.record++;
                if (pocket.record > pocket_record.record) {
                    Object.assign(pocket_record, pocket);
                }
            } else {
                this.updateWages(ERR, example_number);
                pocket.record  = 0;
                pocket.wages   = this.wages;
            }
        }
        this.wages = pocket_record.wages;
    }

    updateWages(ERR, example_number) {
        for (let j = 0; j <= 35; j++) {
            this.wages[j] = this.wages[j] + (0.1 * ERR * examples[example_number].values[j]);
        }
    }

    checkResultFromDisplay() {
        if (this.getTresholdFunctionResult('check', null) === 1) {

            console.log('Wynik:' + this.number);

            const results = document.getElementById('results');
            results.innerHTML = `<p> Wynik (${Date.now()}): ${this.number} </p>`
        }
    }

    getTresholdFunctionResult(action, example_number) {
        let summary = 0.0;
        for (let s = 0; s <= 35; s++) {
            if (action === 'learn') {
                summary += (this.wages[s] * examples[example_number].values[s]);
            } else {
                summary += (this.wages[s] * displayValues[s]);
            }
        }
        return (summary < 0 ? -1 : 1);
    }

    getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }
}

//Initialize array with Perceptrons
for (let i = 0; i < 10; i++) {
    Perceptrons[i] = new Perceptron(i, getRandomWages());
}

function getRandomWages() {
    let result = [];
    for (let i = 0; i <= 35; i++) {
        result[i] = (2 * Math.random()) - 1;
    }
    return result;
}

//Initialize grid with pixels
setTimeout(function() {
    const containter = document.getElementById('container');

    function generateGrid(rows, cols) {
     container.style.setProperty('--grid-rows', rows);
     container.style.setProperty('--grid-cols', cols);

      for (let c = 1; c <= (rows * cols); c++) {
        const cell = document.createElement("div");
        container.appendChild(cell).className   = `grid-item number-${c}`;
        containter.appendChild(cell).style      = 'background-color: black;';
      };
    };
    generateGrid(7, 5);
    addEventListeners();
    initializeDisplayValues();
}, 200);

function addEventListeners() { 
    const cells             = document.getElementsByClassName('grid-item');
    const leranButton       = document.getElementById('button-learn');
    const checkResultButton = document.getElementById('button-check');

    Array.from(cells).forEach(cell => {
        cell.addEventListener('click', function() {
            cell.classList.forEach(function(className) {
                if (className.startsWith('number')) {
                    updateDisplayValuesAndColor(className.substring(className.indexOf('-') + 1), cell);
                }
            });
        });
    });

    leranButton.addEventListener('click', function() {
        for (let i = 0; i < 10; i++) {
            Perceptrons[i].teachPerceptron();
        }
        window.alert("Uczenie zakończone.")
    });

    checkResultButton.addEventListener('click', function() {
        for (let i = 0; i < 10; i++) {
            Perceptrons[i].checkResultFromDisplay();
        }
    });
} 

function initializeDisplayValues() {
    for (let i = 1; i <= 35; i++) {
        displayValues[i] = 0;
    }
    displayValues[0] = 1;
}

function updateDisplayValuesAndColor(number, cell) {
    if (displayValues[number] === 0) {
        displayValues[number] = 1;
        cell.style = 'background-color: pink;';
    } else {
        displayValues[number] = 0;
        cell.style = 'background-color: black;';
    }
    for (let i = 0; i < 10; i++) {
        Perceptrons[i].checkResultFromDisplay();
    }
}