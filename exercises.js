/* #doubleArray
 *
 * Takes in an array of numbers and returns an array with each element doubled
 *
 * @param {Array} // [1,2,3]
 * @return {Array} // [2,4,6]
 */

function doubleArray(arr) {
  var multiplyArray = [];
  for (var i = 0; i < arr.length; i++) {
    multiplyArray.push(arr[i] * 2);
  } return multiplyArray;
};

/* #sumArrays
 *
 * Takes in two arrays of numbers and returns the sum of both arrays.
 *
 * @param {Array}
 * @param {Array}
 * @return {Bool}
 */
function sumArrays(arr1, arr2) {
  var newArray = [];
  for (var i = 0; i < arr1.length; i++) {
    newArray.push(arr1[i]);
  };
  var newArray2 = [];
  for (var j = 0; j < arr2.length; j++) {
    newArray2.push(arr2[j]);
  };
  return newArray.reduce(fart) + newArray2.reduce(fart)
  function fart(value, total) {
    return value + total;
  }
};

/* #stringCount
 *
 * Takes in a string and returns the length of the string.
 *
 * @param {String}
 * @return {Number}
 */
function stringCount(str) {
  return str.length;
};

/* #arrayLength
 *
 * Takes in an array and returns the length of the array.
 *
 * @param {Array}
 * @return {Number}
 */
function arrayLength(arr) {
  return arr.length;
};

/* #countAll
 *
 * Takes in an array and returns the sum of all numbers in the array.
 *
 * @param {Array}
 * @return {Number}
 */
function countAll(arr) {
  return arr.reduce(addMeUp);
  function addMeUp(value, total) {
    return value + total
  }
};

/* #countStrings
 *
 * Takes in an array of strings and returns an array of string lengths.
 *
 * @param {Array}
 * @return {Array}
 */
function countStrings(arr) {
  var emptyArray = [];
  for (var i = 0; i < arr.length; i++) {
    emptyArray.push(arr[i].length);
  } return (emptyArray);
};

/* #countAllStrings
 *
 * Takes in an array of strings and returns the sum of all string lengths.
 *
 * @param {String}
 * @return {Number}
 */
function countAllStrings(str) {
  var stringLength = [];
  for (var i = 0; i < str.length; i++) {
    stringLength.push(str[i].length);
  } return stringLength.reduce(farts);
  function farts(value, total) {
    return value + total
  }
};

/* #convertToArray
 *
 * Takes in an object and returns all the values of the object in an array.
 *
 * @param {Object}
 * @return {Array}
 */
function convertToArray(obj) {
  return Object.values(obj);
};

/* #objectSize
 *
 * Takes in an object and returns the number of key value pairs in the object.
 *
 * @param {Object}
 * @return {Number}
 */
function objectSize(obj) {
  return Object.keys(obj).length;
};

/* #createZeroFilledArray
 *
 * Takes in a number and fills an array with that number of zeroes.
 *
 * @param {Number}
 * @return {Zero}
 */
function createZeroFilledArray(num) {
  var fillWithZeros = []
  //fillWithZeros.fill(0,0,num);
  for (var i = 0; i < num; i++) {
    fillWithZeros.push(0);
  } return fillWithZeros;
};

/* #poppedArray
 *
 * Takes in an array of numbers and returns an array of all but the last element of the array.
 *
 * @param {Array}
 * @return {Array}
 */
function poppedArray(arr) {
  var popOff = arr.pop()
  return arr;
};

/* #splitString
 *
 * Takes in a string and returns an array of each individual character in the string.
 *
 * @param {String}
 * @return {Array}
 */
function splitString(str) {
  var newArray = str.split("");
  return newArray;
};

/* #lengthOfLast
 *
 * Takes in an array of strings and returns the length of the last string.
 *
 * @param {String}
 * @return {Number}
 */
function lengthOfLast(str) {
  var stringLength = str.pop();
  return stringLength.length;
};

/* #sumBelowTen
 *
 * Takes in an array of numbers and returns the sum of all numbers below 10.
 *
 * @param {Array}
 * @return {Number}
 */
function sumBelowTen(arr) {
  var numCount = [];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] < 10) {
      numCount.push(arr[i])
    }
  };
  return numCount.reduce(farty);
  function farty(value, total) {
    return value + total;
  }
};

