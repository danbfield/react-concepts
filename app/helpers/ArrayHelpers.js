
/**
 * Converts and array of strings into a singular string with a space in between each "element".
 * 
 * @param String[] array 
 * @returns String
 */
export const convertArrayIntoString = (array) => 
    array.reduce((previousValue, currentValue) => `${previousValue} ${currentValue}`)
