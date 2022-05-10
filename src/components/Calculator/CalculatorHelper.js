

function mathButtonClick(val, entriesString, setEntriesString) {
    setEntriesString(entriesString + val)
}

function memoryClick(memory, setEntriesString){
    setEntriesString(memory)
}

function saveMemoryClick(currentInput, memories, setMemories){
    setMemories(memories.concat(currentInput.replace(/\s+/g, '')))
}

function handleInput(event, setEntriesString) {
    setEntriesString(event.target.value)
}

export {mathButtonClick, memoryClick, saveMemoryClick, handleInput}