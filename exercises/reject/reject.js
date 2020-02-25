/**
 * Iterates over `collection`, constructing and returning a new array containing
 * the elements of `collection` for which `predicate` returns `false`.
 *
 * This is the opposite of `select`.
 *
 * @example
 * reject([1, 2, 3, 4, 5, 6], isEven); // => [1, 3, 5]
 *
 * @param {any[]} collection - An array containing anything
 * @param {function} predicate - A function that returns `true` or `false`
 * @returns {array} A new array containing the elements of `collection`
 *   for which `predicate` returns `false`
 */
function reject(collection, predicate) {
  // See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push

  let results = [];

  for (let item of collection) {
    // This is your job. :)
    if(!predicate(item)) {
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
  console.log('Running sanity checks for reject:');
  console.log('The items that do not fulfill the isEven are:', reject([1,2,3,4,5,6], isEven));
  console.log('The items that do not fulfill the isOdd are:', reject([1,2,3,4,5,6], isOdd));
  // Add your own sanity checks here.
  // How else will you be sure your code does what you think it does?
}

module.exports = reject;
