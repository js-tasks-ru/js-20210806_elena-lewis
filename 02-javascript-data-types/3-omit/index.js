/**
 * omit - creates an object composed of enumerable property fields
 * @param {object} obj - the source object
 * @param {...string} fields - the properties paths to omit
 * @returns {object} - returns the new object
 */
export const omit = (obj, ...fields) => {
  const newObj = obj;
  const arrayObj = Object.entries(obj);

  for (let y = 0; y < fields.length; y++) {
    for (let i=0; i < arrayObj.length; i++){

      if(fields[y] == arrayObj[i][0]) {
        delete newObj[fields[y]];
      }

      else continue;
    }

  }
  return newObj;

};
