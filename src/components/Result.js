import React from 'react';

export class Result extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    processEntries(entries) {
        if (entries.length > 0){
            const equation = this.processParens(entries);
            return equation > 0 ? equation[0] : 0;
        }

    };

    processParens(entries) {
        while (entries.match(/\(([^)]+)\)/g)) {
            const inParens = entries.match(/\(([^)]+)\)/g)
            const innerParens = inParens[0].replace(/[()]/g, '')
            const parensResult = this.processParens(innerParens);
            entries = entries.replace(inParens[0], parensResult);
        } 

        if(!entries.match(/[()]/g)){
            return this.doMath(entries);
        }
        
    }

    doMath(entries) {
        let equation = entries.replace(/\s/g, '')

        equation = equation.match(/[0-9]+|[+\-*/]+/g).map(el => isNaN(el) ? el : Number(el))
        equation = this.processMultiplicationDivision(equation)
        equation = this.processAdditionSubtraction(equation)
        return equation;
    }

    processMultiplicationDivision(equation) {
        let i = 1;
        while(equation.length > 1 && i < equation.length){
            if(equation[i] === '*'){
                equation.splice(i-1, 3, equation[i-1] * equation[i+1])
            } else if (equation[i] === '/') {
                equation.splice(i-1, 3, equation[i-1] / equation[i+1])
            } else {
                i++;
            }
        }
        return equation;
    }

    processAdditionSubtraction(equation) {
        let i = 1;
        while(equation.length > 1 && i < equation.length){
            if(equation[i] === '+'){
                equation.splice(i-1, 3, equation[i-1] + equation[i+1])
            } else if (equation[i] === '-') {
                equation.splice(i-1, 3, equation[i-1] - equation[i+1])
            } else {
                i++;
            }
        }
        return equation;
    }

    render(){
        return (
            <h2>
                {this.processEntries(this.props.entriesString)}
            </h2>
        )
    }
}
