//i got options, gonna spend this holiday locked in
//3/7/2022 Aubrey Gatewood

//constants: 
const constants = [2.72, 3.14, 9.81, 37, 100]
const countries = ['Finland', 'Estonia', 'Sweden', 'Denmark', 'Norway']
const rectangle = {
  width: 20,
  height: 10,
  area: 200,
  perimeter: 60
}
const users = [
    {
    name:'Brook',
    scores:75,
    skills:['HTM', 'CSS', 'JS'],
    age:16
    },
    {
    name:'Alex',
    scores:80,
    skills:['HTM', 'CSS', 'JS'],
    age:18
    },
    {
    name:'David',
    scores:75,
    skills:['HTM', 'CSS'],
    age:22
    },
    {
    name:'John',
    scores:85,
    skills:['HTML'],
    age:25
    },
    {
    name:'Sara',
    scores:95,
    skills:['HTM', 'CSS', 'JS'],
    age: 26
    },
    {
    name:'Martha',
    scores:80,
    skills:['HTM', 'CSS', 'JS'],
    age:18
    },
    {
    name:'Thomas',
    scores:90,
    skills:['HTM', 'CSS', 'JS'],
    age:20
    }
]

//iterate through the users array and get all the object keys using destructuring
for (const {name, scores, skills, age} of users){
    //console.log(name, scores, skills, age) // ez
}
//this is cool. makes things easier to get parts of objects

//find the people with fewer than 2 skills
for (const {name, skills} of users){ // only have to get parameters we need, saves processing time?
    if(skills.length < 2){
        //console.log(`${name} has ${skills.length} skills`)
    }
}

//destructure following arrays to objects in one line 
const student = ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]]
let [name, skills, scores, jsScore = scores[2], reactScore = scores[3]] = student // it's crazy that's valid syntax
//console.log(name, skills, jsScore, reactScore)

//write a function called convertArrayToObject to convert the array to a structure object
const students = [
    ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]],
    ['John', ['HTM', 'CSS', 'JS', 'React'], [85, 80, 85, 80]]
]

function convertArrayToObject(students){
    const studentObj = Object.fromEntries(students)
    return studentObj
}


console.log(convertArrayToObject(students))
//I don't think this is what I was supposed to do, but the instructions are very unclear

//copy the student object to newStudent without mutating original object and ... [there is definitely something missing in these instructions. the dots do not connect]

const student2 = {
    name: 'David',
    age: 25,
    skills: {
      frontEnd: [
        { skill: 'HTML', level: 10 },
        { skill: 'CSS', level: 8 },
        { skill: 'JS', level: 8 },
        { skill: 'React', level: 9 }
      ],
      backEnd: [
        { skill: 'Node',level: 7 },
        { skill: 'GraphQL', level: 8 },
      ],
      dataBase:[
        { skill: 'MongoDB', level: 7.5 },
      ],
      dataScience:['Python', 'R', 'D3.js']
    }
}
 
// Add Bootstrap with level 8 to the front end skill sets
// Add Express with level 9 to the back end skill sets
// Add SQL with level 8 to the data base skill sets
// Add SQL without level to the data science skill sets

student2.skills.frontEnd.push({skill: 'Bootstrap', level: 8})
student2.skills.backEnd.push({skill: 'Express', level: 9})
student2.skills.dataBase.push({skill: 'SQL', level: 8})
student2.skills.dataScience.push('SQL')
//that seemed too easy ... 

console.log(student2)