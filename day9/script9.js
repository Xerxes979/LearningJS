//Higher Order Functions
// 3-3-2022, Aubrey Gatewood
// back in the saddle again ... 

//higher order functions are functions that take a function as an argument or return a function as a value

//callback: a function that can be passed as a parameter to another function

const callback = (n) => {
  return n**2
} // I think it's like a function that can be treated as a variable

function cube(callback, n){
  return callback(n) * n
}

console.log(`cube callback returns ${cube(callback, 3)}`) // returns 27

//returning function: function that returns another function

const higherOrder = n => {
  const doSomething = m => {
    const doWhatEver = t => {
      return 2 * n + 3 * m + t
    }
    return doWhatEver
  }
  return doSomething
}
console.log(`higher order returns ${higherOrder(2)(3)(10)}`)
//I'm confused on the call here. the 3 and 10 aren't even in the parameters of higherOrder.

//the for each method uses callback

const numbers = [1, 2, 3, 4, 5]

const sumArray = arr => {
  let sum = 0
  const callback = function(element) { // "element" is not a key word, could be "house", still works
    sum += element
  }
  arr.forEach(callback)
  return sum
}
//callback is declared like a variable but behaves like a function
console.log(`foreach callback example: ${sumArray(numbers)}`)

//supposedly the same as:

const sumArray2 = arr => {
  let sum = 0
  arr.forEach(function(element) {
    sum += element
  })
  return sum

}
console.log(`foreach 2nd example: ${sumArray2(numbers)}`)

//can execute things after a time interval or schedule a wait time with setInterval and setTimeout

function sayHello(){
  console.log('hello') 
}
//setInterval(sayHello, 1000) // will print hello every second indefinitely

function sayGoodbye(){
  console.log(`goodbye`)
}

//setTimeout(sayGoodbye, 200) // prints goodbye after 200ms, once

//lots  of built in methods use callback function 

//forEach
let arr = [9,8,7,6]
/*
arr.forEach(function (element, index, arr) {
  console.log(index, element, arr)
})

//this can be written with arrow function

arr.forEach((element, index, arr) => {
  console.log(index, element, arr)
})

//which can be written as 
arr.forEach((element, index, arr) => console.log(index, element, arr))
*/

sum = 0
let numbers2 = [1,2,3,4,5,6];
//numbers2.forEach(num => console.log(num))
numbers2.forEach(num => sum += num)
console.log(sum)

const countries = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland']
//countries.forEach((element) => console.log(element.toUpperCase()))

//map can iterate through array elements and modify them. takes a callback function with elements, index, array parameters, and returns a new array

const modifiedArray = arr.map(function (element, index, arr) {
  return element
})
//console.log(modifiedArray)

const numbersSquare = numbers2.map((num) => num * num)
//console.log(numbersSquare) // this is like forEach except it makes an array for you i guess?

numbers2 = numbers2.map((num) => num * num)
console.log(numbers2)

//filter: filters out items that fulfill the filtering conditions and returns new array

const countriesWithLand = countries.filter((country) => country.includes('land'))
//console.log(countriesWithLand)

const sixLetterCountries = countries.filter((temp) => temp.length === 6)
//console.log(sixLetterCountries)

const scores = [
  { name: 'Asabeneh', score: 95 },
  { name: 'Lidiya', score: 98 },
  { name: 'Mathias', score: 80 },
  { name: 'Elias', score: 50 },
  { name: 'Martha', score: 85 },
  { name: 'John', score: 100 },
]

const scoresGTEighty = scores.filter((temp) => temp.score > 80)
console.log(scoresGTEighty)

//reduce: takes a callback function, takes accumulator, current, and optional intiial value as parameters and returns a single value. if the array is empty it will return an error. by default it takes the first array element as the initial value

sum = numbers2.reduce((acc, cur) => acc + cur, 2) // 2 is the base value for acc
//console.log(sum) // 1 + 4 + 9 + 16 + 25 + 36 = 91

let names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const allAreStr = names.every((temp) => typeof temp === 'string') // are they all strings?
//console.log(allAreStr) // true
//every just returns a single boolean value

//find returns the first element that satisfies the condition
let ages = [22, 24, 25, 35, 32, 18]
let age = ages.find((temp) => temp < 20)
//console.log(age) // returns first age in list less than 20

let score = scores.find((temp) => temp.score > 80) // finds first score greater than 80
//console.log(score)

//findIndex returns the index of the first element to satisfy the condition

let eNameIndex = names.findIndex((temp) => temp.startsWith('E'))
//console.log(eNameIndex) // 2

//'some' is like every except it doesn't have to be all elements, can be just one

//sort arranges elements in ascending or descending order, by default sorts as strings (that doesn't work well for numbers) this method modifies the original array

const products = ['Milk', 'Coffee', 'Sugar', 'Honey', 'Apple', 'Carrot']
//console.log(products)
//console.log(products.sort())

//using a conpare callback within the sort method will make it good for sorting numbers

numbers2 = [9.81, 3.14, 100, 37]
console.log(`${numbers2.sort()} is incorrect sorting`)
numbers2.sort(function (a,b) {
  return a - b
})

console.log(`${numbers2} is correct because callback for sorting was used`)

