///JSON: about to be a real hacker
//Aubrey Gatewood 3/9/2022

//JSON means JavaScript Object Notation. it is text or string only. it is a light weight data format for storing and transporting, mostly between a server and a client. easy-to-use alternative to XML

/*example: 
{
  "users":[
    {
      "firstName":"Asabeneh",
      "lastName":"Yetayeh",
      "age":250,
      "email":"asab@asb.com"
    },
    {
      "firstName":"Alex",
      "lastName":"James",
      "age":25,
      "email":"alex@alex.com"
    },
    {
    "firstName":"Lidiya",
    "lastName":"Tekle",
    "age":28,
    "email":"lidiya@lidiya.com"
    }
  ]
}
*/
//the only difference between this and a regular JS object is that the keys are in double quotes
//can usually change JS object to JSON and JSON to JS object

//mostly we fetch JSON data from HTTP response or from a file, but can convert to an Object. to do this we use JSON.parse(). to make an Object a JSON file, we use JSON.stringify()

const usersText = `{
  "users":[
    {
      "firstName":"Asabeneh",
      "lastName":"Yetayeh",
      "age":250,
      "email":"asab@asb.com"
    },
    {
      "firstName":"Alex",
      "lastName":"James",
      "age":25,
      "email":"alex@alex.com"
    },
    {
    "firstName":"Lidiya",
    "lastName":"Tekle",
    "age":28,
    "email":"lidiya@lidiya.com"
    }
  ]
}`

const usersObj = JSON.parse(usersText, undefined, 4)
console.table(usersObj)

//using a reviver function with JSON.parse()

const usersObj2 = JSON.parse(usersText, (key, value) => {
  let newValue = 
    typeof value == 'string' && key != 'email' ? value.toUpperCase() : value
  return newValue
})
console.log(usersObj2)

//this changed the json file to an object. 

//converting object to json with json.stringify(). this takes one required param and 2 optional params. 
//json.stringify(obj, replacer, space) 
//if you don't want to filter any keys, we can pass undefined to the replacer, and the space is for indentations

//converting following object to a string, keep all keys, use 4 space indentation
const users = {
  Alex: {
    email: 'alex@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript'],
    age: 20,
    isLoggedIn: false,
    points: 30
  },
  Asab: {
    email: 'asab@asab.com',
    skills: [
      'HTML',
      'CSS',
      'JavaScript',
      'Redux',
      'MongoDB',
      'Express',
      'React',
      'Node'
    ],
    age: 25,
    isLoggedIn: false,
    points: 50
  },
  Brook: {
    email: 'daniel@daniel.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
    age: 30,
    isLoggedIn: true,
    points: 50
  },
  Daniel: {
    email: 'daniel@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
    age: 20,
    isLoggedIn: false,
    points: 40
  },
  John: {
    email: 'john@john.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
    age: 20,
    isLoggedIn: true,
    points: 50
  },
  Thomas: {
    email: 'thomas@thomas.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React'],
    age: 20,
    isLoggedIn: false,
    points: 40
  },
  Paul: {
    email: 'paul@paul.com',
    skills: [
      'HTML',
      'CSS',
      'JavaScript',
      'MongoDB',
      'Express',
      'React',
      'Node'
    ],
    age: 20,
    isLoggedIn: false,
    points: 40
  }
}

let txt = JSON.stringify(users, undefined, 4)
console.log(txt)

//JSON is really just a detailed string format. 

//using a filter array with JSON.stringify
//we can use the replacer as a Filter if we are just interested in some of the keys

const user = {
  firstName: 'Asabeneh',
  lastName: 'Yetayeh',
  country: 'Finland',
  city: 'Helsinki',
  email: 'alex@alex.com',
  skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Python'],
  age: 250,
  isLoggedIn: false,
  points: 30
}
txt = JSON.stringify(user,['firstName', 'lastName', 'country', 'city', 'age'],4)
console.log(txt) // only gives results from specified values

