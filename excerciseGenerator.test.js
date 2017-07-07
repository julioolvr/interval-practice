import { expect } from 'chai'
import createExercise, {
  randomFromArray,
  distanceInArray
} from './exerciseGenerator'

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

describe('distanceInArray', () => {
  it('counts the amount in between if the second element is after the first', () => {
    const arr = ['A', 'B', 'C', 'D', 'E']
    expect(distanceInArray(arr, 'B', 'D')).to.equal(2)
  })

  it('counts all the way around if the second element is before the first', () => {
    const arr = ['A', 'B', 'C', 'D', 'E']
    expect(distanceInArray(arr, 'D', 'B')).to.equal(3)
  })
})

describe('excerciseGenerator', () => {
  it('works', () => {
    expect(createExercise).not.to.be.undefined
  })
})