//JS objects
//console.log('ah shit here we go again')

let a = 'javascript'
let b = 10
function letsLearnScope(){
  //console.log(a,b)
  if (true){
    let a = 'python'
    let b = 100 // this is scoped inside the if
    //console.log(a,b)
  }
  //console.log(a,b)
}
letsLearnScope()
//console.log(a,b)

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
//console.log(rectangle)

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
//console.log(person)
//can get values from an object with 2 methods
//using . followed by  akey name if the key name is one word
//using square bracket and a quote
//console.log(person['firstName']) // access individial items like this

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
//console.log(person)
//console.log(person.getPersonInfo())
//this is an interesting way to put things together

const copyPerson = Object.assign({}, person)
//console.log(copyPerson)

//object.keys is to get the keys or properties of an object as an array
const keys = Object.keys(copyPerson)
//console.log(keys)
const address = Object.keys(copyPerson.address)
//console.log(address)

//Object.values: to get the values of an object as an array
const values = Object.values(copyPerson)
//console.log(values)

//Object.entries: to get the keys and values in an array
const entries = Object.entries(copyPerson)

//hasOwnProperty: to check if a specific key or property exist in an object
//console.log(copyPerson.hasOwnProperty('firstName'))
//console.log(copyPerson.hasOwnProperty('score'))

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
/* //uncomment here to test personAccount
personAccount.totalIncome()
personAccount.totalExpense()
personAccount.addIncome('nifco', '800')
personAccount.totalIncome()
personAccount.addExpense('computer junk', '50')
personAccount.totalExpense()
personAccount.accountBalance()
//that took a really long time. That is one hell of an object. 
*/

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
  //since no clarification, going to make sure email, ID, and username are unique
  //password can be the same as another account. 
  let accountTaken = false
  let newIndex = 0
  for (const[key, value] of Object.entries(users)){
    //console.log(value._id)
    //console.log(key) just gives the index
    newIndex = key
    if (value._id == ID){
      console.log('there is already an account associated with this ID')
      accountTaken = true
    }
    if (value.username == userName){
      console.log('there is already an account associated with this username')
      accountTaken = true
    }   
    if (value.email == eMail){
      console.log('there is already an account associated with this email')
      accountTaken = true
    } 
  }
  if (accountTaken == false){
    console.log(`This username: "${userName}", and associated account information, are available. Creating your account ... `)
    users[newIndex]._id = ID
    users[newIndex].username = userName
    users[newIndex].email = eMail
    users[newIndex].password = passWord
    users[newIndex].isLoggedIn = false
    //console.log(users._id)
  }
  //next for is just to check
  /*
  for (const[key, value] of Object.entries(users)){
    console.log(value._id)
    console.log(value.username)
    console.log(value.email)
    console.log(value.password)
  }
  */
}
signUp('Aubrey', 'Xerxes979', 'xerxes.rocks@gmail.com', "don't guess this")

//create a function called signIn to allow users to sign in to the application
//taking email and password as parameters. if they match an existing account
    //that account's status is changed to logged in
function signIn(eMail, passWord){
  let successfulLogin = false
  let passwordFalse = false
  for (const[key, value] of Object.entries(users)){
    if (value.email == eMail){
      if (value.password == passWord){
        value.isLoggedIn = true;
        successfulLogin = true
        console.log(`successfully logged in as ${value.username}`)
      }
      if (value.password != passWord){
        passwordFalse = true
        console.log(`the given password for ${eMail} is not correct`)
        //would re-prompt, break, and re-call signIn function here if creating for an actual website 
      }
    }
  }
  if ((successfulLogin == false) && (passwordFalse == false)){
    //don't want this message to show up if email exists but pass is wrong
    console.log(`could not find an account associated with ${eMail}`)
  }
}
//I feel like there are tons of security problems in this function, just thinking about all the ways 
//people try to trick and break login pages
signIn('xerxes.rocks@gmail.com', "don't guess this")
//signIn("asab@asab.com", "123456") // works with the other accounts too



//the products array has 3 elements and each has 6 properties. 
//Make a function called rateProduct which rates the product
//going to take a user ID, product, and rating as parameters
function rateProduct(userID, targetProduct, userRating){
  if((userRating < 0) || (userRating > 5)){
    console.log("please input a valid user rating")
    //here would re-prompt and re-call the rateProduct function
  }
  //going to assume parameters are valid and not do exhaustive testing here. 
  //the user would theoretically already have to be logged in to call the function in the first place
  else{
    let leftReview = false
    let newReviewIndex = 0
    for (const[key, value] of Object.entries(products)){
      //console.log(`${key} is index and ${value.description} is product`)
      if (targetProduct == value._id){
        //check if the user has already left a review
        for (const[key2, value2] of Object.entries(value.ratings)){
          //console.log(`${value2.userId}'s rating of ${value.description} is ${value2.rate} stars`)
          //just to figure out how to access items. it's like an object within an object.
          //this prints out all reviews on given product
          newReviewIndex = key2
          if(value2.userId == userID){
            console.log(`you have already left a ${value2.rate} star rating on the ${value.description}`)
            leftReview = true
          }
        }
        if(leftReview == false){
          value.ratings.push({userId:userID, rate:userRating}) // that line took 5 years to figure out
        }
        /* //just to test that the review shows up        
        for (const[key2, value2] of Object.entries(value.ratings)){
          console.log(`${value2.userId}'s rating of ${value.description} is ${value2.rate} stars`)
          newReviewIndex = key2
          if(value2.userId == userID){
            console.log(`you have already left a ${value2.rate} star rating on the ${value.description}`)
            leftReview = true
          }
        }
        */        
      }
    }
  }  
}

//rateProduct('Aubrey', 'eedfcf', 1)

//add a function called averageRating to calculate the average rating of a product
function averageRating(targetProduct){
  let meanRating = 0
  let numRatings = 0
  for (const[key, value] of Object.entries(products)){
    if(value._id == targetProduct){
      for (const[key2, value2] of Object.entries(value.ratings)){
        meanRating = meanRating + value2.rate
        numRatings = numRatings + 1
      }
      meanRating = meanRating / numRatings
      console.log(`average rating on ${value.description} is ${meanRating}`)
    }
  }
}
//wrote that in one try no references no errors one compile :)
//averageRating('eedfcf')

//create a function called likeProduct to like the product if it is not liked, and unlike it if it's liked
//taking userID and product as parameters
function likeProduct(userID, targetProductId){
  for (const[key, value] of Object.entries(products)){
    let liked = false
    if(value._id == targetProductId){
      for(const[key2, value2] of Object.entries(value.likes)){
        if(value2 == userID){
          liked = true
          value.likes.splice(key2,1)
          console.log(`you unliked ${value.description}`)
        }  
      }
      if(liked == false){
        value.likes.push(userID)
        console.log(`you liked ${value.description}`)
      }
    }
  }
}
/* //uncomment here to see like and unlike functionality
likeProduct('Aubrey', 'hedfcg')
likeProduct('Aubrey', 'hedfcg')
*/