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

let country = 'Finland'
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

tempTab = 'this is a tab -> \t did you see it?'
console.log(tempTab)

console.log('static typed 2 + 3 = 5')
let a = 2
let b = 3
console.log(`the sum of ${a} and ${b} is ${a+b}`)//have to use ` here, ' and " don't work 

//can also get truth output
a = 3
b = 2
console.log(`${a} is greater than ${b}: ${a > b}`)

//a string is a primitive datatype that can't be directly modified after it's created. 
//there are string methods to work on them once they're created

let js = 'Javascript'
console.log(js.length) //10
//access characters using indexes

let lastIndex = js.length - 1
console.log(js)
console.log(js[lastIndex])

console.log(js.substring(4,6))
//takes starting index and stopping index, not including char at stop index

console.log(country.substring(4))
//giving just the starting index makes it print rest of string

console.log("string split stuff starting\n I put in a newline")
let string = '30 days of javascript'
console.log(string.split()) // changes to array of chars
console.log(string.split(' ')) // splits to an array on spaces

firstName = 'Aubrey'
console.log(firstName.split())//makes an array ["Aubrey"]
console.log(firstName.split(' '))//makes an array at each letter ["A", "u", "b", "r", "e", "y"]
//can split on any character or combination of characters

string = '    30 days of javascript     '
console.log(string)
console.log(string.trim(' '))
console.log(string.trim()) // still removes leading and trailing spaces


console.log("include and replace \n stuff is starting")
console.log(string.includes('days'))//returns a bool, case sensitive, can also get word fragments or
//individual characters

string = '30 days of javascript'
console.log(string.replace('javascript', 'python'))//30 days of python

country = 'finland'
console.log(country.replace('fin', 'noman'))

//charAt() takes index and returns value at that index
console.log(string.charAt(0))


//charCodeAt() gets the ASCII code of the character at the given index
lastIndex = string.length-1
console.log(string.charCodeAt(lastIndex))

//indexOf() returns the starting index of a substring if it exists in given string
//otherwise returns -1
console.log('indexOf')
console.log(string.indexOf('d'))
console.log(string.indexOf('days'))
console.log(string.indexOf('z'))

//lastIndexOf does the same thing except finds the last instance of the substring and returns first char
//location

//I'm just commenting the rest of these because string manipulation isn't that important.
//will actually write any that surprise me

//concat() joins multiple substrings
let string2 = '30'
console.log(string2.concat(' days', ' of', ' javascript'))

//startsWith() returns a boolean based on the char or substring
//endsWith() is the same

console.log('strings.search can use regex')
//string.search() just returns the index of the first match
//can use regex
string = 'I love JavaScript. If you do not love JavaScript what else can you love.'
console.log(string.search('love'))          // 2
console.log(string.search(/javascript/gi))  // 7
//g means search whole text, i means case insensitive
string = 'I love JavaScript. If you do not love JavaScript what else can you love.'
console.log(string.match('love'))

console.log('oooh boy, we are doing regexes now')

let txt = 'In 2019, I ran 30 Days of Python. Now, in 2020 I am super exited to start this challenge'
let regEx = /\d+/
//d with an escape character means digit not the letter d
//+ means i or more digits
//g means global, search everywhere

console.log(txt.match(regEx))
console.log(txt.match(/\d+/g))

console.log('string.repeat(n) repeats a string n times')
string = 'love'
console.log(string.repeat(10))

console.log('now on to data types')
firstName = 'Asabeneh' //string
lastName = 'Yetayeh' //string
country = 'Finland' //string
let city = 'Helsinki' //string
let age = 250 //number
let job //undefined because no value assigned

console.log(typeof 'Asabeneh')
console.log(typeof NaN)
console.log(typeof false)
console.log(typeof job)
console.log(typeof null)

//casting data types
//remember when doing math to cast string numbers as ints of floats, otherwise it will make an error
//to do this can use parseInt(), Number(), or plus sign (+)
let num = '10'
let numInt = parseInt(num)
console.log(numInt)

num = '10'
numInt = Number(num)
console.log(numInt)

num = '10'
numInt = +num
console.log(numInt) // all 3 return 10

//parseFloat() does the same thing but makes a float. Number() and + both return floats by default

//select exercises
console.log('1 1 1 1 1\n2 1 2 4 8\n3 1 3 9 27')

//'Love is the best thing in this world. Some found their love and some are still looking for their love.' 
//Count the number of word love in this sentence.

string = 'Love is the best thing in this world. Some found their love and some are still looking for their love.'
let temp = string.match(/love/ig) // search whole thing and case insensitive
let size = temp.length
console.log(size)

//clean and find the most frequent word:
const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'
//console.log(sentence.replace(/%|\$|@|&|#|;|\.|,|!|\?/g, ''))
//used a regex. | means or. had to use \$ because $ is a special character in strings by itself
let newSplit = sentence.replace(/%|\$|@|&|#|;|\.|,|!|\?/g, '')
newSplit = newSplit.toLowerCase()
console.log(newSplit)
newSplit = newSplit.split(' ')
//counting word frequencies
//for each entry in the split, count the number of times it shows up in the whole split. 
//append that entry to an array that is the same length as the string
//find the largest number in the array
//that is the word
var x = new Array(newSplit.length);
console.log('got to line 209')
let tempSum = 0
let tempI = 0
let tempJ = 0
for (let i = 0; i < newSplit.length; i++)
{
    tempSum = 0
    for (let j = 0; j < newSplit.length; j++)
    {
        if (newSplit[i] == newSplit[j])
        {
            tempSum = tempSum + 1
        }
    }
    tempI = i
    x[tempI] = tempSum
    //console.log(tempSum)
    //console.log(newSplit[i])           
}
console.log('got to line 229')
console.log(x)
let max = 0
let highIndex = 0
for (let i = 0; i < x.length; i++)
{
    if (max < x[i])
    {
        max = x[i]
        highIndex = i
    }
}
console.log('the most frequent word is ')
console.log(newSplit[highIndex])
console.log('and it appeared this many times: ')
console.log(max)