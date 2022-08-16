import Calculator from "../function.js";
import { expect } from 'chai';

describe('Basic Mocha String Test', function () {

    it('should return number of charachters in a string', function () {
        expect(Calculator.add(2, 4)).to.equal(6)
    })

    it('should return number of charachters in a string', function () {
        expect(Calculator.multiple(2, 4)).to.equal(8)
    });
});



