/**
 * invertObj - should swap object keys and values
 * @param {object} obj - the initial object
 * @returns {object | undefined} - returns new object or undefined if nothing did't pass
 */
export function invertObj(obj) {


  if(obj){
    const arrayKey = Object.keys(obj);
    const arrayVal = Object.values(obj);
    const objNew = {};

    for (let i = 0; i < arrayKey.length; i++) {
      objNew[arrayVal[i]] = arrayKey[i];
    }

    return objNew;
  }

  return obj;

}
