//functions

//4 kinds: declaration, expresison, anonymous, and arrow

//function without a parameter
function functionName()
{
  //code here
}
//call like this
functionName()

function square()
{
  let num = 2
  let sq = num * num
  console.log(sq)
}
square() //4

function fullName()
{
  let firstName = 'Aubrey'
  let lastName = 'Gatewood'
  let space = ' '
  let fullName = firstName + space + lastName
  return fullName
}
console.log(fullName())

function areaOfCircle(radius)
{
  let area = Math.PI * radius**2
  return area
}
console.log(areaOfCircle(5))

//skipping some

//unlimited number of parameters
//arguments is an array-like object that contains all the arguments passed to the given function
//it's scope is within the given function
function sumAllNums()
{
  let sum = 0
  console.log(arguments)
  for (let i = 0; i < arguments.length; i++)
  {
    sum += arguments[i]
  }
  return sum
}
console.log(sumAllNums(1,2,3,4,5,6,7)) // 28

//an arrow function does not have the arguments object, instead you have to use the spread operator
//to use an unlimited number of parameters

const arrowSumAllNums = (...args) =>
{
  console.log(args)
  let sum = 0
  for (const element of args)
  {
    sum += element
  }
  return sum
}
console.log(arrowSumAllNums(15,20,30,25,10,33,40)) // 173

//anonymous functions: don't really get the point of these but there is probably a good one

const anonymousFun = function()
{
  console.log(
    'this is an anonymous function'
  )
}

//expression functions are anonymous functions. we make a function without a name and assign it
//to a variable. Then we call the variable because that variable is actually a function. weird.
const square2 = function(n)
{
  return n**2
}

console.log(square2(2)) // 4
//I don't really get the benefit. it works like a regular function?

/*
//self invoking functions are anonymous functions that don't need to be called to return a value
(function(n) {
  console.log(n * n)
}) (2);
//apparently they're used for initializing webpages because they don't clutter the namespace
//they are called once and then the reference is lost, thus they are a set and forget kind of function
let squaredNum = (function(n)
{
  return n * 2
}) (10);

console.log(squaredNum)
*/ // this doesn't work unless everything above it is uncommented because of naming. I wish the author would make 
//his code compatible with the other things in the lesson

//arrow functions use => to declare a function rather than the keyword function()
//traditional function
function square3(n)
{
  return n * n
}
console.log('first square3 ',square3(2))

const square4 = n => // can't use square3 here because already the name of another function 
{
  return n * n
} 

console.log(square4(2))

const changeToUpperCase = arr => 
{
  const newArr = []
  for (const element of arr)
  {
    newArr.push(element.toUpperCase())
  }
  return newArr
}

const countries = ['Finland', 'Sweden', 'Norway', 'Denmark', 'Iceland']
console.log(changeToUpperCase(countries))

//functions with default parameters
//when the function is called, if there is not a parameter provided, the default will be used
function greetings(name = 'Peter')
{
  let message = `${name}, welcome to 30 days of JS`
  return message
}

console.log(greetings())
console.log(greetings('Aubrey'))

const arrowGreetings = (name2 = 'Peter') => 
{
  let message = name2 + ', welcome to 30 days of JS'
  return message
} 
console.log(arrowGreetings())
console.log(arrowGreetings('aubrey'))

const weightOfObject = (mass, gravity = 9.81) => mass * gravity + 'N'

console.log('Weight of an object in Newtons:', weightOfObject(100))
console.log('Weight of an object in Newtons on the moon:', weightOfObject(100, 1.62))

//exercises
//declare a function calles userIDGenerator, it generates a 7 character ID and returns the ID

function userIDGenerator(codeLength)
{
  let code = ''
  let characters = ['q','w','e','r','t','y','u','i','o','p','a','s','d','f','g','h','j','k','l','z','x','c','v','b','n','m','1','2','3','4','5','6','7','8','9','0','Q','W','E','R','T','Y','U','I','O','P','A','S','D','F','G','H','J','K','L','Z','X','C','V','B','N','M']
  for (let i = 0; i < codeLength; i++)
  {
    code = code.concat(characters[Math.floor(Math.random() * characters.length)])
  }
  return code
}
console.log(userIDGenerator(7))

//declare a function userIdGeneratedByUser that takes 2 inputs using prompt. one is the number of characters
//and one is the number of ID's that are supposed to be generated

function userIdGeneratedByUser()
{
  let codeLength = prompt('enter the length of the userID codes you want')
  let codeNum = prompt('enter the number of userID codes you want')
  for (let i = 0; i < codeNum; i++)
  {
    console.log(userIDGenerator(codeLength))
  }
}
//userIdGeneratedByUser()

//make a function called rgbColorGenerator to generate rgb colors
function rgbColorGenerator()
{
  let rgbCode = []
  for (let i = 0; i < 3; i++)
  {
    rgbCode[i] = Math.floor(Math.random() * 255)
  }
  //console.log(`rgb(${rgbCode[0]}, ${rgbCode[1]}, ${rgbCode[2]})`)
  return rgbCode
}
//rgbColorGenerator()

function hexColorGenerator()
{
  let hexCode = []
  let hexChars = ['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f']
  for (let i = 0; i < 6; i++)
  {
    hexCode[i] = hexChars[Math.floor(Math.random() * hexChars.length)]
  }
  console.log(`hex code is ${hexCode}`)
  return hexCode
}
//hexColorGenerator()

function convertHexaToRgb(hexCode)
{
  let rgbCode = []
  let hexConverterArray = ['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f']
  for (let i = 0; i < 3; i++)
  {
    let j = i*2
    rgbCode[i] = Number(hexConverterArray.indexOf(hexCode[j]) * 16)
    rgbCode[i] = rgbCode[i] + Number(hexConverterArray.indexOf(hexCode[j+1]))
  }
  console.log(`converted rgb code is ${rgbCode}`)
  return rgbCode
}
//convertHexaToRgb(hexColorGenerator())

function convertRgbToHexa(rgbCode)
{
  let hexCode = []
  let hexConverterArray = ['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f']
  for (let i = 0; i < 3; i++)
  {
    let j = i*2
    hexCode[j] = hexConverterArray[Math.floor(rgbCode[i] / 16)]
    hexCode[j+1] = hexConverterArray[Math.floor(rgbCode[i] % 16)]
  }
  console.log(`converted hex code is ${hexCode}`)
}
//convertRgbToHexa(convertHexaToRgb(hexColorGenerator()))

function makeRandArray(size = 9000000)
{
  let randArray = []
  for (let i = 0; i < size; i++)
  {
    randArray[i] = Math.floor(Math.random() * 100)
  }
  console.log(randArray)
  return randArray
}

function shuffleArray(inArray)
{
  let outArray = []
  for (let i = 0; i < inArray.length; i++)
  {
    let newIndex = Math.floor(Math.random() * inArray.length)
    while (outArray[newIndex] != null)
    {
      //this right here is superrrr inefficient, but it technically works
      newIndex = Math.floor(Math.random() * inArray.length)
    }
    outArray[newIndex] = inArray[i] 
  }
  
  console.log(outArray)
}

//shuffleArray(makeRandArray())
console.log('done')

