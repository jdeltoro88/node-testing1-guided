const Car = require('./car')
// unit tests test the smallest parts of a program
// functions, classes or modules with functions
// external libraries are mocked

describe('Car class', () => {
  let focus
  beforeEach(() => {
    // migrate db
    // seed db
    focus = new Car('ford', 'focus')
  })
  // beforeAll, afterAll, afterEach
  it('exists', () => {
    expect(Car).toBeDefined()
  })
  it('we can make a car with it', () => {
    expect(focus).toBeInstanceOf(Car)
  })
  it('instances of cars have a model prop', () => {
    expect(focus).toHaveProperty('model')
    expect(focus.model).toBeDefined()
  })
  it('cars can be initialized with a make and model', () => {
    // we can instantiate a car passing make and model
    // and that gives us an object with same make and model
    expect(focus).toHaveProperty('make', 'ford')
    expect(focus).toHaveProperty('model', 'focus')
    expect(focus.make).toBe('ford')

    // expect(focus).toEqual({ make: 'ford', model: 'focus' })
    expect(focus).toMatchObject({ model: 'focus', make: 'ford' })
  })
  it.only('has an odometer initialized at zero for all cars', () => {
    expect(focus.odometer).toBe(0)
  })
})

function addsOne(num) {
  return num + 1
}

function greets(name) {
  return `Hello ${name}`
}

function objectify(name) {
  return { name }
}

describe('intro to jest', () => { // to organize
  test('returns a new value', () => { // test
    expect(true).toBe(true) // assertion
    expect(true).not.toBe(false) // assertion
  })

  it('adds one to the input number', () => {
    const expectedResult = 3
    const actualResult = addsOne(2)
    expect(actualResult).toBe(expectedResult)
    // toBe works with scalar values (not arrays not objects)
  })

  it('returns a string with a greet', () => {
    expect(greets('Remy')).toBe('Hello Remy')
    expect(greets('Remy')).toMatch(/hello/i)
  })

  it('returns an object with the name', () => {
    expect(objectify('Jon')).toEqual({ name: 'Jon' })
  })
})
