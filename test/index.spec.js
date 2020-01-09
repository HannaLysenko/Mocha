const assert = require('assert')
const {sum, mult, isAdult, isPalindrome, isOddNumber, isEvenNumber, sortArrayUp} = require('../index.js')

describe('function sum', () => {
    it('should sum equals 10', () => {
        assert.equal(sum(4, 6), 10);
    });

    it('should sum not equals 8', () => {
        assert.notEqual(sum(4, 6), 8)
    });
});

describe ('function mult', () => {
    it('shoult mult equals 32', () => {
        assert.equal(mult(4, 8), 32)
    });

    it('shoult mult not equal 12', () => {
        assert.notEqual(mult(3, 6), 12)
    });
});

describe('function isAdult', () => {
    it('should function IsAdult is true', () => {
        assert.equal(isAdult(18), true)
    });

    it('should function IsAdult is false', () => {
        assert.equal(isAdult(15), false)
    });
});

describe ('function isPalindrome', () => {
    it ('should function isPalindrome is palindrome', () => {
        assert.equal(isPalindrome('ogo'), true);
    });

    it ('should function isPalindrome is not palindrome', () => {
        assert.equal(isPalindrome('mama'), false);
    });
});

describe ('function isOddNumber', () => {
    it ('function isOddNumber should contain an odd number', () => {
        assert.equal(isOddNumber(7), true);
    });

    it ('function isOddNumber should not contain an odd number', () => {
        assert.equal(isOddNumber(8), false);
    });
});

describe ('function isOddNumber', () => {
    it ('function isEvenNumber should contain an even number', () => {
        assert.equal(isEvenNumber(8), true);
    });

    it (' function isEvenNumber should not contain an even number', () => {
        assert.equal(isEvenNumber(7), false);
    });
});

describe ('function sortArrayUp', () => {
    it ('function sortArrayUp should sort numbers', () => {
        assert.deepEqual(sortArrayUp([5, 8, 7, 6]), [5, 6, 7, 8]);
    });
});