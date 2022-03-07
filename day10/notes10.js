// what's poppin?
//Aubrey Gatewood 3/7/22

//a set is a collection of elements. sets can only contain unique elements.

//making a set from an array
const languages = [
    'English',
    'Finnish',
    'English',
    'French',
    'Spanish',
    'English',
    'French',
]

const setOfLanguages = new Set(languages)
console.log(setOfLanguages)

//set is an iterable object

for (language of setOfLanguages) {
    console.log(language)
}

//adding an element to a set

const companies = new Set()
console.log(companies.size) //0
companies.add('Google')
companies.add('Facebook')
companies.add('Amazon')
companies.add('Oracle')
companies.add('Microsoft')

console.log(companies.size) //5
console.log(companies)

//can also loop to add elements to a set

//can delete elements using a delete method
console.log(companies.delete('Google'))
console.log(companies)
//Notably, there aren't indeces here. sets are unordered structures

//the has method can show if an element is present in a set
console.log(companies.has('Apple')) // F
console.log(companies.has('Amazon')) // T

//clearing a set
companies.clear()
console.log(companies)

//another use case of set is to count the unique elements
const numbers = [5,3,2,5,5,9,4,5]
const setOfNumbers = new Set(numbers)
console.log(setOfNumbers)

//to find the union of sets (A U B), use the spread operator

let a = [1,2,3,4,5]
let b = [3,4,5,6]
let c = [...a, ...b]
let A = new Set(a)
let B = new Set(b)
let C = new Set(c)
console.log(C) // {1,2,3,4,5,6}

//intersection of sets is found with filter. (A ∩ B)
c = a.filter((num) => B.has(num))
C = new Set(c)
console.log(C) // {3,4,5}

//difference of sets
c = a.filter((num) => !B.has(num))
C = new Set(c)
console.log(C) // {2,1}

//empty map
const map = new Map()
console.log(map)

//making map from array
countries = [
    ['Finland', 'Helsinki'],
    ['Sweden', 'Stockholm'],
    ['Norway', 'Oslo'],
]

const map2 = new Map(countries)
//console.log(map2)
//console.log(map2.size)

//adding values to the map
const countriesMap = new Map()
countriesMap.set('Finland', 'Helsinki') // .set is what appends items to a map, except it's not really appending because there is no end or beginning, it's just adding to the map
countriesMap.set('Sweden', 'Stockholm')
countriesMap.set('Norway', 'Oslo')
console.log(countriesMap)
console.log(countriesMap.size)

//getting a value from a Map
console.log(countriesMap.has('Finland'))