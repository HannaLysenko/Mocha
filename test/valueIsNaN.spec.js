const {expect} = require ('chai');
const {valueIsNaN} = require('../index.js');

describe ('function valueIsNaN', () =>{
  it ('should function(NaN) return true', () => {
    expect (valueIsNaN(NaN)).true;
  });

  it ('should function Number.NaN return true', () => {
    expect (valueIsNaN(Number.NaN)).true;
  });

  it ('should function(1) return false', () => {
    expect (valueIsNaN(1)).false;
  });
});