import Screen from "../components/Screen";

test('if two + signs cannot be congruent', () => {
    let mockProps = {
        entriesString: '2++'
    }
    const screen = new Screen(mockProps)
    expect(screen.props.value).toEqual('2+')
})

test('if two -- signs can be congruent', () => {
    let mockProps = {
        entriesString: '2--'
    }
    const screen = new Screen(mockProps)
    expect(screen.props.value).toEqual('2--')
})

test('if -+ cannot go together', () => {
    let mockProps = {
        entriesString: '2-+'
    }
    const screen = new Screen(mockProps)
    expect(screen.props.value).toEqual('2-')
})