const Car = require('./car')

// unit tests test the smallest parts of a program
// functions, classes or modules with functions
// external libraries are mocked

function addsOne(num) {
  return num + 1
}

function greets(name) {
  return `Hello ${name}`
}

describe('intro to jest', () => { // to organize
  test('returns a new value', () => { // test
    expect(true).toBe(true) // assertion
    expect(true).not.toBe(false) // assertion
  })

  it('adds one to the input number', () => {
    const expectedResult = 3
    const actualResult = addsOne(2)
    expect(actualResult).toBe(expectedResult) // scalar values (not arr not objects)
  })

  it('returns a string with a greet', () => {
    expect(greets('Remy')).toBe('Hello Remy')
    expect(greets('Remy')).toMatch()
  })
})
