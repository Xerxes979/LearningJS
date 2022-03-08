//hell yeah. console commands are my jam
//aubrey gatewood 3/8/2022

//there are actually 3 output methods: console.log(), document.write(), and document.getElementById()

//console.log()
console.log('30 days of JavaScript') // yeah ... this takes a lot longer than 30 days
console.log('%d %s of JavaScript', 30, 'Days') // this is like C
console.log('%c30 days of javascript', 'color:green')
//console.warn() gives a warning in a browser. for instance deprecated packages or bad practices
console.warn('you are using React. do not touch the DOM. Virtual DOM will handle the DOM!')
console.warn('a warning is different from an error')
console.error('we all make mistakes. it\'s ok. this is an error message')

//console.table() displays data as a table in the console
const names = ['aubrey', 'david', 'brook', 'john']
console.log(names)
console.table(names) // holy moly this looks so much better

const users = [
    {
      name: 'Asabeneh',
      title: 'Programmer',
      country: 'Finland',
      city: 'Helsinki',
      age: 250
    },
    {
      name: 'Eyob',
      title: 'Teacher',
      country: 'Sweden',
      city: 'London',
      age: 25
    },
    {
      name: 'Asab',
      title: 'Instructor',
      country: 'Norway',
      city: 'Oslo',
      age: 22
    },
    {
      name: 'Matias',
      title: 'Developer',
      country: 'Denmark',
      city: 'Copenhagen',
      age: 28
    }
]
console.table(users)

//console.time() can be used to figure out how long an operation takes. using console.timeEnd() will output the time in milliseconds since the timer was started
const countries = [
    ['Finland', 'Helsinki'],
    ['Sweden', 'Stockholm'],
    ['Norway', 'Oslo']
]

console.time('regular for loop')
for (let i = 0; i < countries.length; i++){
    console.log(countries[i][0], countries[i][1])
}
console.timeEnd('regular for loop')

console.time('for of loop')
for (const [name, city] of countries) {
  console.log(name, city)
}
console.timeEnd('for of loop')

console.time('forEach loop')
countries.forEach(([name, city]) => {
  console.log(name, city)
})
console.timeEnd('forEach loop')

console.info('30 days of JS is trending on gitHub.')
console.info('30 days of fullstack might be released') // bro drop the album
// how is this different from console.log() tho?

//console.assert() drops an error message if the assertion is false, if true nothing happens. parameter 1 is the expression to be tested, parameter 2 is the error message to be displayed

console.assert(4 > 3, '4 is greater than 3')
console.assert(4 < 3, '*ahem* 4 is greater than 3')

for (let i = 0; i <= 10; i += 1){
    let errorMessage = `${i} is not even`
    console.log('the # is ' + i)
    console.assert(i % 2 === 0, {number: i, errorMessage: errorMessage})
}

//console.group() can group different log groups. 
console.group('Names')
console.log(names)
console.groupEnd()

console.group('Countries')
console.log(countries)
console.groupEnd()

//it just indents them together

//console.count counts the number of times that console.count() is called. it takes a string label parameter. it is very helpful to count the # of times a function is called. 

const func = () => {
    console.count('Function is called ')
}

func()
func()
func()

//console.clear()