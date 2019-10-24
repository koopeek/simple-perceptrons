import examples from './examples.js';
import * as Utils from './Utils.js';

const LEARNING_CONST = 0.1;

class Perceptron {

    constructor(number, wages) {
        this.number = number;
        this.wages = [...wages];
    }

    teachPerceptron(gridValues) {
        let pocket_record = {
            record: 0,
            wages: this.wages
        };

        let pocket = Object.assign({}, pocket_record);

        for (let i = 0; i < 10000; i++) {
            let example_number  = Utils.getRandomInt(40);
            let correctAnswer   = examples[example_number].number === this.number ? 1 : -1;
            let ERR             = correctAnswer - this.getTresholdFunctionResult('learn', example_number, gridValues);

            if (ERR === 0) {
                pocket.record++;
            } else {
                if (pocket.record > pocket_record.record) {
                    Object.assign(pocket_record, pocket);
                }
                this.updateWages(ERR, example_number);
                pocket.record  = 0;
                pocket.wages   = this.wages;
            }
        }
        this.wages = pocket_record.wages;
    }

    updateWages(ERR, example_number) {
        for (let j = 0; j <= 35; j++) {
            this.wages[j] = this.wages[j] + (LEARNING_CONST * ERR * examples[example_number].values[j]);
        }
    }

    checkNumberFromGrid(gridValues) {
        if (this.getTresholdFunctionResult('check', null, gridValues) === 1) {
            const results_area = document.getElementById('results');
            results_area.innerHTML = `<p> Wynik (${Date.now()}): ${this.number} </p>`
        }
    }

    getTresholdFunctionResult(action, example_number, gridValues) {
        let summary = 0.0;
        for (let s = 0; s <= 35; s++) {
            if (action === 'learn') {
                summary += (this.wages[s] * examples[example_number].values[s]);
            } else {
                summary += (this.wages[s] * gridValues[s]);
            }
        }
        return (summary < 0 ? -1 : 1);
    }
}

export default Perceptron;