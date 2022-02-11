let word = 'javascript'
word[0] = 'Y'
console.log(word)
let nums = [1,2,3]
let numbers = [1,2,3]
console.log('nums == numbers is ')
console.log(nums == numbers)

const PI = Math.PI
console.log(PI)
console.log(Math.round(PI))
console.log(Math.ceil(PI))
console.log(Math.random())
console.log(Math.sin(60))
console.log(Math.sin(0))


let firstName = 'Asabeneh'
let lastName = 'Yetayeh'
let space = ' '
let fullName = firstName + space + lastName // concatenation
console.log(fullName)

let country = 'Helsinki'
let personInfo = fullName + '. I live in ' + country
console.log(personInfo)

const paragraph = "My name is Asabeneh Yetayeh. I live in Finland, Helsinki.\
I am a teacher and I love teaching. I teach HTML, CSS, JavaScript, React, Redux, \
Node.js, Python, Data Analysis and D3.js for anyone who is interested to learn. \
In the end of 2019, I was thinking to expand my teaching and to reach \
to global audience and I started a Python challenge from November 20 - December 19.\
It was one of the most rewarding and inspiring experience.\
Now, we are in 2020. I am enjoying preparing the 30DaysOfJavaScript challenge and \
I hope you are enjoying too."
//the /'s are necessary to indicate that the string continues on next line
console.log(paragraph)