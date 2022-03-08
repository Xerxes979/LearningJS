//brand new whip. just hopped in. 
//Aubrey Gatewood 3/7/22

//destructuring is a way to unpack arrays and objects and assigning to a distinct variable

const numbers = [1,2,3]
let [numOne, numTwo, numThree] = numbers
console.log(numOne, numTwo, numThree) // 1 2 3

// can do this with strings, floats, etc

const fullStack = [
    ['HTML', 'CSS', 'JS', 'React'],
    ['Node', 'Express', 'MongoDB']
]

const [frontEnd, backEnd] = fullStack
console.log(frontEnd, backEnd)

//can omit values with a comma
const nums2 = [5,6,7,8]
let [numFive ,, numSeven, numEight, numNine] = nums2
console.log(numFive, numSeven) // 5 7

//can use default values if the array at the given index is undefined

const names = [undefined, 'Brook', 'David']
let [
    firstPerson = 'Aubrey', // only this makes it to output b/c original is undefined
    secondPerson = 'Matt', // this isn't going to output
    thirdPerson,
    fourthPerson = 'john'
] = names

console.log(firstPerson, secondPerson, thirdPerson, fourthPerson)
//aubrey brook david john

let nums = [1,2,3,4,5,6,7,8,9,10]
let [num1, num2, num3, ...rest] = nums

console.log(num1, num2, num3) // 1 2 3
console.log(rest) //[4 5 ... 10]

//destructuring object
//when destructuring, the name of the variable used to destructure should be the same as the key or property of the object. 

const rectangle = {
    width: 20, 
    height: 10,
    area: 200
}

//let {width, height, area, perimiter} = rectangle
//console.log(width, height, area, perimiter)

//renaming during structuring
let {width: w, height: h, area: a, perimiter: p} = rectangle
console.log(w, h, a, p)

//if the key is not found in the object, the variable is set to undefined, or in this case, you can set the default value during declaration

let {width, height, area, perimiter = 60} = rectangle
console.log(width, height, area, perimiter) // 20 10 200 60
//but if perimiter were declared in the rectangle object, this wouldn't work. it wouldn't be 60

//object parameter without destructuring
const rect = {
    width: 20,
    height: 10
}
// const calculatePerimiter = rectangle => {
//     return 2 * (rectangle.width + rectangle.height)
// }

// console.log(calculatePerimiter(rect)) // 60 (this ex no destructuring)

//Another Example
const person = {
    firstName: 'Asabeneh',
    lastName: 'Yetayeh',
    age: 250,
    country: 'Finland',
    job: 'Instructor and Developer',
    skills: [
      'HTML',
      'CSS',
      'JavaScript',
      'React',
      'Redux',
      'Node',
      'MongoDB',
      'Python',
      'D3.js'
    ],
    languages: ['Amharic', 'English', 'Suomi(Finnish)']
}
// Lets create a function which give information about the person object without destructuring
  
const getPersonInfo = obj => {
  const skills = obj.skills
  const formattedSkills = skills.slice(0, -1).join(', ')
  const languages = obj.languages
  const formattedLanguages = languages.slice(0, -1).join(', ')
  
  personInfo = `${obj.firstName} ${obj.lastName} lives in ${obj.country}. He is  ${
    obj.age
  } years old. He is an ${obj.job}. He teaches ${formattedSkills} and ${
    skills[skills.length - 1]
  }. He speaks ${formattedLanguages} and a little bit of ${languages[2]}.`
  
  return personInfo
}  
console.log(getPersonInfo(person))


//object parameter with destructuring
const calculatePerimiter = ({ width, height }) => {
    return 2 * (width + height)
}
//i guess the point here is that you don't have to clarify the object, you just take it apart in the parameter
console.log(calculatePerimiter(rect)) // 60

//I get it but I don't really see the benefit right now

//destructuring during iteration
const todoList = [
    {
      task:'Prepare JS Test',
      time:'4/1/2020 8:30',
      completed:true
    },
    {
      task:'Give JS Test',
      time:'4/1/2020 10:00',
      completed:false
    },
    {
      task:'Assess Test Result',
      time:'4/1/2020 1:00',
      completed:false
    }
]

for (const{task, time, completed} of todoList){
    console.log(task, time, completed)
}

//when destructuring, we use the spread operator (...) to get the rest of the elements as an array. 

nums = [1,2,3,4,5,6,7,8,9,10]
let [num4, num5, num6, ...rest1] = nums
console.log(num4, num5, num6) // 1 2 3
console.log(rest1) // 4 5 6 7 8 9 10

const countries = [
    'Germany',
    'France',
    'Belgium',
    'Finland',
    'Sweden',
    'Norway',
    'Denmark',
    'Iceland'
]

let [gem, fra, , ...nordicCountries] = countries

console.log(gem)
console.log(fra)
console.log(nordicCountries) // finland onward. .. 

//spread operator to copy array
const evens = [0, 2, 4, 6, 8, 10]
const evenNumbers = [...evens]

const odds = [1,3,5,7,9]
const oddNumbers = [...odds]

const wholeNumbers = [...evens, ...odds]
console.log(evenNumbers)
console.log(oddNumbers)
console.log(wholeNumbers)


//spread operator to copy object
const user = {
    name:'Asabeneh',
    title:'Programmer',
    country:'Finland',
    city:'Helsinki'
}

let copiedUser = {...user} // setting directly equal makes some weird array thing, using spread copies the user object exactly
console.log(copiedUser)

copiedUser = {...user, title: 'Instructor'} // edited on the fly
console.log(copiedUser)

//spread with arrow function allows us to take an unlimited number of parameters. using the spread as a parameter, the argument passed will change to an array
const sumAllNums = (...args) => {
    let sum = 0
    for (const num of args){
        sum  += num
    }
    return sum
} // this is cool

console.log(sumAllNums(1, 2, 3, 4, 5)) // 15

