## Unit Testing Based On Mocha
Mocha is one of the most popular Node.js testing frameworks.

#### Mocha Instalation
The User should start with installing Mocha-Node module in the project’s directory. To do this, they should 
follow the steps below:
1. Open the terminal.
2. Enter this command: __npm install mocha__ (if needs, change the "name" in package.json to different one(WebStorm)).

#### Runnig Unit Tests
1. Open *index.js* file. Here, the user can create units (functions).

2. Unit tests should be saved in a separate folder. For this purpose, in Mocha directory create a new "Test" directory, where create a new JS File with __"file name".spec.js__.  

3. For functions export, open *index.js* file and type a command __module.exports = {functionName};__ (couple of functions are permissible here).

4. Following, for functions import, open *index.spec.js* file and type a command __const {functionName} = require('../index.js');__

5. Here is a Mocha syntax for index.spec.js file:

```javascript
const assert = require('assert');
describe('functionName', () => {
  it('should function return...', () => {
    assert.equal(functionName(input), expectedResult);
  });
     
  it('should function return...', () => {
    assert.notEqual(functionName(input), expectedResult);
  });
});
```

6. For test run, the user should open the terminal and type a command __npm test__.

## Unit Testing Based On Chai
Chai is a BDD / TDD assertion library for node and the browser that can be delightfully paired with any javascript testing framework.

#### Chai Instalation
1. Package is available through npm: __npm install chai__;

#### Runnig Unit Tests

1. For test running, *index.spec.js* requires the following command: __const {expect} = require('chai');__

2. Here is a Chai syntax for index.spec.js file:
```javascript
describe('functionName', () => {
  it('should function return...', () => {
    expect(functionName(input)), to.equal(expectedResult);
  });

  it('should function return ', () => {
    expect(functionName(input)), to.equal(expectedResult);
  });
});
```

3. For test run, the user should open the terminal and type a command __npm test__.


