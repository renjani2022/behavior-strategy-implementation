// #todo

'use strict';

/**
 * sets all the characters in a string to upper or lower case
 * @param {string} [text=''] - the text to casify
 * @param {boolean} [lowerCase=true] - lower case or upper case
 *  true: set the string to lower case
 *  false: set the string to upper case
 * @returns {string} the text in all lower or upper case
 */

// -------- your solutions --------


//Solution1
function solution1(string1 = "", string2= !0) { 

if ("string" != typeof string1) { 
throw new Error("text is not a string"); 
} 

if ("boolean" != typeof string2) { 
throw new Error("lowerCase is not a boolean"); 
} 

let string3 = ""; 
return string3 = string2 ? string1.toLowerCase() : string1.toUpperCase(), string3 
}

//Solution2
function solution2(text='', lowerCase=true) {
  return lowerCase ? text.toLowerCase() : text.toUpperCase();
}




for (const solution of [secretSolution, solution1, solution2]) {
  describe(solution.name + ': sets a text to lower or upper case', () => {
    describe("the function's default parameters", () => {
      it('second parameter defaults to true', () => {
        expect(solution('asdf')).toEqual('asdf');
      });
      it('first parameter defaults to an empty string', () => {
        expect(solution()).toEqual('');
      });
    });

    //LOWERCASE
    // write the tests indicated by the comments
    describe('when set to lower case', () => {
    
      // when the text is an empty string
      it('return empty', () => {
        expect(solution('', true)).toEqual('');
      });

      // when the text is all upper case
      it('all uppercase turn to lowercase', () => {
          expect(solution('TEXT')).toEqual('text');
        });
      
      // when the text is all lower case
      it('all lowercase', () => {
          expect(solution('chat', true)).toEqual('chat');
        });

      // when the text is mixed upper and lower case
      it('mixed reverse to lowercase', () => {           
          expect(solution('eNErgY')).toEqual('energy');
        });
      // when the text contains punctuation
      it('reverse to lowercase with punctuation', () => {
          expect(solution('abcd:', true)).toEqual('abcd:');
        });

      // when the text contains numbers
        it('reverse to lowercase with numbers', () => {
          expect(solution('abcd123', true)).toEqual('abcd123');
        });
    });


    //UPPERCASE
    describe('when set to upper case', () => {

      // when the text is an empty string
      it('return empty', () => {
        expect(solution('', false)).toEqual('');
      });
      
      // when the text is all upper case
      it('all uppercase to uppercase', () => {
      expect(solution('TEXT', false)).toEqual('TEXT');
      });

      // when the text is all lower case
      it('all lowercase to uppercase', () => {
          expect(solution('chat', false)).toEqual('CHAT');
        });

      // when the text is mixed upper and lower case
      it('mixed to uppercase', () => {           
          expect(solution('eNErgY', false)).toEqual('ENERGY');
        });

      // when the text contains punctuation
      it('uppercase with punctuation', () => {
          expect(solution('abcd:', false)).toEqual('ABCD:');
        });

      // when the text contains numbers
      it('uppercase with numbers', () => {
          expect(solution('abcd123', false)).toEqual('ABCD123');
        });
    });
  });
}

// minified solution for testing your tests
// prettier-ignore
function secretSolution(a = "", b = !0) { if ("string" != typeof a) { throw new TypeError("text is not a string"); } if ("boolean" != typeof b) { throw new TypeError("lowerCase is not a boolean"); } let c = ""; return c = b ? a.toLowerCase() : a.toUpperCase(), c }
