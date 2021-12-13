
const { expect } = require('@jest/globals')
const { test } = require('jest-circus')
const { describe } = require('yargs')
const newFunctions =  require('./functions.js')


test('testing returnTwo function', () => {
    expect(newFunctions.returnTwo()).toBe(2)
})

test('test greeting function', () => {
    expect(newFunctions.greeting('James')).toBe('Hello, James.')
    expect(newFunctions.greeting('Jill')).toBe('Hello, Jill.')
})

test('testing add function', () => {
    expect(newFunctions.add(1,2)).toBe(3)
    expect(newFunctions.add(5,9)).toBe(14)
})

describe('All the other math operator functions', () => {
    test('testing math operators', () => {
    expect(newFunctions.multiply(2,2)).toBe(4)
    })
    test('testing divide function', () => {
    expect(newFunctions.divide(10,5)).toBe(2)
    })
    test('testing subtract function', () => {
    expect(newFunctions.subtract(2,2)).toBe(0)
    })
    
      
})

