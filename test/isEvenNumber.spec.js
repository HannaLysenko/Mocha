const {expect} = require('chai');
const {isEvenNumber} = require('../index.js');

describe('function isEvenNumber', () => {
  it('function isEvenNumber should contain an even number', () => {
    expect(isEvenNumber(8)).eq(true);
    expect(isEvenNumber(-8)).eq(true);
  });

  it(' function isEvenNumber should not contain an even number', () => {
    expect(isEvenNumber(7)).eq(false);
    expect(isEvenNumber(-7)).eq(false);
  });
});