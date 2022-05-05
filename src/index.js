import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Result} from './components/Result.js'

class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            entriesString: "",
            memories: ['2+2','4-9'],
        };
    }

    mathButtonClick(val) {
        // Passing a function instead of object to setState so that the Screen element calls the updated version
        this.setState((state) => {
            return {entriesString: state.entriesString + val};
        })
    }

    memoryClick(memory){
        this.setState(() => {
            console.log(memory)
            return {entriesString: memory};
        })
    }

    saveMemoryClick(currentInput){
        this.setState((state) => {
            return {memories: state.memories.concat(currentInput) };
        })
    }

    handleInput(event) {

        this.setState(() => {
            return {entriesString: event.target.value}
        });
    }

    renderButton(val) {
        return (
            <MathButton
                value={val}
                //mathButtonClick() needs to be passed anonymously or else it will trigger when MathButton is rendered
                onClick={() => this.mathButtonClick(val)}
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

    renderMemory(memory) {
        return(
            <Memory
                memory = {memory}
                onClick = {() => this.memoryClick(memory)}
            />
        )
    }

    render() {
        const entriesString = this.state.entriesString;
        const memories = this.state.memories;

        return (
        <div className = "calculator">
            {this.renderScreen(entriesString)}
            {[...Array(10).keys()].map((num) => this.renderButton(num))}
            {['+','-','*','/'].map((operator) => this.renderButton(operator))}
            {this.renderResult(entriesString)}
            {memories.map((mem) => this.renderMemory(mem))}
            {<SaveMemory onClick={() => this.saveMemoryClick(entriesString)}/>}
        </div>)
    }


}

function MathButton(props) {
    return (
        <button className="button" onClick={props.onClick}>
            {props.value}
        </button>
    );
}

function Memory(props) {
    return (
        <button onClick={props.onClick}>
            {props.memory}
        </button>
    )
}

function SaveMemory(props) {
    return (
        <button onClick={props.onClick}>
            Save Equation
        </button>
    )
}

function Screen(props) {
    let entriesString = props.entriesString;
    entriesString = entriesString.replace(/([+/*])[+/*]/g, '$1')
    entriesString = entriesString.replace(/([-])\1{2}/g, '--')

    return (
        <input value = {entriesString} onChange={props.onChange}/>
    );
}


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Calculator />);