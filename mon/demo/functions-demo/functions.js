//create var for jon health

let jonSnowHealth = 100
// jonSnowHealth = String(jonSnowHealth)
// jonSnowHealth += "" //string coercion


let theWinnerIs = 'Jamie is the winner'

theWinnerIs = theWinnerIs.replace('Jamie','Jon')


//check if string includes jon, and console log it to confirm
if(theWinnerIs.includes('Jon')){
    console.log("Changes confirmed to string")
}

let newWinnerLower = theWinnerIs.toLowerCase()
let newWinnerSplit = newWinnerLower.split(' ')
let newWinnerJoin = newWinnerSplit.join('-')
let test = newWinnerLower.replaceAll(' ', '-')
console.log(newWinnerJoin)

function isJonAlive(){
    if(jonSnowHealth > 0){
        console.log("Jon is alive")
    }
    else{
        console.log("Jon has been slain, RIP Jon")
    }
}

isJonAlive()

const surpriseAttack = function(attack){
    jonSnowHealth -= attack
}

surpriseAttack(30)
surpriseAttack(20)
surpriseAttack(25)
surpriseAttack(25)
isJonAlive()


//function with multiple args
const greeting = (person1,person2) => console.log(`${person1} says hello to ${person2}`)
greeting("Vinson","Melissa")

//create a function to represent a dice rol

function rollDice(){
    //array size = 6
    let possibleRoles = [1,2,3,4,5,6]
    //number 
    let randomNumber = Math.floor(Math.random() * possibleRoles.length)
    return possibleRoles[randomNumber]
}
let firstRoll = rollDice()
console.log(firstRoll)


//create a function to roll dice twice and multiplies the val and return it
function rollTwice(){
    let first = rollDice()
    let second = rollDice()
    return first * second
}
let multipleDice = rollTwice()
console.log(multipleDice)