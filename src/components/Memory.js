export function Memory(props) {
    return (
        <button data-testid = 'memory' onClick={props.onClick}>
            {props.memory}
        </button>
    )
}

export function SaveMemory(props) {
    return (
        <button data-testid = 'savememory' onClick={props.onClick}>
            Save Equation
        </button>
    )
}
