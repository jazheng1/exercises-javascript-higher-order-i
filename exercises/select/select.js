/**
 * Given an array and a function, returns a new array containing the elements from
 * the input array for which the function returns true.
 *
 * @example
 * select([1, 2, 3, 4, 5, 6], isEven); // => [2, 4, 6]
 *
 * @param {any[]} collection - An array containing anything
 * @param {function} predicate - A function that returns `true` or `false`
 * @returns {array} A new array containing the elements of `collection`
 *   for which `predicate` returns `true`
 */
function select(collection, predicate) {
  // See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push

  let results = [];

  for (let item of collection) {
    // This is your job. :)
    if(predicate(item)) {
      results.push(item);
    }
  }
  return results;
}

function isEven(num) {
  return num % 2 === 0;
}

function isOdd(num) {
  return num % 2 !== 0;
}


if (require.main === module) {
  console.log('Running sanity checks for select:');
  console.log('The items that do fulfill isEven are:', select([1,2,3,4,5,6], isEven));
  console.log('The items that do fulfill isOdd are:', select([1,2,3,4,5,6], isOdd));
  // Add your own sanity checks here.
  // How else will you be sure your code does what you think it does?
}

module.exports = select;
