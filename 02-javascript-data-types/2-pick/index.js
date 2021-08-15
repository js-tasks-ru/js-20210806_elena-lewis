/**
 * pick - Creates an object composed of the picked object properties:
 * @param {object} obj - the source object
 * @param {...string} fields - the properties paths to pick
 * @returns {object} - returns the new object
 */
export const pick = (obj, ...fields) => {
  const newObj = {};
  const arrayObj = Object.keys(obj);

  for (let value of arrayObj) {
    if (fields.includes(value) === true){
      newObj[value] = obj[value];
    }

    continue;
  }

  return newObj;

};
