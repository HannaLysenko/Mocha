const {expect} = require('chai');
const {isAdult} = require('../index.js');

describe('function isAdult', () => {
  it('function IsAdult(18) should be true', () => {
    expect(isAdult(18)).true;
  });

  it('function IsAdult() should return undefined', () => {
    expect(isAdult()).undefined;
  });

  it('function IsAdult(str) should return undefined', () => {
    expect(isAdult('str')).undefined;
  });

  it('function IsAdult(15) should be false', () => {
    expect(isAdult(15)).false;
  });

  it('function IsAdult(-3) should return undefined', () => {
    expect(isAdult(-3)).undefined;
  });
});