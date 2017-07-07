import { expect } from 'chai'
import createExercise from './exerciseGenerator'

describe('excerciseGenerator', () => {
  it('works', () => {
    expect(createExercise).not.to.be.undefined
  })
})