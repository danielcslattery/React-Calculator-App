function mathButtonClick(val) {
    // Passing a function instead of object to setState so that the Screen element calls the updated version
    this.setState((state) => {
        return {entriesString: state.entriesString + val};
    })
}

function memoryClick(memory){
    this.setState(() => {
        console.log(memory)
        return {entriesString: memory};
    })
}

function saveMemoryClick(currentInput){
    this.setState((state) => {
        return {memories: state.memories.concat(currentInput.replace(/\s+/g, '')) };
    })
}

function handleInput(event) {

    this.setState(() => {
        return {entriesString: event.target.value}
    });
}

export {mathButtonClick, memoryClick, saveMemoryClick, handleInput}