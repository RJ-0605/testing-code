const palindrome = (string) => {
  return string
    .split('')
    .reverse()
    .join('');
}

/**
 * 
 * @param {Number} array 
 * @returns Number
 */
const average = (array) => {

  if (array.length === 0) {
    return 0
  }

  const reducer = (sum, item) => {
    if (typeof item === 'string') {
      return sum + 0;
    }
    return sum + item;
  }

  return array.reduce(reducer, 0) / array.length;
}


module.exports = {
  palindrome,
  average,
};
