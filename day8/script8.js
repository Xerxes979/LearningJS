//JS objects
console.log('ah shit here we go again')

let a = 'javascript'
let b = 10
function letsLearnScope(){
  console.log(a,b)
  if (true){
    let a = 'python'
    let b = 100 // this is scoped inside the if
    console.log(a,b)
  }
  console.log(a,b)
}
letsLearnScope()
console.log(a,b)

//declaring a variable with var gives it function scope only. const and let give block scope
//block scope is like an if block, while loop, anything between 2 curly braces
//author recommends to use exclusively let and const. var causes lots of unpredictable errors

//objects have properties and properties have values, so an object is a key value pair. the order
//is not reserved, eg. there is no order

//object examples
const rectangle = {
  length: 20,
  width: 20
}
console.log(rectangle)

const person = {
  firstName: 'Aubrey',
  lastName: 'Gatewood',
  age: 21,
  country: 'united states',
  city: 'louisville',
  skills: [
    'C',
    'system verilog',
    'python',
    'makefile',
    'javascript'
  ],
  address:{
    street: '305 s main st',
    pobox: '462',
    city: 'Old Castle'
  },
  isMarried: false,
  getFullName: function(){
    return `${this.firstName} ${this.lastName}`
  },
  'phone number': '18002738255'
}
console.log(person)
//can get values from an object with 2 methods
//using . followed by  akey name if the key name is one word
//using square bracket and a quote
console.log(person['firstName']) // access individial items like this

//setting a new key for an object
//objects are mutable
person.nationality = 'American'
person.title = 'student'

person.getPersonInfo = function(){
  let skillsWithoutLastSkill = this.skills
    .splice(0, this.skills.length - 1)
    .join(', ')
  let lastSkill = this.skills.splice(this.skills.length - 1)[0]

  let skills = `${skillsWithoutLastSkill}, and ${lastSkill}`
  let fullName = this.getFullName()
  let statement =  `${fullName} is a ${this.title}. \nHe lives in ${this.country}.\n he has a passable proficiency in ${skills}.`
  return statement
}
console.log(person)
console.log(person.getPersonInfo())
//this is an interesting way to put things together

const copyPerson = Object.assign({}, person)
console.log(copyPerson)

//object.keys is to get the keys or properties of an object as an array
const keys = Object.keys(copyPerson)
console.log(keys)
const address = Object.keys(copyPerson.address)
console.log(address)

//Object.values: to get the values of an object as an array
const values = Object.values(copyPerson)
console.log(values)

//Object.entries: to get the keys and values in an array
const entries = Object.entries(copyPerson)

//hasOwnProperty: to check if a specific key or property exist in an object
console.log(copyPerson.hasOwnProperty('firstName'))
console.log(copyPerson.hasOwnProperty('score'))

//i am now "SUPERCHARGED WITH THE POWER OF OBJECTS"
//lmao I love the enthusiasm of this author

//exercises


