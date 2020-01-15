const {expect} = require('chai');
const {sortArrayUp} = require('../index.js');


describe('function sortArrayUp', () => {
  it('function sortArrayUp should sort numbers', () => {
    expect(sortArrayUp([5, 8, 7, 6])).deep.equal([5, 6, 7, 8]);
  });

  it('function sortArrayUp should sort negative and positive numbers', () => {
    expect(sortArrayUp([5, -8, 7, 6])).deep.equal([-8, 5, 6, 7]);
  });

  it('function sortArrayUp should sort contained', () => {
    expect(sortArrayUp([5, '', 7, 6])).deep.equal(['', 5, 6, 7]);
  });

  it('function sortArrayUp should sort strings', () => {
    expect(sortArrayUp(['apple', 'orange', 'carrot', 'banana'])).deep.equal(['apple', 'banana', 'carrot', 'orange']);
  });
});