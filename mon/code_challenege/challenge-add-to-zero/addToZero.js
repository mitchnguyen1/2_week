// Starting array
let array = [28, 43, -12, 30, 4, 0, 12]

// Write your solution below:
//Given an array of numbers, 
//console.log true if any two numbers in the array add to zero, otherwise log false.

//Utilize hashmap so you only have to iterate through the array once
//Define a hashmap to check for the comp
//for loop through the array
    //define comp(target(0) - current number)
    //check if the map has comp inside
        //return true if so
    //add each element in the array
//return false

function addZero(arr){
    //hashmap {key:values} 
    let temp = new Map();
    for(let i = 0; i<array.length; i++){
        //comp-
        let comp = 0 - array[i];
        if(temp.has(comp)){
            return true;
        }
        //add to hashmap
        temp.set(array[i],i);
    }
    return false;
}
console.log(addZero(array));