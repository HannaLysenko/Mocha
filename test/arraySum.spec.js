const {expect} = require('chai');
const {arraySum} = require('../index.js');

describe('Array Summary', () =>{
  it('should arraySum be equal 8', () =>{
    expect(arraySum([5, 2, 1, 0])).eq(8);
  });

  it('should arraySum be equal -8', () =>{
    expect(arraySum([-5, -2, -1, 0])).eq(-8);
  });

  it('should arraySum return "Array contains NaN"', () =>{
    expect(arraySum([8, '', 3, 0])).eq('Array contains NaN');
    expect(arraySum([null])).eq('Array contains NaN');
  });

  it('should arraySum return "Array is empty"', () =>{
    expect(arraySum([])).eq('Array is empty');
  });
});