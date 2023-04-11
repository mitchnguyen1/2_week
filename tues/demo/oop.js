//OOP Demo

let person = {
    firstName: "Michael",
    lastName: "Scott",
    age: 34
}
// console.log(person.firstName)
// console.log(person["firstName"])

let meal = {
    appetizer: "Cheese Sticks",
    entree: "Chicken Parm",
    dessert: "Ice Cream",
    drink: "Coke"
}

let {dessert} = meal
console.log(dessert)

let {entree, appetizer} = meal
console.log(entree,appetizer)

//rename the drink as sweetness= const sweetness = meal.drink
const {drink: sweetness } = meal
console.log(meal.drink)
console.log(sweetness)

const {appetizer: myAppetizer, entree: myEntree, dessert: myDessert, drink: myDrink} = meal
console.log(myAppetizer,myDrink,myEntree,myDessert)


//printing key and values
for(let key in meal){
    console.log(`${key}: ${meal[key]}`)
}

//adding properties to class
person.job = "Web Developer"
person.pets = ["chicken","duck","hamster"]
//adding to the array
person.pets.push("dog")


//deleting an property
delete person.pets

console.log(person)

let teams = {
    teamOne: ['ryan', 'alex', 'wyatt', 'tj'],
    teamTwo: ['henry', 'cole', 'charlie', 'zeke'],
    teamThree: ['porter', 'blake', 'june', 'owen'],
    teamFour: ['brian', 'riley', 'ezra', 'jordan'],
    teamFive: ['grey', 'milo', 'mckay', 'leo']
  }

delete teams.teamFour
console.log(teams)