//Aubrey GAtewood 3/7/22
//the brain juice is flowing

//find a union b
let a = [4,5,8,9]
let b = [3,4,5,7]
let c = [...a, ...b]
const countries = ['Finland', 'Sweden', 'Norway']

//let A = new Set(c)
//console.log(A)

//find a intersection b
let D = new Set(a)
let E = new Set(b)
let g = a.filter((num) => E.has(num))
let C = new Set (g)
console.log(C)

//find a complement b
let f = b.filter((num) => !D.has(num))
let F = new Set(f)
console.log(F)

//the level 3 exercises are mistakenly taken from day 9