// Given a number, n, return an array containing n unique random numbers between 1-10, 
// inclusive. (That is, do not repeat any numbers in the returned list.)

// You can trust that this function will never be called with n < 0 or n > 10.

//define a function with num param
    //define ans array
    //for loop from 1-n
        //ans.push(math.floor.random*11)
    //return ans

function findLuckyNum(num){
    let ans = []
    for(let i = 0; i < num; i++){
        ans.push(Math.floor(Math.random()*11))
    }
    return ans;
}

console.log(findLuckyNum(2))
console.log(findLuckyNum(10))
console.log(findLuckyNum(5))