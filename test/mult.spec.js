const {expect} = require('chai');
const {mult} = require('../index.js');

describe('function mult', () => {
  it('shoult mult equals 32', () => {
    expect(mult(4, 8)).eq(32);
  });

  it('shoult mult not equal 12', () => {
    expect(mult(3, 6)).not.eq(12);
  });

  it('shoult mult equal -12', () => {
    expect(mult(3, -4)).eq(-12);
  });

  it('shoult mult equal 12', () => {
    expect(mult(-4, -3)).eq(12);
  });
});