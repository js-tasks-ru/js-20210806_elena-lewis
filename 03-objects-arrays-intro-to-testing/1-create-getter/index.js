/**
 * createGetter - creates function getter which allows select value from object
 * @param {string} path - the strings path separated by dot
 * @returns {function} - function-getter which allow get value from object by set path
 */
export function createGetter(path) {
  return function createGet(obj) {
    const array = path.split(".");
    let objCopy = obj;
    let i = 0;
    do {
      objCopy = objCopy[array[i]];
      i++;
    }
    while (i < array.length&&objCopy);

    return objCopy;

  }
}


