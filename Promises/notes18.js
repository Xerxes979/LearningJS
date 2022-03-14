//Aubrey Gatewood 3/14/2022
// "I won't bite, unless you like" - Bruno Mars

//to understand promises, have to understand callbacks

let doSomething = callback => {
  setTimeout(() => {
    const skills = ['html', 'css', 'JS']
    callback('It did not go well', skills)
  }, 2000)
}

const callback = (err, result) => {
  if (err){
    return console.log(err)
  }
  return console.log(result)
}

//doSomething(callback) // returns 'it did not go well'

doSomething = callback => {
  setTimeout(() => {
    const skills = ['html', 'css', 'JS']
    callback(false , skills)
  }, 2000)
}
doSomething((err, result) => {
  if (err) {
    return console.log(err)
  }
  return console.log(result)
})

//create promises using the promise constructor. make a new one using keyword new, followed by Promise(), where in the parentheses it takes a callback function. the 2 parameters of the callback function are the resolve and reject functions
