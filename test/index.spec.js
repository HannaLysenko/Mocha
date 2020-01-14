const assert = require('assert');
const {expect} = require('chai');

const {isAdult, isPalindrome, isOddNumber, isEvenNumber, sortArrayUp} = require('../index.js');

describe('function isAdult', () => {
  it('function IsAdult should be true', () => {
    expect(isAdult(18)).true;
  });

  it('function IsAdult should return undefined', () => {
    expect(isAdult()).undefined;
  });

  it('function IsAdult should return undefined', () => {
    expect(isAdult('str')).undefined;
  });

  it('function IsAdult should be false', () => {
    expect(isAdult(15)).false;
  });

  it('function IsAdult should return undefined', () => {
    expect(isAdult(-3)).undefined;
  });
});

describe('function isPalindrome', () => {
  it('should function isPalindrome is palindrome', () => {
    assert.equal(isPalindrome('ogo'), true);
  });

  it('should function isPalindrome is not palindrome', () => {
    assert.equal(isPalindrome('mama'), false);
  });

});

describe('function isOddNumber', () => {
  it('function isOddNumber should contain an odd number', () => {
    assert.equal(isOddNumber(7), true);
  });

  it('function isOddNumber should not contain an odd number', () => {
    assert.equal(isOddNumber(8), false);
  });
});

describe('function isOddNumber', () => {
  it('function isEvenNumber should contain an even number', () => {
    assert.equal(isEvenNumber(8), true);
  });

  it(' function isEvenNumber should not contain an even number', () => {
    assert.equal(isEvenNumber(7), false);
  });
});

describe('function sortArrayUp', () => {
  it('function sortArrayUp should sort numbers', () => {
    assert.deepEqual(sortArrayUp([5, 8, 7, 6]), [5, 6, 7, 8]);
  });
});


