////////////////////////////////////
////// COPY AND CHANGE ARRAYS //////
////////////////////////////////////

const lotr = ['biLbO BaGGINs', 'leGOlAs', 'Frodo bAGGINS', 'sAMwiSe GamGEe', 'gAndALF tHe GREY']

const copyArrToCamelCase = arr => {
    const newArr = []

    for (let i = 0; i < arr.length; i++) {
        const str = arr[i] //'biLbO BaGGINs'
        const splitStr = str.split(' ')//['biLbO', 'BaGGINs']
        let camelCaseStr = ''
        
        for (let x = 0; x < splitStr.length; x++) {
            let word = splitStr[x] //'biLbO'
            word = word.toLowerCase() //'bilbo'
            if (x !== 0) {//false
                        //'b'       -> "B"      -> + "aggins" -> "Baggins"
                word = word.charAt(0).toUpperCase() + word.slice(1)
            }
            camelCaseStr += word //camelCaseStr = 'bilbo"
        }

        newArr.push(camelCaseStr) //['bilboBaggins']
    }

    return newArr
}

const copyArrToSnakeCase = arr => {
    const newArr = []
    //'fRodo bAGGINS'
    for (let i = 0; i < arr.length; i++) {
        let str = arr[i] //"frodo bAGGINS"
        str = str.toLowerCase()//'frodo baggins'
        const splitStr = str.split(' ')//['frodo','baggins']
        const snakeCaseStr = splitStr.join('_') //'frodo_baggins'
        newArr.push(snakeCaseStr)//newArr = ['frodo_baggins']
    }
    return newArr
}
  
// CODE HERE
const copyArrAndChange = (arr,cb) => {
    let result = []
    for(let i = 0; i < arr.length; i++){
        result.push(cb(arr[i]))
    }
    return result;
}

const copyToCamelCaseCB = str =>{
    const split = str.split(' ')
    let camel = ""
    for(let i =0; i< split.length;i++){
        let word = split[i]
        word = word.toLowerCase()
        if(i != 0){
            word = word.charAt(0).toUpperCase() + word.slice(1)
        }
        camel += word
    }
    return camel
}

const copyStrToSnakeCaseCb = str => str.toLowerCase().split(" ").join('_');

console.log(copyArrAndChange(lotr, copyToCamelCaseCB))
console.log(copyArrAndChange(lotr,copyStrToSnakeCaseCb))

////////////////////////////////////////
////// HIGHER ORDER ARRAY METHODS //////
////////////////////////////////////////


//// MAP ////
const nums = [1,2,3,4,5,6,7]
const multiplyBy10 = num => num*10;
//map each element(manipulate) and run each element inside multiplyBy10
const map = nums.map(multiplyBy10)
console.log(map)

/*
    Pass a callback to map that will return 'pink'
    for each color in the array.
*/

const colors = ['red', 'blue', 'yellow', 'green', 'orange']
const mappedColors = colors.map((el) => {
    let primary = ['red','yellow','blue']
    let isPrime = primary.includes(el)
    return {
        'color':el,
        'isPrimary': isPrime
    }
})


console.log(mappedColors)

/*
    Edit the formalGreeting function and use the built in .map method 
    to map over the names parameter and return a new array with "Hello, " 
    appended to the beginning of each name
    
    Make sure to use arrow functions combined with the map method    
*/

const formalNames = ['Bernard', 'Elizabeth', 'Conrad', 'Mary Margaret']

const formalGreeting = names => {
    return names.map(name => "hello, "+name)
}
// Call formalGreeting passing in the formalNames array
console.log(formalGreeting(formalNames))


//// FILTER ////

/*
    Pass a callback to filter that will return
    only strings that begin with the letter A
*/

const places = ['Binghampton', 'Albany', 'New York', 'Ithaca', 'Auburn', 'Rochester', 'Buffalo']

const placesThatStartWithA = places.filter(elem => elem.charAt(0) === 'A')

console.log(placesThatStartWithA)
/*
    Create a function called identifier that uses the filter higher order 
    array method to filter over the provided jobs array of objects

    The function should return the object of the person with a job as a programmer
    
    Make sure to use the arrow function in conjunction with the filter method
    
    Your returned value should be a single object, not an array with one object inside of it
    
    Use arrow functions and the filter method
*/

// Do not edit the code below.
let jobs = [
	{ receptionist: "James" },
	{ programmer: "Steve" },
	{ designer: "Alicia" },
    { programmer: "Steve" }
];

// Do not edit the code above.
// CODE HERE
const identifier = arr => {
    const filtered = arr.filter(elem => elem.programmer)
    for(let i = 0;i <filtered.length;i++){
        console.log(filtered[i])
    }
}



// call the function passing in the jobs array
console.log(identifier(jobs))

//// REDUCE ////

/*
    Edit the productOfArray function and use 
    the built in .reduce method to loop over the numbers parameter
    and return the product of all the numbers in the array

    Make sure to use arrow functions combined with the reduce method    
*/

const numsToReduce = [43, 7, 24, 79, 290]

const productOfArray = numbers => {
    return numbers.reduce((acc,curr) => acc *curr)
}

// CODE HERE
// call productOfArray passing in numsToReduce
console.log(productOfArray(numsToReduce))




/*
    Pass a callback and an initial value to reduce 
    that will subtract all the expenses in the array
    from the initial budget

    This will allow us to see how much we have left
    in the budget after these expenses
*/

const budget = 2000

const expenses = [
    {
        title: 'rent', 
        amount: 1000
    }, 
    {
        title: 'car payment', 
        amount: 250
    }, 
    {
        title: 'food', 
        amount: 300
    }
]
                                    
const remaining = expenses.reduce((a,c)=>a-c.amount,budget)

console.log(remaining)