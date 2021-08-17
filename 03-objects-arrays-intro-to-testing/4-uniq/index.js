/**
 * uniq - returns array of uniq values:
 * @param {*[]} arr - the array of primitive values
 * @returns {*[]} - the new array with uniq values
 */
export function uniq(arr) {

  let set = new Set();
  const arrSet = [];

  if (arr) {
    for (let i = 0; i < arr.length; i++) {
      set.add(arr[i]);
    }

    set.forEach((value, valueAgain, set) => {
      arrSet.push(value);
    });
  }

     return arrSet;

}
