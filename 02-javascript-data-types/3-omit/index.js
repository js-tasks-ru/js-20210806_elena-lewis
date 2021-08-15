/**
 * omit - creates an object composed of enumerable property fields
 * @param {object} obj - the source object
 * @param {...string} fields - the properties paths to omit
 * @returns {object} - returns the new object
 */
export const omit = (obj, ...fields) => {
  const newObj = {};
  const arrayObj = Object.keys(obj);

  for (let value of arrayObj) {
    if (!fields.includes(value) === true){
      newObj[value] = obj[value];
    }

    continue;
  }

  return newObj;

};
