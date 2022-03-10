//Aubrey Gatewood 3/10/2022

localStorage.clear() // have to clear here, or there is going to be data in the localstorage from last run
//store first name, last name, age, country, city in localstorage
const personInfo = {
    firstName: 'Aubrey',
    lastName: 'Gatewood',
    age: '21',
    country: 'United States',
    city: 'Louisville'
}

let personJSON = JSON.stringify(personInfo)
localStorage.setItem('personalInfo', personJSON)
console.log(localStorage)

//Create a student object. The student object will have first name, last name, age, skills, country, enrolled keys and values for the keys. Store the student object in your browser localStorage.

const student = [
    firstName = 'aubrey',
    lastName = 'gatewood',
    age = 200, // this repetition is putting years on my life
    country = 'united states',
    courses = {
        engineering: 'engr162',
        programming: 'ece264',
        math: 'integral calculus',
        history: 'HIST250',
        circuits: 'ece270'
    }
]
localStorage.clear()
let studentString = JSON.stringify(student)
localStorage.setItem('studentInfo', studentString)
console.log(localStorage)