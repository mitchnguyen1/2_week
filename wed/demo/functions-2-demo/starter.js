////////////////////////
////// CALCULATOR //////
////////////////////////

// CODE HERE
const add = (num1,num2) => num1 + num2
const subtract = (num1,num2) => num1 - num2
const multiply = (num1,num2) => num1 * num2
const divide = (num1,num2) => num1/num2

const cal = (num1,num2,cb) => {
  //checking to see if input is coercible to a number 
  //+ same as Number(), converts to number
  if(+num1 && +num2){
    num1 = +num1
    num = +num2
    return cb(num1,num2)
  }
  else{
    return console.log('please provide numbers only')
  }
}
  
// console.log(cal(10,2,divide))


///////////////////////
////// PET STORE //////
///////////////////////

const dogProducts = [
    {
      name: 'leash',
      colors: ['red', 'blue', 'green'],
      category: 1,
      inventory: 30,
      basePrice: 13.99, 
      displayPrice: 13.99
    }, 
    {
      name: 'chew toy',
      colors: ['brown'],
      category: 2,
      inventory: 120,
      basePrice: 6.00, 
      displayPrice: 6.00
    }, 
    {
      name: 'rope',
      colors: ['blue & green', 'red & yellow'],
      category: 2,
      inventory: 75,
      basePrice: 4.99, 
      displayPrice: 4.99
    }
]

const catProducts = [
  {
    name: 'mouse toy', 
    colors: ['pink', 'grey', 'black'], 
    category: 2, 
    inventory: 125, 
    basePrice: 2.50, 
    displayPrice: 2.50
  },
  {
    name: 'cat sweater',
    colors: ['black'],
    category: 1,
    inventory: 15,
    basePrice: 10.00, 
    displayPrice: 10.00
  }, 
  {
    name: 'straching post',
    colors: ['tan'],
    category: 2,
    inventory: 40,
    basePrice: 22.99, 
    displayPrice: 22.99
  }
]

// CODE HERE
//apply discounts by percentage or by rate, have to pass discount as decimals
const applyDiscount = (product,discount) => {
  product.displayPrice = Number((product.basePrice * (1-discount)).toFixed(2))
}

const applyFlatDiscount = (product,discount) => {
  product.displayPrice = Number((product.basePrice - discount).toFixed(2))
}

//higher-order method that allow us to write a loop once and apply discount
//product==array of objs
//cb= callback function we're invoking
const applyDiscountAll = (product,cb,discount) => {
  for(let item in product){
    cb(product[item],discount)
  }
}

// applyDiscountAll(dogProducts,applyFlatDiscount,1)
// applyDiscountAll(catProducts,applyDiscount,.20)
// console.log(catProducts)

// apply discount by categories
const discountCategories = (product,category,cb,discount)=>{
  for(let item in product){
    if(product[item].category === category){
      cb(product[item],discount)
    }
  }
}
// discountCategories(catProducts,2,applyFlatDiscount,1)
// console.log(catProducts)

// apply discount according to inventory
const discountInventory = (product,amount,cb,discount)=>{
  for(let item in product){
    if(product[item].inventory < amount){
      cb(product[item],discount)
    }
  }
}
discountInventory(catProducts,50,applyFlatDiscount,1)
console.log(catProducts)

////////////////////////
////// SANDWICHES //////
////////////////////////

// CODE HERE
