//I really wanna swear in these hype comments, but I'm not, on the off chance that an actual professional is going to look at these. So if that's you, I just want you to know I'm making real fucking sacrifices here.

//Aubrey Gatewood 3/8/2022

//JS is a loosely-typed language. this means you can get runtime errors for trying to access an undefined variable or function
//the language's error handling mechanism is a try catch finally block.

try{
    //code that throws error
} catch (err) {
    //code if error occurrs
} finally {
    //code that happens whether there is an error or not
}

//try is for sus code that might throw an error, so you can be ready for that error
//catch is usually for displaying error parameters, or mitigating the effects of the try block
//finally is for completing remaining tasks or resetting variables

try {
    let lastName = 'Yetayeh'
    let fullName = firstName + ' ' + lastName
} catch (err) {
    console.log('name of the error: ', err.name)
    console.log('error message: ', err.message)
} finally {
    console.log('in any case I will be executed')
}

//the throw statement allows us to create a custom error. use it to throw an exception. 
//throw new Error('Required')

const throwErrorExampleFun = () => {
    let message
    let x = prompt('Enter a number: ')
    try {
        if (x == '') throw 'empty'
        if (isNaN(x)) throw "not a number"
        x = Number(x)
        if (x < 5) throw 'too low'
        if (x > 10) throw 'too high'
    } catch (err){
        console.log(err)
    }
}

//throwErrorExampleFun()

//error types:
    //reference error: an illegal reference has occurred
    //syntax error: a syntax error has occurred
    //type error: a type error has occurred


//there are no exercises for error catching