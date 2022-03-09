//Aurbey Gatewood 3/9/2022
//Not on campus, still taking classes

//everythingin JS is an object. Classes exist to create objects. classes are like object constructors, a blueprint for creating objects. We instantiate a class to create an Object. the class defines attributes and the behavior of the object. the object represents the class

//once we make a class, we can make an object from it whenever we want. this is called instantiation

//in the object section, we were talking about how to make an object literal. object literals are singletons, and if we want another one just like it, we have to write it. classes allow us to make many similar objects. this reduces repitition of code

//class names are defined in CamelCase
//syntax
class ClassName {
    //code here
}

//class Person{

//}
//const person = new Person()
//console.log(person)

//the constructor is a built in function that allows us to create a blueprint for the object. this refers to the class iteslf. 

class Person{
    constructor(firstName = 'Aubrey',
        lastName = 'Gatewood', 
        age = '21', 
        country = 'United States', 
        city = 'Louisville'
    ) {
        //console.log(this)
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
        this.country = country
        this.city = city
    }
}

const person = new Person()
console.log(person)

//all the keys are undefined here. we should pass the values of the properties when we instantiate to avoid this. 

const person1 = new Person('aubrey', 'gatewood', '21', 'US', 'louisville')
console.log(person1)
const person2 = new Person('xerxes', '979')
console.log(person2)

//can add defaults that will be put in the object if values are not provided

//class methods are JS functions inside the class


class NewPerson{
    constructor(firstName, lastName, age, country, city){
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
        this.country = country
        this.city = city
        this.score = 0
        this.skills = []
    }
    getFullName() {
        const fullName = this.firstName + ' ' + this.lastName
        return fullName
    } 
    get getScore(){ // this is a getter
        return this.score
    }  
    get getSkills(){
        return this.skills
    }
    set setScore(score){
        this.score += score
    }
    set setSkill(skill){
        this.skills.push(skill)
    }
    getPersonInfo(){
        let fullName = this.getFullName()
        let skills = 
            this.skills.length > 0 && 
            this.skills.slice(0, this.skills.length - 1).join(', ') + 
                ` and ${this.skills[this.skills.length - 1]}`
        let formattedSkills = skills ? `His skills include: ${skills}` : ''

        let info = `${fullName} is ${this.age}. He lives in ${this.city}, ${this.country}. ${formattedSkills}`
        return info
    }
    static favoriteSkill() {
        const skills = ['HTML', 'CSS', 'JS', 'python', 'C']
        const index = Math.floor(Math.random() * skills.length)
        return skills[index]
    }
    static showDateTime(){
        let now = new Date()
        let year = now.getFullYear()
        let date = now.getDate()
        let month = now.getMonth() + 1
        let hours = now.getHours()
        let minutes = now.getMinutes()
        if (hours < 10){
            hours = '0' + hours
        }
        if (minutes < 10) { 
            minutes = '0' + minutes
        }
        let dateMonthYear = date + '/' + month + '/' + year
        let time = hours + ':' + minutes
        let fullTime = dateMonthYear + ' ' + time
        return fullTime
    }
}

const person3 = new NewPerson('Aubrey', 'Gatewood', 21, 'United States', 'Louisville')

console.log(person3.getFullName())
console.log(person3.skills)

//methods can be regular, getters, or setters. 
//I know there's a massive beef over Java and JavaScript having the same name and being nothing alike, but this is the only time since senior year of HS in AP java that I have heard the words "getter" and "setter" and I've been in like 7 different coding classes since then

person3.setScore = 1
person3.setSkill = 'procrastinating'
person3.setSkill = 'panicking'
person3.setSkill = 'performing under the immense pressure that ensues'

console.table(person3.skills)

console.log(person3.getPersonInfo())

//the static keyword defines a static method for a class. they are not called on instances of the class. instead they are called on the class itself. They are usually utility functions, like functions to create or clone objects. an example is Date.now(). The now method is called directly from the class.

console.log(NewPerson.favoriteSkill())
console.log(NewPerson.showDateTime())

//inheritance
//using inheritance, we can access all the properties and the methods of the parent class. this reduces repetition of code. if you remember, we have a Person parent class and we will create children from it. Our children class could be student, teacher, etc. 

//making a Student child class
class Student extends NewPerson{

    constructor(firstName, lastName, age, country, city, gender){
        super(firstName, lastName, age, country, city)
        this.gender = gender
    }

    saySomething() {
        console.log('I am a child of the parent class')
    }
    getPersonInfo() {
        let fullName = this.getFullName()
        let skills =
          this.skills.length > 0 &&
          this.skills.slice(0, this.skills.length - 1).join(', ') +
            ` and ${this.skills[this.skills.length - 1]}`
    
        let formattedSkills = skills ? `His skills include: ${skills}` : ''
        let pronoun = this.gender == 'Male' ? 'He' : 'She'
    
        let info = `${fullName} is ${this.age}. ${pronoun} lives in ${this.city}, ${this.country}. ${formattedSkills}`
        return info
    }
}

const s1 = new Student ('Isaiah', 'Gatewood', 5, 'United States', 'New Castle', 'Male')
console.log(s1)
console.log(s1.saySomething()) // this is from child class
console.log(s1.getFullName()) // inherited from parent class
console.log(s1.getPersonInfo()) // inherited from parent class, but overridden by child class
console.log()

