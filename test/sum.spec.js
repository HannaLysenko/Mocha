const {expect} = require('chai');
const {sum} = require('../index.js');

describe('function sum', () => {
  it('should sum equals 10', () => {
    expect(sum(2, 4)).eq(6);
  });

  it('should sum not equals 8', () => {
    expect(sum(4, 6)).not.eq(8);
  });

  it('should sum equals -2', () => {
    expect(sum(-10, 8)).eq(-2);
  });

  it('should sum equals -12', () => {
    expect(sum(-4, -8)).eq(-12);
  });

  it ('should two variables merge', () => {
    expect(sum('', 7)).eq('7');
  });

  it('should sum return NaN', () => {
    expect(sum()).to.be.NaN;
    expect(sum(4)).to.be.NaN;
  });
});