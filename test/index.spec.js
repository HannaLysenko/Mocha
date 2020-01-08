const assert = require('assert')
const {sum, mult} = require('../index.js')

it ('should sum equals 10', () => {
    assert.equal(sum(4, 6), 10);
});

it ('should sum not equals 8', () => {
    assert.notEqual(sum(4, 6), 5)
});

it ('shoult mult equals 32npm test', () => {
    assert.equal(mult(4, 8), 32)
})