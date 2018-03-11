import "../assets/sass/main.scss"

import * as Math from "./lib/math"

console.log("Hello from main.")
console.log("NODE_ENV: %s", process.env.NODE_ENV)

const x = 20
const y = 10

console.log(x + " + " + y + " = " + Math.add(x, y))
console.log(x + " - " + y + " = " + Math.subtract(x, y))
console.log(x + " * " + y + " = " + Math.multiply(x, y))
console.log(x + " / " + y + " = " + Math.divide(x, y))