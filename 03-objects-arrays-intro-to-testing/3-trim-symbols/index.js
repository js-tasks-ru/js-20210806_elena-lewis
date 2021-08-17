/**
 * trimSymbols - removes consecutive identical symbols if they quantity bigger that size
 * @param {string} string - the initial string
 * @param {number} size - the allowed size of consecutive identical symbols
 * @returns {string} - the new string without extra symbols according passed size
 */
export function trimSymbols(string, size) {
  if (string.length && size) {
    const arrayString = string.split('');
    let a = string.charAt(0);
    let x = arrayString[0];
    let count = 1;

    for (let i = 1; i < arrayString.length; i++) {

      if (arrayString[i] === x) {
        count++;
        a = count <= size ? a + arrayString[i] : a;
      } else {
        x = arrayString[i];
        a = a + arrayString[i];
        count = 1;
      }
    }

    return a;
  }
  else if (string.length===0 || size === 0) {
    return '';
  }
   else {
     return string;
  }
  }
