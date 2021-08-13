/**
 * pick - Creates an object composed of the picked object properties:
 * @param {object} obj - the source object
 * @param {...string} fields - the properties paths to pick
 * @returns {object} - returns the new object
 */
export const pick = (obj, ...fields) => {
  const newObj = {};
  const arrayObj = Object.entries(obj);

  for (let y = 0; y < fields.length; y++) {
    for (let i=0; i < arrayObj.length; i++){

      if(fields[y] == arrayObj[i][0]) {
        newObj[fields[y]] = arrayObj[i][1];
      }

      else continue;
    }

  }
  return newObj;

};
