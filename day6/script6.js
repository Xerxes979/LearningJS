//loops
//I am really and truly re-covering the basics of programming here lol

//for loop
let countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'Iceland']
const newArr = []
for(let i = 0; i < countries.length; i++)
{
  newArr.push(countries[i].toUpperCase())
  console.log(countries[i].toUpperCase())
  //didn't know that you could push to a const, doesn't make a ton of sense
}

//I know while and do while

//for of loops are just like the abstract python loops that use "for element in array"
//it's good if you don't need the index, and then if you do need it, just use indexOf(element)
const numbers = [1,2,3,4,5,6,7,8,9]

for (const num of numbers)
{
  console.log(num)
}

const webTechs = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Node',
  'MongoDB'
]

// for (const tech of webTechs)
// {
//   console.log(tech[0]) // prints just first letter
// }

//continue is like break, except it just skips an iteration rather than ending the loop

//exercises

countries = [
  'Albania',
  'Bolivia',
  'Canada',
  'Denmark',
  'Ethiopia',
  'Finland',
  'Germany',
  'Hungary',
  'Ireland',
  'Japan',
  'Kenya'
]


const mernStack = ['MongoDB', 'Express', 'React', 'Node']

//write a script that generates a random number of random characters
//gonna make it between 0 and 30 for runtime's sake
let codeLength = Math.floor(Math.random()*30)
let code = ''
let possibleChars = [
  'q','w','e','r','t','y','u','i','o','p','a','s','d','f','g','h','j','k','l','z','x','c','v','b','n','m','1','2','3','4','5','6','7','8','9','0'
]
for (let i = 0; i < codeLength; i++)
{
  code = code + possibleChars[Math.floor(Math.random()*possibleChars.length)]
}
console.log(code)

//make an array of country names in all caps
let countriesCaps = []
for (let i = 0; i < countries.length; i++)
{
  countriesCaps.push(countries[i].toUpperCase())
}
console.log(countriesCaps)

//create an array of country name lengths
let countriesLengths = []
for (let i = 0; i < countries.length; i++)
{
  countriesLengths.push(countries[i].length)
}
console.log(countriesLengths)

//make a 2D array with the country name, the first 3 letters in all caps, and their name length
let countries2D = []
for (let i = 0; i < countries.length; i++)
{
  countries2D.push(countries[i], countriesCaps[i].slice(0,3), countriesLengths[i])
}
console.log(countries2D)

//print any countries containing "land"
let landArray = []
for (let i = 0; i < countries.length; i++)
{
  if (countries[i].includes('land'))
  {
    landArray.push(countries[i])
  }
  
}
console.log(landArray)
if (landArray.length = 0)
{
  console.log('there are no lands')
}

//reverse the fruitArray without .reverse
let fruitArray = ['banana', 'orange', 'mango', 'lemon'] 
let fruitInverse = []
for (let i = fruitArray.length - 1; i >= 0; i--)
{
  fruitInverse.push(fruitArray[i])
}
console.log(fruitInverse)

