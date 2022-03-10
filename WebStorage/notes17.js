//Aubrey Gatewood 3/10/2022

//web storage, session storage and local storage, is an HTML5 API offering benefits over traditional cookies. before html5 data had to be transferred in cookies with every server request. the limit was 4kb per cookie. Web storages can store a lot more (5mb) of data and are never transferred to the server. and all sites from the same or similar origin can store and access the data. 
// this data is accessed with JS, so you can leverage client-side scripting for a lot of things that usually required server-side processing. 
//the 2 options are sessionStorage and localStorage. they are very similar except localStorage has no expiration date, and sessionStorage is cleared when the page session ends. 
//in both storage types, the data stored is specific to the protocol of the page
//keys and values are all strings
//sessionStorage and localStorage have similar methods
//no data is accessible between different browsers


//there are 5 methods for local storage: setItem(), getItem(), removeItem(), clear(), and key()


//web storage uses include: temoprary data, shopping cart items, things necessary offline, user authentication (didn't think of this), and any other data that needs to be available between user sessions
//session storage is for information that is useless after the page is closed, or information that would cause another window open to the same site to malfunction

//HTML5 allows 2 objects for storing data: windows.localStorage, which stores data with no expiration date, and windows.sessionStorage which stores data for one session

//setting an item
//localStorage.setItem('key', 'value')

localStorage.setItem('firstName', 'aubrey' ) // don't have to stringify here because string
//console.log(localStorage)

localStorage.setItem('age', 200)
//console.log(localStorage)

let skills = ['HTML', 'CSS', 'JS', 'React']
//need to stringify to keep the format
const skillsJSON = JSON.stringify(skills, undefined, 4) // remember undefined is the filter parameter
localStorage.setItem('skills', skillsJSON)
console.log(localStorage) //output looks different from sample code


skills = [
  { tech: 'HTML', level: 10 },
  { tech: 'CSS', level: 9 },
  { tech: 'JS', level: 8 },
  { tech: 'React', level: 9 },
  { tech: 'Redux', level: 10 },
  { tech: 'Node', level: 8 },
  { tech: 'MongoDB', level: 8 }
]

let skillJSON = JSON.stringify(skills)
localStorage.setItem('skills', skillJSON)
console.log(localStorage)

//to store an object in local storage, it has to be stringified
const user = {
  firstName: 'Aubrey',
  age: 22,
  skills: ['HTML', 'css', 'JS', 'react']
}
const userText = JSON.stringify(user, undefined, 4)
localStorage.setItem('user', userText)

localStorage.getItem('Key')
let firstName = localStorage.getItem('firstName')
let age = localStorage.getItem('age')
skills = localStorage.getItem('skills')
console.log(firstName, age, skills) // not sure this outputs correctly
skills = localStorage.getItem('skills')
let skillsObj = JSON.parse(skills, undefined, 4)
console.log(skillsObj) // should give 4 items but gives 7. it's like original entry can't be overwritten

localStorage.clear()
console.log(localStorage) // at least that works lol

