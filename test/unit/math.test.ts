import { suite, test } from "mocha-typescript"
import { expect } from "chai"
import * as Math from "../../src/lib/math"

@suite("Math")
class MathTest {
    
    @test("add")
    should_add_two_numbers() {
        expect(Math.add(5, 5)).to.equal(10)
        expect(Math.add(99, 1)).to.equal(100)
        expect(Math.add(99, -1)).to.equal(98)
        expect(Math.add(0, 10)).to.equal(10)
        expect(Math.add(-3, -6)).to.equal(-9)
        expect(Math.add(950060, 75040)).to.equal(1025100)
    }

    @test("subtract")
    should_subtract_two_numbers() {
        expect(Math.subtract(5, 5)).to.equal(0)
        expect(Math.subtract(99, 1)).to.equal(98)
        expect(Math.subtract(99, -1)).to.equal(100)
        expect(Math.subtract(0, 10)).to.equal(-10)
        expect(Math.subtract(-3, -6)).to.equal(3)
        expect(Math.subtract(950060, 75040)).to.equal(875020)
    }

    @test("multiply")
    should_multiply_two_numbers() {
        expect(Math.multiply(5, 5)).to.equal(25)
        expect(Math.multiply(99, 1)).to.equal(99)
        expect(Math.multiply(99, -1)).to.equal(-99)
        expect(Math.multiply(0, 10)).to.equal(0)
        expect(Math.multiply(-3, -6)).to.equal(18)
        expect(Math.multiply(950060, 75040)).to.equal(71292502400)
    }

    @test("divide")
    should_divide_two_numbers() {
        expect(Math.divide(5, 5)).to.equal(1)
        expect(Math.divide(99, 1)).to.equal(99)
        expect(Math.divide(99, -1)).to.equal(-99)
        expect(Math.divide(0, 10)).to.equal(0)
        expect(Math.divide(-3, -6)).to.equal(0.5)
        expect(Math.divide(950060, 75040)).to.equal(12.660714285714286)
    }
}