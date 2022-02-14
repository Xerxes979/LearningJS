const arr = []
console.log(arr) // []

const numbers = [0, 3.14, 9.81, 37, 98.6, 100] // array of numbers
const strings = ['banana', 'orange', 'mango', 'lemon'] // array of strings

console.log("Numbers: ", numbers)
console.log("number of numbers: ", numbers.length)

const arr2 = [
  'aubrey',
  21,
  true,
  {country: 'united states', city: 'Louisville'},
  {skills: ['c', 'makefile', 'python', 'systemVerilog', 'JS']}
]
console.log(arr2)

//using split
let js = 'javascript'
const charsInJavascript = js.split('')
console.log(charsInJavascript)

//indexes start at 0
let lastIndex = strings.length - 1
let lastFruit = strings[lastIndex]
console.log(lastFruit) // lemon

strings[lastIndex] = 'apple'
console.log(strings[lastIndex]) // now apple

const eightEmptyValues = Array(8)
console.log(eightEmptyValues)

const eightZeroValues = Array(8).fill(0)
console.log(eightZeroValues)

const firstList = [1,2,3]
const secondList = [4,5,6]
const thirdList = firstList.concat(secondList)
console.log(thirdList) // [1,2,3,4,5,6]

console.log(numbers.indexOf(37))//returns the index of the item if in the array
//otherwise -1, good for checking if something is in the array
// using .lastIndexOf() gets the last, rather than first, index of that item in the array

//can also use .includes(element) if you want a boolean
// .isArray checks the datatype

const names = ['asabeneh', 'matthias', 'elias', 'brook']
console.log(names.toString())
console.log(names.join(" && "))


