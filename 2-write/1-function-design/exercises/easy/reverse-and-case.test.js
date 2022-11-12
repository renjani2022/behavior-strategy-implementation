// #todo

'use strict';

/**
 * reverses a string and sets all the characters to upper or lower case
 * @param {string} [text=''] - the text to reverse and casify
 * @param {boolean} [lowerCase=true] - lower case or upper case
 *  true: set the string to lower case
 *  false: set the string to upper case
 * @returns {string} the reversed text in all lower or upper case
 */

// -------- your solutions --------


function Solution1(string1= "", string2 = !0) { 
if ("string" != typeof string1) { 
throw new Error("text is not a string"); 
} 

if ("boolean" != typeof string2) { 
throw new Error("lowerCase is not a boolean"); 
} 

let string3 = ""; 
for (let i = string1.length - 1; 0 <= i; i--)
string3 += string1[i]; 

let i = ""; 
return i = string2 ? string3.toLowerCase() : string3.toUpperCase(), i 
}




for (const solution of [secretSolution, Solution1]) {
  describe(
    solution.name + ': reverses a string then sets to lower or upper case',
    () => {
      describe("the function's default parameters", () => {
        it('second parameter defaults to true', () => {
          expect(solution('asdf')).toEqual('fdsa');
        });
        it('first parameter defaults to an empty string', () => {
          expect(solution()).toEqual('');
        });
      });


      //LOWERCASE
      // write the tests indicated by the comments

      describe('when set to lower case', () => {
        // when the text is an empty string
        it('return empty when first string is empty and the other is passed', () => {
          expect(solution('', true)).toEqual('');
        });
        
        // when the text is all upper case
        
        it('all uppercase will reverse and turn to lowercase', () => {
          expect(solution('TEXT')).toEqual('txet');
        });

        console.log(secretSolution('TEXT'))
        
        // when the text is all lower case
        it('all lowercase will reverse to lowercase', () => {
          expect(solution('chat', true)).toEqual('tahc');
        });

        console.log(secretSolution('chat'))
        
        // when the text is mixed upper and lower case
        it('mixed upper and lowercase will reverse to lowercase', () => {           
          expect(solution('eNErgY')).toEqual('ygrene');
        });

        console.log(secretSolution('eNErgY'))
  
                
        // when the text contains punctuation
        it('will reverse to lowercase with punctuation', () => {
          expect(solution('abcd:', true)).toEqual(':dcba');
        });
        
        console.log(secretSolution('abcd:'))


        // when the text contains numbers
        it('will reverse to lowercase with numbers', () => {
          expect(solution('abcd123', true)).toEqual('321dcba');
        });
       
       console.log(secretSolution('abcd123'))


      });
      

      //UPPERCASE

      describe('when set to upper case', () => {
        // when the text is an empty string
        it('return empty when first string is empty and the other is passed', () => {
          expect(solution('', false)).toEqual('');
        });

        // when the text is all upper case
        it('all uppercase will reverse and turn to uppercase', () => {
          expect(solution('TEXT', false)).toEqual('TXET');
        });
        
        // when the text is all lower case
         it('all lowercase will reverse to uppercase' , () => {
          expect(solution('TEXT',false)).toEqual('TXET');
        });

        // when the text is mixed upper and lower case
        it('mixed upper and lowercase will reverse to uppercase', () => {           
          expect(solution('eNErgY', false)).toEqual('YGRENE');
        });

        // when the text contains punctuation
        it('will reverse to uppercase with punctuation', () => {
          expect(solution('abcd:', false)).toEqual(':DCBA');
        });

        // when the text contains numbers
        it('will reverse to uppercase with numbers', () => {
          expect(solution('abcd123', false)).toEqual('321DCBA');
        });

      });
    }
  );
}

// minified solution for testing your tests
// prettier-ignore
function secretSolution(a = "", b = !0) { if ("string" != typeof a) { throw new TypeError("text is not a string"); } if ("boolean" != typeof b) { throw new TypeError("lowerCase is not a boolean"); } let c = ""; for (let d = a.length - 1; 0 <= d; d--)c += a[d]; let d = ""; return d = b ? c.toLowerCase() : c.toUpperCase(), d }