/* #moreThanTenLetters
 *
 * Takes in an array of strings and returns the amount of elements that have more than ten letters.
 *
 * @param {String}
 * @return {Number}
 */
function moreThanTenLetters(str) {
  var bigWords = [];
  for (var i = 0; i < str.length; i++) {
    if (str[i].length > 10) {
      bigWords.push(str[i])
    }
  };
  return bigWords.length;
};

/* #multiplyAll
 *
 * Takes in an array of numbers and returns the product of all elements.
 *
 * @param {Array}
 * @return {Number}
 */
function multiplyAll(arr) {
  return arr.reduce(product);
  function product(value, total) {
    return value * total
  }
};

/* #sumAllPositive
 *
 * Takes in an array of numbers and returns the sum of all non-negative numbers.
 *
 * @param {String}
 * @return {Number}
 */
function sumAllPositive(str) {
  var positiveNumbers = [];
  for (var i = 0; i < str.length; i++) {
    if (str[i] > 0) {
      positiveNumbers.push(str[i]);
    }
  };
  function sum(value, total) {
    return value + total
  };
  return positiveNumbers.reduce(sum);
};

/* #stringCountBelowThree
 *
 * Takes in an array of strings and returns the amount of strings that have three characters or less.
 *
 * @param {Array}
 * @return {Number}
 */
function stringCountBelowThree(arr) {
  var threeLetters = [];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i].length <= 3) {
      threeLetters.push(arr[i])
    }
  }
  return threeLetters.length
};
/* #countObjects
 *
 * Takes in an array of objects and returns the amount of objects in the array.
 *
 * @param {Array}
 * @return {Number}
 */
function countObjects(arr) {
  return arr.length
};
/* #getObjectKeys
 *
 * Takes in an object and returns an array of all the object's keys.
 *
 * @param {Object}
 * @return {Array}
 */
function getObjectKeys(obj) {
  return Object.keys(obj);
};

/* #getObjectValues
 *
 * Takes in an object and returns an array of all the object's values.
 *
 * @param {Object}
 * @return {Array}
 */
function getObjectValues(obj) {
  return Object.values(obj);
};
/* #makeObject
 *
 * Takes in two arguments 'key' and 'value' and returns a single key-value pair in an object.
 *
 * @param {String}
 * @param {String}
 * @return {Object}
 */
function makeObject(str1, str2) {
  var newObj = {};
  newObj[str1] = str2;
  return newObj;
};

/* #makeObjectReverse
 *
 * Takes in two arguments 'value' and 'key' and returns a single key-value pair in an object.
 *
 * @param {String}
 * @param {String}
 * @return {obj}
 */
function makeObjectReverse(str1, str2) {
  var revObj = {};
  revObj[str2] = str1
  return revObj;
};

/* #tupleToObject
 *
 * Takes in a tuple (an array with two elements) and returns it into a single key-value pair in an object.
 *
 * @param {Array}
 * @return {Object}
 */
function tupleToObject(arr) {
  var tupObj = {};
  tupObj[arr[0]] = arr[1];
  return tupObj;
};

/* #tupleToObjectReverse
 *
 * Takes in a tuple and returns it into a single key-value pair with second tuple element as key and first tuple element as value.
 *
 * @param {Array}
 * @return {Object}
 */
function tupleToObjectReverse(arr) {
  var revTupObj = {};
  revTupObj[arr[1]] = arr[0];
  return revTupObj;
};

/* #strToKeys
 *
 * Takes in an array of strings and returns an object with all string elements as the object's keys and all values set to 0.
 *
 * @param {Array}
 * @return {Object}
 */
function strToKeys(arr) {
  let objKeys = {};
  for (let i = 0; i < arr.length; i++) {
    objKeys[arr[i]] = 0;
  }
  return objKeys;
};

/* #getValues
 *
 * Takes in an object and returns an array of all the object's values.
 *
 * @param {Object}
 * @return {Array}
 */
function getValues(obj) {
  let valueArray = [];
  for (const prop in obj) {
    valueArray.push(obj[prop]);
  }
  return valueArray;
};

/* #getKeys
 *
 * Takes in an object and returns an array of the object's keys.
 *
 * @param {Object}
 * @return {Array}
 */
