const Car = require('./car')

// unit tests test the smallest parts of a program
// functions, classes or modules with functions
// external libraries are mocked

describe('intro to jest', () => { // to organize
  test('returns a new value', () => { // test
    expect(true).toBe(true) // assertion
    expect(true).not.toBe(false) // assertion
  })
})
