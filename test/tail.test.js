const assert = require('chai').assert;
const tail = require('../src/tail');

describe('#tail', () => {
  it('returns all elements except the first one', () => {
    assert.deepEqual(tail([1, 2, 3]), [2, 3]);
  });

  it('returns an empty array for a single-element array', () => {
    assert.deepEqual(tail([1]), []);
  });

  it('returns an empty array for an empty array', () => {
    assert.deepEqual(tail([]), []);
  });
});
