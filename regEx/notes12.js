//*****I'm from kentucky but this ain't no ******* dixie chicks
//aubrey gatewood 3/8/22
//regex

//I went though this hell once in mython data sci, but I guess I'm going to do it again. 

//RegExp is a small programming language that helps to find patterns in data. it works on different data types. To use it in JS, we can either use the RegExp constructor, or declare our own pattern using 2 forward slashes followed by a flag. 
//regex takes 2 parameters: a required search pattern and an optional flag
//a pattern is a text or any form of pattern with some level of similarity
//flags: 
    //g is the global flag, meaning to look for the pattern in the whole text. 
    //i means case insensitive
    //m means multiline

//without flag
let pattern = 'love'
let regEx = new RegExp(pattern)

//with flag
let flag = 'gi'
let regExp2 = new RegExp(pattern, flag)

//without using constructor
let regEx3 = /love/gi

//testing for a match
let str = 'i love javascript'
pattern = /love/
let result = pattern.test(str)
console.log(result) // true

result = str.match(pattern)
console.log(result) // including the g flag just returns the word. without the g flag it only find the first one and gives you its index

//search() tests for a match in a string and returns the index of the match or -1 if no matches

result = str.search(pattern)
console.log(result) // 2

//replace() executes a search for a match in a string and replaces the matched substring with a replacement substring
let txt = 'Python is the most beautiful language that a human being has ever created. I recommend Python as a first programming language'
matchReplaced = txt.replace(/Python|python/g, 'JavaScript') 
console.log(matchReplaced)

txt = '%I a%m te%%a%%che%r% a%n%d %% I l%o%ve te%ach%ing.\
T%he%re i%s n%o%th%ing as m%ore r%ewarding a%s e%duc%at%i%ng a%n%d e%m%p%ow%er%ing \
p%e%o%ple.\
I fo%und te%a%ching m%ore i%n%t%er%%es%ting t%h%an any other %jobs.\
D%o%es thi%s m%ot%iv%a%te %y%o%u to b%e a t%e%a%cher.'
//good god that's ugly

matches = txt.replace(/%/g, '')
console.log(matches)

//[]: a set of characters
    //[a-c] is a b or c
    //[a-z] is all lowercase letters
    //[A-Z] is all uppercase letters
    //[A-Za-z0-9] is any character a-z, A-Z, and 0-9


// \: uses to escape special characters
// \d mean:match where the string contains digits (numbers from 0-9)
// \D mean: match where the string does not contain digits

// . : any character except new line character(\n)
// ^: starts with

// r'^substring' eg r'^love', a sentence which starts with a word love
// r'[^abc] mean not a, not b, not c.

// $: ends with

// r'substring$' eg r'love$', sentence ends with a word love

// *: zero or more times

// r'[a]*' means a optional or it can be occur many times.

// +: one or more times

// r'[a]+' mean at least once or more times

// ?: zero or one times

// r'[a]?' mean zero times or once

// {3}: Exactly 3 characters
// {3,}: At least 3 character
// {3,8}: 3 to 8 characters
// |: Either or

// r'apple|banana' mean either of an apple or a banana

// (): Capture and group

//examples
pattern = '[Aa]pple' // means A or a then pple
txt = 'Apple and banana are fruits. An old cliche says an apple a day a doctor way has been replaced by a banana a day keeps the doctor far far away. '
matches = txt.match(pattern)
console.log(matches)

//this is a very long lesson on a very narrow use case. I'm on day 12, I've been at this for weeks, I need to finish so I can actually work on the app I want to build with this knowledge. 