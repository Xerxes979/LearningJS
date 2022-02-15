let arr = []
console.log(arr) // []

const numbers = [0, 3.14, 9.81, 37, 98.6, 100] // array of numbers
const strings = ['banana', 'orange', 'mango', 'lemon'] // array of strings

console.log("Numbers: ", numbers)
console.log("number of numbers: ", numbers.length)

const arr2 = [
  'aubrey',
  21,
  true,
  {country: 'united states', city: 'Louisville'},
  {skills: ['c', 'makefile', 'python', 'systemVerilog', 'JS']}
]
console.log(arr2)

//using split
let js = 'javascript'
const charsInJavascript = js.split('')
console.log(charsInJavascript)

//indexes start at 0
let lastIndex = strings.length - 1
let lastFruit = strings[lastIndex]
console.log(lastFruit) // lemon

strings[lastIndex] = 'apple'
console.log(strings[lastIndex]) // now apple

const eightEmptyValues = Array(8)
console.log(eightEmptyValues)

const eightZeroValues = Array(8).fill(0)
console.log(eightZeroValues)

const firstList = [1,2,3]
const secondList = [4,5,6]
const thirdList = firstList.concat(secondList)
console.log(thirdList) // [1,2,3,4,5,6]

console.log(numbers.indexOf(37))//returns the index of the item if in the array
//otherwise -1, good for checking if something is in the array
// using .lastIndexOf() gets the last, rather than first, index of that item in the array

//can also use .includes(element) if you want a boolean
// .isArray checks the datatype

const names = ['asabeneh', 'matthias', 'elias', 'brook']
console.log(names.toString())
console.log(names.join(" && "))

//slice: takes out items in a range, takes starting and ending position as parameters
let numberstwo = [1,2,3,4,5,6]
console.log(numberstwo.slice(1,4)) // doesn't include first and last item

//splice: takes starting position, number of items to be removed, and number of items to be added
console.log('splice stuff')
//console.log(numberstwo.splice(0)); // removes all elements
console.log(numberstwo.splice(0,1)); // removes first item
console.log('line 60');
console.log(numberstwo.splice(3, 3, 7, 8, 9)); // removes starting at item 3, removes 3 items, adds 7,8,9
console.log(numberstwo); // console.log using the splice just prints what was spliced out, not the actual array

//push (I think this is somewhat like append)
arr = ['item1', 'item2', 'item3']
arr.push('new item')
console.log(arr)

numbers.push(6)
console.log(numbers) // unlike splice, this just prints the array after the addition

//pop removes items from the end (push and pop, makes sense)
numbers.pop()
console.log(numbers)

//shift removes an element from the beginning
numbers.shift()
console.log(numbers)

//unshift adds an element to the beginning
numbers.unshift(0)
console.log(numbers)

//reverse reverses the array
numbers.reverse()
console.log(numbers)

//sort sorts an array in ascending order
numbers.sort()
console.log(numbers) // it sorts in alphabetical order, not numerical order. 
//so 0,100,3.14,37,9.81,98.6

//arrays of arrays
const frontEnd = ['html,css,js,react,redux']
const backEnd = ['node','express','mongodb']
const fullStack = [frontEnd, backEnd]





//exercises

//array of 10 student ages
let ages = [19,22,19,24,20,25,26,24,25,24,26]

//sort and find min and max age
console.log(ages.sort()) // I only did this because there are no decimals, so it works
ages = ages.sort()
//new ages is [19, 19, 20, 22, 24, 24, 24, 25, 25, 26]
//find median age
if ((ages.length % 2) == 0)
{
  //take middle two and average
  console.log('line 113, in if')
  let medianone = (ages.splice((ages.length / 2), 1))
  let mediantwo = (ages.splice(((ages.length / 2) + 1), 1))
  let median = (Number(medianone) + Number(mediantwo)) / 2
  console.log(median)
}
else
{
  //take middle item
  let median = Number((ages.splice((ages.length / 2), 1)))
  console.log('median is', median)
}

//find mean age
let mean = 0
for (let i = 0; i < ages.length; i++)
{
  mean += Number(ages[i])
}
mean = mean / Number(ages.length)
console.log('mean is ', mean)

//find range
let max = Number.MIN_SAFE_INTEGER
let min = Number.MAX_SAFE_INTEGER
console.log(ages)
for (let i = 0; i < ages.length; i++)
{
  if (ages[i] > max)
  {
    max = ages[i]
  }
  if (ages[i] < min)
  {
    min = ages[i]
  }
}
console.log('max is ',max)
console.log('min is ', min)

