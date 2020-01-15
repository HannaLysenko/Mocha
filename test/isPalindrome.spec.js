const {expect} = require('chai');
const {isPalindrome} = require('../index.js');

describe('function isPalindrome', () => {
  it('should function isPalindrome is a palindrome', () => {
    expect(isPalindrome('мадам')).true;
  });

  it('should function isPalindrome is a palindrome', () => {
    expect(isPalindrome('ogo')).true;
  });

  it('should function isPalindrome is a palindrome', () => {
    expect(isPalindrome('555555')).true;
  });

  it('should function isPalindrome is a palindrome', () => {
    expect(isPalindrome('')).true;
  });

  it('should function isPalindrome is not a palindrome', () => {
    expect(isPalindrome('ogoo')).false;
  });
});