/**
 * Given a `collection` and a function `fn`, returns the **largest** element of `collection`
 * ranked by `fn`.
 *
 * For example, if `fn(string)` returns the length of `string` then `maxBy` would return
 * the longest string in the collection.
 *
 * @example
 * function strLength(str) {
 *   return str.length;
 * }
 *
 * maxBy(['a', 'bb', 'cccc', 'ddd'], strLength); // => 'cccc'
 *
 * @param {any[]} collection - An array containing anything
 * @param {function} fn - A function that returns a `number`
 * @returns {any} The element `x` in `collection` with the largest value of `fn(x)`.
 */
function maxBy(collection, predicate) {
  // This is your job. :)
  let first = predicate(collection[0]);
  let word = collection[0];
  for (let item of collection) {
    if (predicate(item) > first) {
      word = item;
    }
  }
  return word;
}

function strLength(str) {
  return str.length;
}

if (require.main === module) {
  console.log('Running sanity checks for maxBy:');
  console.log(maxBy(['a', 'bb', 'ccc', 'dddd'], strLength));
  console.log(maxBy(['aaaaa', 'bb', 'ccc', 'dddd'], strLength));
  // Add your own sanity checks here.
  // How else will you be sure your code does what you think it does?
  // How can you be sure it's returning the FIRST thing it finds? Does it matter?
}

module.exports = maxBy;
