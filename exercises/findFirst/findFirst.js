/**
 * Iterates over the elements of `collection`, returning the first element
 * for which `predicate` returns `true`. If no such element is found, returns
 * `undefined`.
 *
 * @example
 * findFirst([1, 2, 3, 4, 5, 6], isEven); // => 2
 *
 *
 * @param {any[]} collection - An array containing anything
 * @param {function} predicate - A function that returns `true` or `false`
 * @returns {any} The first element of `collection` for which `predicate`
 *  returns `true` or `undefined` if nothing is found.
 */
function findFirst(collection, fn) {
  // This is your job. :)
  // Remember, you will return as soon as JavaScript
  // sees the `return` keyword. That means you can return
  // without having to iterate over the entire list.
  for (let item of collection) {
    if (fn(item)) {
      return item;
    }
  }
}

function isEven(num) {
  return num % 2 === 0;
}

function isOdd(num) {
  return num % 2 !== 0;
}

if (require.main === module) {
  console.log('Running sanity checks for findFirst:');
  console.log('The first item hat satisfy the rule is:', findFirst([1,2,3,4,5,6], isEven));
  console.log('The first item hat satisfy the rule is:', findFirst([2,4,5,6], isOdd));
  // Add your own sanity checks here.
  // How else will you be sure your code does what you think it does?
  // How can you be sure it's returning the FIRST thing it finds? Does it matter?
}

module.exports = findFirst;
