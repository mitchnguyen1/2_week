// Return true if this word is a palindrome. false if it is not. A palindrome is a word that is spelled the same backwards and forwards.

// For example:
// isPalindrom("a")
// // returns true

// isPalindrom("noon")
// // returns true

// isPalindrom("hello")
// // returns false
// Treat spaces and uppercase letters normally—so “Racecar” wouldn’t be a palindrome since “R” and “r” aren’t the same letter:

// isPalindrom("Racecar")
// // returns false

// isPalindrom("racecar")


//edgecases-
    //0 == false
    //1 == true
    //keep capitialization as it does not match

//return a boolean
//function with str param
    //new array with str
    //reverse the array
    //array.tostring
    //return str == new str
    
function isPali(str){
    //edge cases for only one letter
    if(str.length === 1){
        return true;
    }
    //create an array of chars, reversed
    let arr = []
    for(let i = str.length-1; i >= 0; i--){
        arr.push(str.charAt(i))
    }
    //return if the new array as a string matches the str provided
    return arr.join("") === str;
}


//one line version
//split the string into an array of chars
//reverse using .reverse()
//join the array into a string
//return if it matches str
const shorter = (str) => str.split('').reverse().join("") === str;


console.log("False:",isPali('hi'))
console.log("True:",isPali('a'))
console.log("True:",isPali('noon'))
console.log("True:",isPali('racecar'))
console.log("False:",isPali('Racecar'))
console.log("True:",shorter("noon"))
