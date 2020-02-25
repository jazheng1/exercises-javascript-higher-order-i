/**
 * Given a `collection` and a function `fn`, returns the **largest** element of `collection`
 * ranked by `fn`.
 *
 * For example, if `fn(string)` returns the length of `string` then `minBy` would return
 * the shortest string in the collection.
 *
 * @example
 * function strLength(str) {
 *   return str.length;
 * }
 *
 * minBy(['a', 'bb', 'cccc', 'ddd'], strLength); // => 'a'
 *
 * @param {any[]} collection - An array containing anything
 * @param {function} fn - A function that returns a `number`
 * @returns {any} The element `x` in `collection` with the smallest value of `fn(x)`.
 */
function minBy(collection, fn) {
  // This is your job. :)
  let first = fn(collection[0]);
  let word = collection[0];
  for (let item of collection) {
    if (fn(item) < first) {
      first = fn(item )
      word = item;
    }
  }
  return word;
}

function strLength(str) {
  return str.length;
}

if (require.main === module) {
  console.log('Running sanity checks for minBy:');
  console.log(minBy(['a', 'bb', 'ccc', 'dddd'], strLength));
  console.log(minBy(['aaaaa', 'bb', 'ccc', 'dddd'], strLength));
  // Add your own sanity checks here.
  // How else will you be sure your code does what you think it does?
  // How can you be sure it's returning the FIRST thing it finds? Does it matter?
}

module.exports = minBy;
