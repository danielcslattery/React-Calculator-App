import { useEffect, useState } from "react"

export function Memory(props) {
    const [selected, setSelected] = useState(false)

    useEffect(() => {
        setSelected(props.memory === props.entriesString.replace(/\s+/g, ''))
    }, [props.memory, props.entriesString])

    return (
        <button 
            data-testid = 'memory' 
            className = {selected ? 'selectedmemory' : 'memorybutton'}
            onClick={props.onClick}
        >
            {props.memory}
        </button>
    )
}

export function SaveMemory(props) {
    const cleanedEntriesString = props.entriesString.replace(/\s+/g, '')
    const memoryAlreadySaved = props.memories.filter(mem => mem === cleanedEntriesString).length > 0

    return (
        <button 
            data-testid = 'savememory' 
            disabled = {!props.entriesString || memoryAlreadySaved}
            onClick={props.onClick}
        >
            Save Equation
        </button>
    )
}
