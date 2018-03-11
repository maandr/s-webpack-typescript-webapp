import { expect } from "chai"
import * as Math from "../../src/lib/math"

describe("sum", () => {
    it("should return the sum of two numbers", () => {
        expect(Math.add(5, 5)).to.equal(10)
        expect(Math.add(0, 10)).to.equal(10)
        expect(Math.add(-3, -6)).to.equal(-9)
        expect(Math.add(950060, 75040)).to.equal(1025100)
    })
})