// #todo

'use strict';

/**
 * reverses a string
 * @param {string} [toReverse=''] - the string to reverse
 * @returns {string} the reversed argument
 */

// -------- your solutions --------

//solution1 -- using recursion 
// eslint-disable-next-line no-unused-vars

function reverseString1(stringName1='') {
  if (stringName1 === '')
    return '';
  if (typeof stringName1 !== 'string' )
    throw Error();
  else
    return reverseString1(stringName1.substr(1)) + stringName1.charAt(0);
}
console.log(reverseString1("welcome"));



//solution2

function reverseString2 (stringName2 = '') { 
 
 if ("string" != typeof stringName2) 
 
 throw new Error("if it is not a string"); 
 
 return stringName2.split("").reverse().join("") 
 
 }



for (const solution of [secretSolution, reverseString1, reverseString2]) {
  // the main test suite for the function
  describe(solution.name + ': reverses a string', () => {
    it('default parameter is an empty string -> ""', () => {
      expect(solution()).toEqual('');
    });
    it('an empty string -> ""', () => {
      expect(solution('')).toEqual('');
    });
    it('a string with all capital letters', () => {
      expect(solution('ASDF')).toEqual('FDSA');
    });
    // write at least 5 more tests ...
    it('a string with number', () => {
      expect(solution('123456789')).toEqual('987654321');
    });
    it('a string', () => {
      expect(solution('Good Bye')).toEqual('eyB dooG');
    });
    it('it is not a string', () => {
      expect(() => solution([])).toThrow(Error);
    });
  });
}

// minified solution for testing your tests
// prettier-ignore
function secretSolution(a = '') { if ("string" != typeof a) throw new TypeError("toReverse is not a string"); return a.split("").reverse().join("") }
