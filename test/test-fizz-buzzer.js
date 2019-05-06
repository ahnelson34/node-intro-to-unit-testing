const expect = require('chai').expect;

const adder = require('../fizzBuzzer');

describe('fizzBuzzer', function() {

  it('should return "fizz" for multiples of 3', function() {
    [3, 6, 9, 12].forEach(function(input) {
        expect(fizzBuzzer(input)).to.equal('fizz');
    });
  });
  it('should return "buzz" for multiples of 5', function() {
    [5, 10, 20, 25].forEach(function(input) {
        expect(fizzBuzzer(input)).to.equal('buzz');
    });
  });
  it('should return "fizz-buzz" for multiples of 15', function() {
    [15, 30, 45].forEach(function(input) {
        expect(fizzBuzzer(input)).to.equal('fizz-buzz');
    });
  });
  it('should give an error if input is not a number', function() {
    const incorrectInputs = [true, false, 'dog', function() {}, [1,2,3]];
    incorrectInputs.forEach(function(input) {
        expect(function() {
            fizzBuzzer(input);
        }).to.throw(Error);
    });
  });
 

});