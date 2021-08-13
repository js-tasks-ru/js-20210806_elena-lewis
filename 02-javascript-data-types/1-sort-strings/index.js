/**
 * sortStrings - sorts array of string by two criteria "asc" or "desc"
 * @param {string[]} arr - the array of strings
 * @param {string} [param="asc"] param - the sorting type "asc" or "desc"
 * @returns {string[]}
 */
export function sortStrings(arr, param = 'asc') {
  const compareArr = (a, b) => {
    if (param == 'asc') {
      return (a.localeCompare(b, ["ru", "en"],
        {sensitivity: 'variant', caseFirst: 'upper'}));
    }
    else {
      let x = a.localeCompare(b, ["ru", "en"],
        {sensitivity:'variant', caseFirst: 'upper'});
      return x = (x == 1) ? -1 : 1;
    }
    }
    const arrS = [...arr];
    arrS.sort(compareArr);
    return arrS;
}