function getKeys(obj) {
  let objKeyArray = Object.keys(obj);
  return objKeyArray;
};

/* #objectToArray
 *
 * Takes in an object and returns an array of tuples where each tuple has 
 * the object's key as element 0 and object's value as element 1.
 *
 * @param {Object}
 * @return {Array}
 */
function objectToArray(obj) {
  let tuple = [];
console.log(Object.keys(obj))
console.log(Object.values(obj))
};

/* #arrayToObject
 *
 * takes in an array and returns an object with keys set to the elements in the array and
 * all values set to false.
 *
 * @param {Array}
 * @return {Object}
 */
function arrayToObject(arr) {
};

/* #arraysToObject
 *
 * takes in two arrays, the first array elements will be keys of an object and second array elements 
 * will be values of an object.
 *
 * @param {Array}
 * @param {Array}
 * @return {Object}
 */
var arraysToObject;

/* #objectsToTuples
 *
 * takes in two objects and returns an array of tuples of the key value pairs of all objects in both arrays.
 *
 * @param {Object}
 * @param {Object}
 * @return {Array}
 */
var objectsToTuples;

/* #mapArrayValues
 *
 * takes in an array of strings and returns an object with keys of the array elements and values all set to True.
 *
 * @param {Array}
 * @return {Object}
 */
var mapArrayValues;

/* #mapStringCounts
 *
 * takes in an array of strings and returns an object with key names set to the elements in the array.
 * If the character count of the key name is greater than or equal to 5 set the value to true,
 * otherwise set to false.
 *
 * @param {Array}
 * @return {Object}
 */
var mapStringCounts;

/* #arrayToObjectNums
 *
 * takes in an array of numbers and returns an object with keys set to 
 * each element of the array and all values set to true.
 *
 * @param {Array}
 * @return {Object}
 */
var arrayToObjectNums;

/* #stringToKeys
 *
 * takes in a string and returns an object whos keys are each letter of the string and all values set to true.
 * 
 * @param {String}
 * @return {Object}
 */
var stringToKeys;

/* #charCountMap
 *
 * takes in an array of strings and returns an object with keys set to each element of the array 
 * and values set to the character count of each key name.
 *
 * @param {Array}
 * @return {Object}
 */
var charCountMap;

/* #frequencyMap
 *
 * takes in an array of strings and returns an object with the string as the key and the number of occurences as the value.
 *
 * @param {String}
 * @return {Bool}
 */
function frequencyMap(str) {


};

/* #tupleConvertToObject
 *
 * takes in an array of tuples and and returns an object whos keys are 
 * the first element of the tuples and values are second element of the tuples.
 *
 * @param {String}
 * @return {Bool}
 */
var tupleConvertToObject;


module.exports = {
  doubleArray: doubleArray,
  sumArrays: sumArrays,
  stringCount: stringCount,
  arrayLength: arrayLength,
  countAll: countAll,
  countStrings: countStrings,
  countAllStrings: countAllStrings,
  convertToArray: convertToArray,
  objectSize: objectSize,
  createZeroFilledArray: createZeroFilledArray,
  poppedArray: poppedArray,
  splitString: splitString,
  lengthOfLast: lengthOfLast,
  sumBelowTen: sumBelowTen,
  moreThanTenLetters: moreThanTenLetters,
  multiplyAll: multiplyAll,
  sumAllPositive: sumAllPositive,
  stringCountBelowThree: stringCountBelowThree,
  countObjects: countObjects,
  getObjectKeys: getObjectKeys,
  getObjectValues: getObjectValues,
  makeObject: makeObject,
  makeObjectReverse: makeObjectReverse,
  tupleToObject: tupleToObject,
  tupleToObjectReverse: tupleToObjectReverse,
  strToKeys: strToKeys,
  getValues: getValues,
  getKeys: getKeys,
  objectToArray: objectToArray,
  arrayToObject: arrayToObject,
  arraysToObject: arraysToObject,
  objectsToTuples: objectsToTuples,
  mapArrayValues: mapArrayValues,
  mapStringCounts: mapStringCounts,
  arrayToObjectNums: arrayToObjectNums,
  stringToKeys: stringToKeys,
  charCountMap: charCountMap,
  frequencyMap: frequencyMap,
  tupleConvertToObject: tupleConvertToObject
}