//make a literal object called personAccount with firstName, lastName, incomes, expenses properties
//has totalIncome, totalExpense, accountInfo, addIncome, addExpense, and accoutnBalance methods
//incomes is a set of incomes and descriptions and expenses is a set of expenses and their descriptions
//I can't make the totalIncome funcion work the way I want, and there is no example like it on google.
//I think the question needs to be a little clearer. 
//edit: I'm a fucking genius and figured it out
const personAccount = {
  firstName: 'Aubrey',
  lastName: 'Gatewood',
  incomes: {
    interest: '20',
    shares: '10',
    onlyFans: '10000', // jk i wish
    airBioLab: '400'
  },
  expenses: {
    food: '200',
    gas: '300',
    rent: '400',
    booze: '50',
    tuition: '1000'
  },  
  totalIncome: function(){
    let incomeTotal = 0
    for (const [key, value] of Object.entries(personAccount.incomes)){
      //console.log(key, value) // I want the expense values not the names.
      incomeTotal += Number(value)// edit: got it
    }
    console.log(`income total is ${incomeTotal}`)
    return incomeTotal
  },
  totalExpense: function(){
    let expenseTotal = 0
    for (const[key, value] of Object.entries(personAccount.expenses)){
      //console.log(key, value)
      expenseTotal += Number(value)
    }
    console.log(`expense total is ${expenseTotal}`)
    return expenseTotal
  },
  accountInfo: {
    email: 'aubrey.email@yahoo.com',
    password: '********'
  },
  addIncome: function(valueName, key){
    personAccount.incomes[valueName] = key // this took too long to figure out
    console.log(`adding income: ${valueName}, ${key}`)
  },
  addExpense: function(valueName, key){
    personAccount.expenses[valueName] = key
    console.log(`adding expense: ${valueName}, ${key}`)
  },
  accountBalance: function(){
    let netIncome = Number(this.totalIncome()) - Number(this.totalExpense())
    console.log(`account balance is ${netIncome}`)
  }
}
personAccount.totalIncome()
personAccount.totalExpense()
personAccount.addIncome('nifco', '800')
personAccount.totalIncome()
personAccount.addExpense('computer junk', '50')
personAccount.totalExpense()
personAccount.accountBalance()
//that took a really long time. That is one hell of an object. 

//question 2

//given code
const users = [
  {
      _id: 'ab12ex',
      username: 'Alex',
      email: 'alex@alex.com',
      password: '123123',
      createdAt:'08/01/2020 9:00 AM',
      isLoggedIn: false
  },
  {
      _id: 'fg12cy',
      username: 'Asab',
      email: 'asab@asab.com',
      password: '123456',
      createdAt:'08/01/2020 9:30 AM',
      isLoggedIn: true
  },
  {
      _id: 'zwf8md',
      username: 'Brook',
      email: 'brook@brook.com',
      password: '123111',
      createdAt:'08/01/2020 9:45 AM',
      isLoggedIn: true
  },
  {
      _id: 'eefamr',
      username: 'Martha',
      email: 'martha@martha.com',
      password: '123222',
      createdAt:'08/01/2020 9:50 AM',
      isLoggedIn: false
  },
  {
      _id: 'ghderc',
      username: 'Thomas',
      email: 'thomas@thomas.com',
      password: '123333',
      createdAt:'08/01/2020 10:00 AM',
      isLoggedIn: false
  }
  ];

  const products = [
{
  _id: 'eedfcf',
  name: 'mobile phone',
  description: 'Huawei Honor',
  price: 200,
  ratings: [
    { userId: 'fg12cy', rate: 5 },
    { userId: 'zwf8md', rate: 4.5 }
  ],
  likes: []
},
{
  _id: 'aegfal',
  name: 'Laptop',
  description: 'MacPro: System Darwin',
  price: 2500,
  ratings: [],
  likes: ['fg12cy']
},
{
  _id: 'hedfcg',
  name: 'TV',
  description: 'Smart TV:Procaster',
  price: 400,
  ratings: [{ userId: 'fg12cy', rate: 5 }],
  likes: ['fg12cy']
}
]

//end given code
//you get the above data froma  MongoDB database. create a function called signUP which allows users to
//add to the collection. if user exists, inform the user that they already have an account
function signUp(ID, userName, eMail, passWord){
  //first check if it exists
  let accountTaken = false
  for (const[key, value] of Object.entries(users)){
    console.log(value._id)
    //console.log(key) just gives the index
    newIndex = key
    if (value._id == ID){
      console.log('there is already an account associated with this username')
      accountTaken = true
    }   
  }
  if (accountTaken == false){
    console.log('This username is available. Creating your account ... ')
    users._id = ID
    users.username = userName
    users.email = eMail
    users.password = passWord
    console.log(users._id)
  }
  //next for is just to check
  for (const[key, value] of Object.entries(users)){
    console.log(value._id)
    console.log(value.username)
    console.log(value.email)
    console.log(value.password)
  }
}
signUp('xerxes', 'hi', 'hi', 'hi')