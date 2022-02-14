//conditionals
//2/14/22

//you know how if, else, and elif work

//switches (throwback to ece270 lol)
caseValue = null
switch(caseValue)
{
    case 1:
        //code
        break
    case 2:
        //code
        break
    case 3:
        //code
        break
    default:
        //code
        console.log("went to the default option")
        //null input sends you here
}

//another example

let dayUserInput = prompt('What day is today ?')
let day = dayUserInput.toLowerCase()

switch (day) {
  case 'monday':
    console.log('Today is Monday')
    break
  case 'tuesday':
    console.log('Today is Tuesday')
    break
  case 'wednesday':
    console.log('Today is Wednesday')
    break
  case 'thursday':
    console.log('Today is Thursday')
    break
  case 'friday':
    console.log('Today is Friday')
    break
  case 'saturday':
    console.log('Today is Saturday')
    break
  case 'sunday':
    console.log('Today is Sunday')
    break
  default:
    console.log('It is not a week day.')
}

//ternary operators
let isRaining = true
isRaining
    ? console.log("you need a raincoat")
    : console.log('no need for a raincoat')

//exercise: write a program to tell the # of days in a month
let month = prompt('Enter a month: ')

switch (month)
{
    case 'January':
        alert('January has 31 days.')
        break
    case 'February':
        let leap = prompt('is it a leap year?', 'ok is yes, cancel is no')
        leap
            ? alert('February has 29 days on a leap year')
            : alert('February has 28 days on a non-leap year')
        break
    case 'March':
        alert('March has 31 days')
        break
    case 'April':
        alert('April has 30 days')
        break
    default:
        console.log("I only did january through april. make sure to capitalize the month")
        break
}
