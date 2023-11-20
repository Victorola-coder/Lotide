const assert = require('chai').assert;
const assertEqual = require('../src/assertEqual');

describe('#assertEqual', () => {
  it('logs a passing message for equal values', () => {
    assertEqual(1, 1);
  });

  it('logs a failing message for different values', () => {
    assertEqual(1, '1');  
  });
});
