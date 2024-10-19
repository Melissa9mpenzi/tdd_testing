const assert = require('chai').assert; 
const multiply = require('../multiply'); 

describe('Multiply function tests', function() {
    it('should return 1 for multiply(1, 1)', function() {
      assert.equal(multiply(1, 1), 1);
    });
  });


describe('Multiply function tests', function() {
    it('should return 4 for multiply(2, 2)', function() {
        assert.equal(multiply(2, 2), 4);
    });
  });


describe('Multiply function tests', function() {
    it('should return 9 for multiply(3, 3)', function() {
        assert.equal(multiply(3, 3), 9);
    });
  });

describe('Multiply function tests', function() {
    it('should return 16 for multiply(4, 4)', function() {
        assert.equal(multiply(4, 4), 16);
    });
  });