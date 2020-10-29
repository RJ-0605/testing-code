const average = require('./index').average;
const palindrome = require('./index.js').palindrome;

describe('average', () => {

  test('of one value is the value itself', () => {
    expect(average([1])).toBe(1)
  })

  test('of many is calculated right', () => {
    expect(average([1, 2, 3, 4, 5, 6])).toBe(3.5)
  })

  test('of empty array is zero', () => {
    expect(average([])).toBe(0)
  })

  test('array should not have strings', () => {
    expect(average([1, 2, 3, 4, 5, 6, 'string'])).toBe(3);
  })
})


describe('palindrome', () => {

  test('palindrome of a', () => {
    const result = palindrome('a');
    expect(result).toBe('a');  //result === a
  })

  test('palindrome of react', () => {
    const result = palindrome('react');

    expect(result).toBe('tcaer'); //result === tcaer
  })

  test('palindrome of releveler', () => {
    const result = palindrome('releveler')

    expect(result).toBe('releveler');   //result === 'releveler
  })

})
