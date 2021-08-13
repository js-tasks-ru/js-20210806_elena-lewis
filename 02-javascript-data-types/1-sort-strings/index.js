/**
 * sortStrings - sorts array of string by two criteria "asc" or "desc"
 * @param {string[]} arr - the array of strings
 * @param {string} [param="asc"] param - the sorting type "asc" or "desc"
 * @returns {string[]}
 */
export function sortStrings(arr, param = 'asc') {
  const compareArray = (a, b) => {
      return (a.localeCompare(b, ["ru", "en"],
        {sensitivity:'variant', caseFirst: 'upper'}));
    }
  if(param == 'asc'){
    const arrS = [...arr];
    arrS.sort(compareArray);
    return arrS;
  }
  else {
    const arrS = [...arr];
    arrS.sort(compareArray).reverse();
    return arrS;
  }
}
