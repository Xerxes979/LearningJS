//booleans
let isLightOn = true
let trueValue = 4 > 3 // true
//all numbers are truthy, pos and neg
//all strings except an empty string are true
//obviously, the boolean true is true

let firstName
console.log(firstName)
//this is going to return undefined

let empty = null
console.log(empty) // going to return null

//there are a bunch of the same assignment operators as C:
//=, +=, -=, *=, /=, %=, **=, 
// self explanatory, % is mod and ** is exp

const PI = 3.14159265358979
let radius = 100
const areaOfCircle = PI * radius * radius
console.log(areaOfCircle)

//remember how to concatenate?
const gravity = 9.81
let mass = 72
const weight = mass * gravity
console.log(
    `if your mass is ${mass}kg and the gravitational constant is ${gravity}m/s^2, then your weight is ${weight}N`
)

//operators
//all what you know, except apparently == means equal in value, while === means equal in value and data type
//like this
console.log(3 == '3') // true
console.log(3 === '3') // false
console.log(0 == ' ') // T
console.log(0 === ' ') // F
console.log(undefined == null) // T
console.log(undefined === null) // F
//however ... 
console.log(NaN == NaN) // F because not equal, the value is "not a number" it is the property of a global object
console.log(NaN === NaN) // F
console.log(typeof(NaN))
// NaN is usually used to check whether entered numbers are valid or not

//logic operators
//same as usual
let check = 4 > 3
let otherCheck = !(4 > 3)
console.log(`check is ${check} and othercheck is ${otherCheck}`)// T and F

//you know pre and post increments and decrements

//ternary operators
let isRaining = true
isRaining  
    ? console.log('You need a raincoat')
    : console.log('no need for a raincoat')
isRaining = false

isRaining//i suppose it checks truth here
    ? console.log('You need a raincoat')//if true do this
    : console.log('no need for a raincoat')//if false do this

//you know operator precedence

//windows alerts
//the alert method displays an alert box and an OK button. it is built in and takes one arg
//alert('this is a windows alert message')
//the alert function makes for a very annoying website. only use it to test

//the windows prompt box takes input values and stores them in a variable
//let number = prompt('enter a number', 'your number goes here')

//the windows confirm methof specifies a message with an OK and a cancel button. ok yields true, and cancel
//yields false. it returns this value from the confirm() function

//let agree = confirm('are you sure you want to delete??')
//console.log(agree)

//the date object
//there are methods like getFullYear(), getMonth() etc...
//getMilliseconds() gets the milliseconds (between 0 and 999)
//getTime() gets the milliseconds since jan 1st 1970
//getDay() gets a value 0 through 6

const now = new Date()
console.log(now)

console.log(now.getFullYear())
console.log(now.getMonth()) // a number 0 to 11
console.log(now.getTime())//# of seconds since jan 1 1970
const allSeconds = Date.now()
const timeInSeconds = new Date().getTime()
console.log(allSeconds == timeInSeconds) // this is true


const year = now.getFullYear()
const month = now.getMonth()
const date = now.getDate() //between 0 and 31
const hours = now.getHours()
const minutes = now.getMinutes()
console.log(
    `the year is ${year}, and the month is ${month} and the day is ${date} 
    and the hour is ${hours} and the minute is ${minutes}`
)

//exercises

//perimiter of a triangle
// let side1 = prompt('first triangle side')
// let side2 = prompt('second triangle side')
// let side3 = prompt('third triangle side')
// let perimiter = parseInt(side1) + parseInt(side2) + parseInt(side3)
// alert(
//     `your triangle's perimiter is ${perimiter}`
// )

// time in seconds that a person lives, given the number of years
// let years = Number(prompt('lifespan'))
// let seconds = years * 52 * 7 * 24 * 3600
// alert(
//     `the number of seconds lived is ${seconds}`
// )

//make a human readable time format using the Date time object
console.log('date exercise')
alert(
    `${year}-${month}-${date} ${hours}:${minutes} is the date`
)

