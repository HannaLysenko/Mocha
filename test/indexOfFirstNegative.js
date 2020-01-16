const {expect} = require('chai');
const {indexOfFirstNegative} = require('../index.js');

describe('indexOfFirstNegative', () => {
  it('function indexOfFirstNegative should return index 1', () => {
    expect(indexOfFirstNegative([2, -3, 8, -5])).eq(1);
  });

  it('function indexOfFirstNegative should return undefined', () => {
    expect(indexOfFirstNegative([])).eq(undefined);
    expect(indexOfFirstNegative([8, 3, 8, 5])).eq(undefined);
    expect(indexOfFirstNegative(['', 3, -8, 'd'])).eq(2);
  });

  it('function indexOfFirstNegative should return 0', () => {
    expect(indexOfFirstNegative([-8, -3, -8, -5])).eq(0);
  });

});

