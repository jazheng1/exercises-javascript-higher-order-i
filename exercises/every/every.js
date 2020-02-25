/**
 * Checks if `predicate` returns `true` for **every** element of `collection`.
 *
 * @example
 * every([1, 2, 3, 4, 5, 6], isEven); // => false
 * every([2, 4, 6, 8], isEven); // => true
 *
 *
 * @param {any[]} collection - An array containing anything
 * @param {function} predicate - A function that returns `true` or `false`
 * @returns {boolean} Returns `true` if `predicate` is `true` for every
 *  element of `collection` and `false` otherwise.
 */
function every(collection, predicate) {
  // This is your job. :)
  let total  = 0;
  for (item of collection) {
    if (predicate(item)) {
      total += 1;
    }
  }

  if (total === 0) {
    return false;
  }
  return total === collection.length;
}

function isEven(num) {
  return (num % 2) === 0;
}

function isOdd(num) {
return (num % 2) !== 0;
}

if (require.main === module) {
  console.log('Running sanity checks for every:');
  console.log('Is every element in the array even?', every([1, 2, 3, 4, 5, 6], isEven));
  console.log('Is every element in the array even?', every([2, 4, 6], isEven));
  console.log('Is every element in the array odd?', every([1, 2, 3, 4, 5, 6], isOdd));
  // Add your own sanity checks here.
  // How else will you be sure your code does what you think it does?
}

module.exports = every;
