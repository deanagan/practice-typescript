import { romanToInteger } from '../src/roman-to-integer'
import { describe, it } from 'mocha'
import { expect } from 'chai'

interface TestParameters {
  input: string
  expected: number
}

const testParameters: TestParameters[] = [
  { input: 'III', expected: 3 },
  { input: 'IV', expected: 4 },
  { input: 'MCMXCIV', expected: 1994 },
]

describe('Convert Roman To Integer Test', () => {
  testParameters.forEach((tp: TestParameters) => {
    it(`Should return "${tp.expected}" when "${tp.input}" is inputted`, () => {
      expect(romanToInteger(tp.input)).to.be.equal(tp.expected)
    })
  })
})
