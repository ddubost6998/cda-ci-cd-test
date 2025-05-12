const test = require('node:test');
const assert = require('node:assert');
const { addition } = require('../math');

test('addition de 2 + 3 devrait donner 5', () => {
    assert.strictEqual(addition(2, 3), 5);
});
