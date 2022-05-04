import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Result} from './components/Result.js'

class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            entriesString: "",
        };
    }

    buttonClick(val) {
        // Passing a function instead of object to setState so that the Screen element calls the updated version
        this.setState((state) => {
            return {entriesString: state.entriesString + val};
        })
    }

    handleInput(event) {
        this.setState(() => {
            return {entriesString: event.target.value}
        });
    }

    renderButton(val) {
        return (
            <CalculatorButton
                value={val}
                //buttonClick() needs to be passed anonymously or else it will trigger when CalculatorButton is rendered
                onClick={() => this.buttonClick(val)}
            />
        );
    }

    renderScreen(entriesString) {
        return (
            <Screen
                entriesString = {entriesString}
                onChange = {(e) => this.handleInput(e)}
            />
        )   
    }

    renderResult(entriesString) {
        return (
            <Result
                entriesString = {entriesString}
            />
        )
    }

    render() {
        const entries = this.state.entriesString;

        return (
        <div className = "calculator">
            {this.renderScreen(entries)}
            {[...Array(10).keys()].map((num) => this.renderButton(num))}
            {['+','-','*','/'].map((operator) => this.renderButton(operator))}
            {this.renderResult(entries)}
        </div>)
    }


}

function CalculatorButton(props) {
    return (
        <button className="button" onClick={props.onClick}>
            {props.value}
        </button>
    );
}

function Screen(props) {
    const entriesString = props.entriesString;

    return (
        <input value = {entriesString} onChange={props.onChange}/>
    );
}


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Calculator />);