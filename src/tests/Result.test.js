import Result from '../components/Result.js'

const component = new Result();

test('test purely addition', () => {

    const result = component.processEntries('2+2')
    expect(result).toEqual(4)
})

test('test purely subtraction', () => {
    const component = new Result();
    const result = component.processEntries('2-2')
    expect(result).toEqual(0)
})

test('test purely multiplication', () => {
    const component = new Result();
    const result = component.processEntries('2*3')
    expect(result).toEqual(6)
})

test('test purely division (of integers)', () => {
    const component = new Result();
    const result = component.processEntries('10/5')
    expect(result).toEqual(2)
})

test('test purely division (of integers) with a decimal result', () => {
    const component = new Result();
    const result = component.processEntries('10/6')
    expect(result).toEqual(1.6666666666666667)
})

test('test long equation without parentheses', () => {
    const component = new Result();
    const result = component.processEntries('5*6/2+9-3')
    expect(result).toEqual(21)
})

test('test long equation without parentheses and operations not in PEMDAS order', () => {
    const component = new Result();
    const result = component.processEntries('3+10*9-10/5')
    expect(result).toEqual(91)
})

test('test long equation with parentheses and operations not in PEMDAS order', () => {
    const component = new Result();
    const result = component.processEntries('(3+10)*9-10/5')
    expect(result).toEqual(115)
})

test('test long equation with two sets of parentheses and operations not in PEMDAS order', () => {
    const component = new Result();
    const result = component.processEntries('(3+10)*(9-1)/5')
    expect(result).toEqual(20.8)
})

test('test long equation with one set of parentheses not at the start and operations not in PEMDAS order', () => {
    const component = new Result();
    const result = component.processEntries('3+10*(9-1)/5')
    expect(result).toEqual(19)
})

test('Allow negative results after simple subtraction', () => {
    const component = new Result();
    const result = component.processEntries('2-4')
    expect(result).toEqual(-2)
})

test('Allow negative results after simple multiplication', () => {
    const component = new Result();
    const result = component.processEntries('2*(2-4)')
    expect(result).toEqual(-4)
})

test('Multiply two negative numbers', () => {
    const component = new Result();
    const result = component.processEntries('(9-11)*2*(2-4)')
    expect(result).toEqual(8)
})

test('Distribute negative before parentheses', () => {
    const component = new Result();
    const result = component.processEntries('-(9+2)')
    expect(result).toEqual(-11)
})

test('Distribute preceding number before parentheses', () => {
    const component = new Result();
    const result = component.processEntries('10(9+2)')
    expect(result).toEqual(110)
})

test('Distribute preceding number before parentheses', () => {
    const component = new Result();
    const result = component.processEntries('10(9+2)')
    expect(result).toEqual(110)
})

test('Single set of parentheses resolve', () => {
    const component = new Result();
    const result = component.processEntries('(9+2)')
    expect(result).toEqual(11)
})

test('Multiple sets of parentheses resolve', () => {
    const component = new Result();
    const result = component.processEntries('((9+2)+3)')
    expect(result).toEqual(14)
})

test('If decimals work properly', () => {
    const component = new Result();
    const result = component.processEntries('(9.1 + 2.9) * 5.4 - 10.1(7.7 / 32.5)')
    expect(result).toEqual(62.407076923076936)
})