//slice first 10 countries in country array
const countries = [
  'Afghanistan',
  'Albania',
  'Algeria',
  'Andorra',
  'Angola',
  'Antigua and Barbuda',
  'Argentina',
  'Armenia',
  'Australia',
  'Austria',
  'Azerbaijan',
  'Bahamas',
  'Bahrain',
  'Bangladesh',
  'Barbados',
  'Belarus',
  'Belgium',
  'Belize',
  'Benin',
  'Bhutan',
  'Bolivia',
  'Bosnia and Herzegovina',
  'Botswana',
  'Brazil',
  'Brunei',
  'Bulgaria',
  'Burkina Faso',
  'Burundi',
  'Cambodia',
  'Cameroon',
  'Canada',
  'Cape Verde',
  'Central African Republic',
  'Chad',
  'Chile',
  'China',
  'Colombi',
  'Comoros',
  'Congo (Brazzaville)',
  'Congo',
  'Costa Rica',
  "Cote d'Ivoire",
  'Croatia',
  'Cuba',
  'Cyprus',
  'Czech Republic',
  'Denmark',
  'Djibouti',
  'Dominica',
  'Dominican Republic',
  'East Timor (Timor Timur)',
  'Ecuador',
  'Egypt',
  'El Salvador',
  'Equatorial Guinea',
  'Eritrea',
  'Estonia',
  'Ethiopia',
  'Fiji',
  'Finland',
  'France',
  'Gabon',
  'Gambia, The',
  'Georgia',
  'Germany',
  'Ghana',
  'Greece',
  'Grenada',
  'Guatemala',
  'Guinea',
  'Guinea-Bissau',
  'Guyana',
  'Haiti',
  'Honduras',
  'Hungary',
  'Iceland',
  'India',
  'Indonesia',
  'Iran',
  'Iraq',
  'Ireland',
  'Israel',
  'Italy',
  'Jamaica',
  'Japan',
  'Jordan',
  'Kazakhstan',
  'Kenya',
  'Kiribati',
  'Korea, North',
  'Korea, South',
  'Kuwait',
  'Kyrgyzstan',
  'Laos',
  'Latvia',
  'Lebanon',
  'Lesotho',
  'Liberia',
  'Libya',
  'Liechtenstein',
  'Lithuania',
  'Luxembourg',
  'Macedonia',
  'Madagascar',
  'Malawi',
  'Malaysia',
  'Maldives',
  'Mali',
  'Malta',
  'Marshall Islands',
  'Mauritania',
  'Mauritius',
  'Mexico',
  'Micronesia',
  'Moldova',
  'Monaco',
  'Mongolia',
  'Morocco',
  'Mozambique',
  'Myanmar',
  'Namibia',
  'Nauru',
  'Nepal',
  'Netherlands',
  'New Zealand',
  'Nicaragua',
  'Niger',
  'Nigeria',
  'Norway',
  'Oman',
  'Pakistan',
  'Palau',
  'Panama',
  'Papua New Guinea',
  'Paraguay',
  'Peru',
  'Philippines',
  'Poland',
  'Portugal',
  'Qatar',
  'Romania',
  'Russia',
  'Rwanda',
  'Saint Kitts and Nevis',
  'Saint Lucia',
  'Saint Vincent',
  'Samoa',
  'San Marino',
  'Sao Tome and Principe',
  'Saudi Arabia',
  'Senegal',
  'Serbia and Montenegro',
  'Seychelles',
  'Sierra Leone',
  'Singapore',
  'Slovakia',
  'Slovenia',
  'Solomon Islands',
  'Somalia',
  'South Africa',
  'Spain',
  'Sri Lanka',
  'Sudan',
  'Suriname',
  'Swaziland',
  'Sweden',
  'Switzerland',
  'Syria',
  'Taiwan',
  'Tajikistan',
  'Tanzania',
  'Thailand',
  'Togo',
  'Tonga',
  'Trinidad and Tobago',
  'Tunisia',
  'Turkey',
  'Turkmenistan',
  'Tuvalu',
  'Uganda',
  'Ukraine',
  'United Arab Emirates',
  'United Kingdom',
  'United States',
  'Uruguay',
  'Uzbekistan',
  'Vanuatu',
  'Vatican City',
  'Venezuela',
  'Vietnam',
  'Yemen',
  'Zambia',
  'Zimbabwe',
  'MadeUpCountryToTestEvenArraySplit'
]

let countrySlice = countries.slice(0,9)
console.log(countrySlice)

//find the middle country in countries array
let evenVar = 0
if ((countries.length % 2) == 0)
{
  //take middle -1
  let medianOne = (countries.splice((countries.length / 2), 1))
  let medianTwo = (countries.splice((countries.length / 2) + 1, 1))
  console.log(medianOne, medianTwo, ' are the median countries')
  evenVar = 1
}
else
{
  //take middle item
  let median = (countries.splice((countries.length / 2), 1))
  console.log('median country is', median)
  evenVar = 0
}

//divide into 2 equal arrays if even, one more in first array if uneven
if (evenVar == 1)
{
  //the array is even
  let arrayOne = countries.slice(0, (countries.length / 2))
  let arrayTwo = countries.slice((countries.length / 2) + 1, countries.length - 1)
  console.log(arrayOne.length, arrayTwo.length)
}
else
{
  //the array is uneven
  let arrayOne = countries.slice(0, (countries.length / 2))
  let arrayTwo = countries.slice((countries.length / 2) + 1, countries.length - 1)
  console.log(arrayOne.length, arrayTwo.length)
}