// Given a word, return true if that word contains only unique characters. 
//Return false otherwise.

// hasUniqueChars("Monday")
// returns true

// hasUniqueChars("Moonday")
// returns false

//lowercase the entire string
//for loop to iterate through the entire string
    //define set
    //if char contains in set
        //return false
    //add to set
//return false

//this function will compare values within a hashmap
function uniqueChar(str){
    let temp = str.toLowerCase();
    let map = new Map()
    for(let i = 0; i < temp.length;i++){
        if(map.has(temp.charAt(i))){
            return false
        }
        map.set(temp.charAt(i),i)
    }
    return true;
}
console.log("uniqueChar:",uniqueChar("TEST"))
console.log("uniqueChar:",uniqueChar("Monday"))
console.log("uniqueChar:",uniqueChar("Moonday"))


//this function will compare the length of the set and string
//sets can only hold unique values

//lowercase the entire string
//define set
//define string size
//for loop to iterate through the entire string
    //add to set
//return set.size == string size
function uniqueSize(str){
    let set = new Set()
    let size = str.length
    for(let i = 0; i < size; i++){
        set.add(str.charAt(i),i)
    }
    return set.size === size
}
console.log("uniqueSize:",uniqueSize("TEST"))
console.log("uniqueSize:",uniqueSize("Monday"))
console.log("uniqueSize:",uniqueSize("Moonday"))