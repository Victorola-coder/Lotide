const assert = require('chai').assert;
const head = require('../src/head');

describe('#head', () => {
  it('returns the first element of an array', () => {
    assert.strictEqual(head([1, 2, 3]), 1);
  });

  it('returns undefined for an empty array', () => {
    assert.strictEqual(head([]), undefined);
  });
});
