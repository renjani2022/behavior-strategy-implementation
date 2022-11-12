// #todo

'use strict';

/**
 * builds an array counting down from `start` to 0
 * @param {number} [start=0] - the number to count down from
 *  start must be an integer that is greater than 0
 * @returns {number[]} an array of all numbers from `start` to 0
 */

// -------- your solutions --------

function countDown(start=0) {
let arr = [];

if (typeof(start) !== "number") {
throw new TypeError("it is not number");
}
  
if (start < 0) {
throw new Error();
}

for (let i = 0; i <= start; i++){
arr.unshift(i);
}
return arr;
}


/**
 * other solution: 
 * function countDown(start = 0) {
 * let number = []
 * for(let i = start; i >= 0; i-- ){
 * number.push(i)  
 * }
 * return number
 * }
*/

console.log(countDown(5));


for (const solution of [secretSolution,countDown]) {
  // the main test suite for the function
  describe(solution.name + ': counts down to 0', () => {
    it('default parameter is 0 -> [0]', () => {
      expect(solution()).toEqual([0]);
    });
    it('0 -> [0]', () => {
      expect(solution(0)).toEqual([0]);
    });
    it('1 -> [1, 0]', () => {
      expect(solution(1)).toEqual([1, 0]);
    });

      
    // write at least 5 more tests ...
    it('6 -> [6, 5, 4, 3, 2, 1, 0]', () => {
      expect(solution(2)).toEqual([2, 1, 0]);
    });

    it('8 -> [8, 7, 6, 5, 4, 3, 2, 1, 0]', () => {
      expect(solution(4)).toEqual([4, 3, 2, 1, 0]);
    });
    it('3-> [3, 2, 1, 0]', () => {
      expect(solution(2)).toEqual([2, 1, 0]);
    });
    it('TypeError', () => {
      expect(() => solution("string")).toThrow(TypeError);
    });
    it('Error', () => {
      expect(() => solution(-1)).toThrow(Error);
    });
  });
}



// minified solution for testing your tests
// prettier-ignore
function secretSolution(a = 0) { if ("number" != typeof a) throw new TypeError("start is not a number"); if (!Number.isInteger(a)) throw new Error("start is not an integer"); if (0 > a) throw new RangeError("start is less than 0"); const b = []; for (let c = a; 0 <= c; c--)b.push(c); return b }
