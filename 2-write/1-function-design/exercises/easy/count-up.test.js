// #todo

'use strict';

/**
 * builds an array counting up from 0 to `max`
 * @param {number} [max=0] - the number to count up to
 *  max must be an integer that is greater than 0
 * @returns {number[]} an array of all numbers from 0 to `max`
 */

// -------- your solutions --------


function countUp(startNum = 0) {
  let arr = []

  if (typeof(startNum) !== "number") {
    throw new TypeError("it is not number");
  }

  if (startNum < 0) {
    throw new Error();
  }

  for(let i = 0; i <= startNum; i++ ){
    arr.push(i)
  }
  return arr
}

console.log(countUp(5));


for (const solution of [secretSolution, countUp]) {
  // the main test suite for the function
  describe(solution.name + ': counts up from 0', () => {
    it('default parameter is 0 -> [0]', () => {
      const actual = solution();
      expect(actual).toEqual([0]);
    });
    it('0 -> [0]', () => {
      expect(solution(0)).toEqual([0]);
    });
    it('1 -> [0, 1]', () => {
      expect(solution(1)).toEqual([0, 1]);
    });
    // write at least 5 more tests ...
        it('2-> [0, 1, 2]', () => {
      expect(solution(2)).toEqual([0, 1, 2]);
    });
    it('4 -> [0, 1, 2, 3, 4]', () => {
      expect(solution(4)).toEqual([0, 1, 2, 3, 4]);
    });
    it('6 -> [0, 1, 2, 3, 4, 5, 6]', () => {
      expect(solution(6)).toEqual([0, 1, 2, 3, 4, 5, 6]);
    });
    it('Error ', () => {
      expect(() => solution(-1)).toThrow(Error);
    });
    it('TypeError', () => {
      expect(() => solution("string")).toThrow(TypeError);
    });
  });
}

// minified solution for testing your tests
// prettier-ignore
function secretSolution(a = 0) { if ("number" != typeof a) throw new TypeError("max is not a number"); if (!Number.isInteger(a)) throw new Error("max is not an integer"); if (0 > a) throw new RangeError("max is less than 0"); const b = []; for (let c = 0; c <= a; c++)b.push(c); return b }
