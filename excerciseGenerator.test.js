import { expect } from 'chai'
import createExercise, { randomFromArray } from './exerciseGenerator'

describe('randomFromArray', () => {
  it('returns undefined for an empty array', () => {
    expect(randomFromArray([])).to.be.undefined
  })

  it('returns the single element of a one-element array', () => {
    const element = 1
    expect(randomFromArray([element])).to.equal(element)
  })

  it('always returns an element from the array', () => {
    const arr = [1, 2, 3, 4, 5]

    for (let i = 0; i < 10; i++) {
      const randomElement = randomFromArray(arr)
      expect(arr).to.include(randomElement)
    }
  })
})

describe('excerciseGenerator', () => {
  it('works', () => {
    expect(createExercise).not.to.be.undefined
  })
})