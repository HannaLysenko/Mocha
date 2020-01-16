const {expect} = require('chai');
const {isOddNumber} = require('../index.js');

describe('function isOddNumber', () => {
  it('function isOddNumber should contain an odd number', () => {
    expect(isOddNumber(7)).true;
    expect(isOddNumber(-7)).true;
    expect(isOddNumber(0). true);
  });

  it('function isOddNumber should not contain an odd number', () => {
    expect(isOddNumber(8)).false;
    expect(isOddNumber(-8)).false;
    expect(isOddNumber()).false;
    expect (isOddNumber('apple')).false;
  });
});
