//this stuff should have been day 3 content. so useful
//aubrey gatewood 3/8/2022

//use console.assert
console.assert((10 > 2 * 10), 'yo dummy 10 < 20')
console.warn('this is a warning. next time you get a visit from console.error')
console.error('you asked ... here\'s your crash')


//check the speed differences between while, for, for of, and forEach
let test = 0
console.time('1000000 while iterations')
while(test < 1000000){
    test++
    test--
    test++
}
console.timeEnd('1000000 while iterations')

console.time('1000000 for iterations')
for(i = 0; i < 1000000; i++){
    test--
    test++
}
console.timeEnd('1000000 for iterations')

let testArray = Array.from(Array(1000000).keys())
console.time('1000000 for of iterations')
for (x of testArray){
    test++
    test--
}
console.timeEnd('1000000 for of iterations')

console.time('1000000 forEach iterations')
testArray.forEach(function(){
    test++
    test--
})
console.timeEnd('1000000 forEach iterations')

console.log('well I suppose this is why C is so fast. it doensn\'t even have for each or for of methods. For or While or no Compile lol')