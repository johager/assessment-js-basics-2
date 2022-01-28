///////////////////////////////////////////////
///////////////////CART.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code to
    calculate order totals. You'll also be 
    creating customer objects.  
*/


//////////////////PROBLEM 1////////////////////
/*  
    Below is a cart array that has food objects
    inside. 

    Write a callback below that uses the reduce
    array method to calculate the sum of all
    the food. 
*/

const cart = [
    {
        name: 'pizza', 
        price: 9.99
    }, 
    {
        name: 'pasta', 
        price: 8.99
    }, 
    {
        name: 'salad', 
        price: 7.99
    }
]

//CODE HERE

// const summedPrice = cart.reduce(/* CALLBACK HERE */)

// const summedPrice = cart.reduce((elem, acc) => acc + elem.price, cart[0].price)

const summedPrice = cart.map(item => item.price).reduce((price, acc) => acc + price)

console.log("summedPrice:", summedPrice)

//////////////////PROBLEM 2////////////////////
/*  
    Write a function called `calcFinalPrice` that
    can take in `cartTotal`,`couponValue`,
    and `tax` arguments. 

    Inside the function, calculate the tax 
    on the cartTotal and add it in. Subtract
    the value of the coupon. Return the final
    number. 

    Note: the numbers passed in for `tax` will be
    decimals, for example: .06 for a 6% tax.
*/

//CODE HERE

function calcFinalPrice(cartTotal, couponValue, taxRate) {
    return cartTotal * (1 + taxRate) - couponValue
}

console.log("calcFinalPrice(10, 0, 0.06):", calcFinalPrice(10, 0, 0.06))
console.log("calcFinalPrice(10, 1 , 0.06):", calcFinalPrice(10, 1 , 0.06))

//////////////////PROBLEM 3////////////////////
/*  
    In this problem, you'll create a model for 
    a customer object as well as an example
    object. 

    Plan out a customer object for the cart page.
    Think about the information that a 
    restaurant would need about its customers.

    In the TEXT ANSWER area below, describe the
    properties that your customer object will have
    and why you chose those properties.

    Explain what data types each property should be
    and why you chose those data types. 

    Your object should have at least 4 properties. 
*/

/*
    TEXT ANSWER HERE

    items - an array of item objects that the customer is buying
    secondItem - something that the project manager hasn't specified yet
    thirdItem - something that the project manager hasn't specified yet
    fourthItem - something that the project manager hasn't specified yet

    - An array of items is the only thing that's required on the cart page in order to show the items that are going to be purchased

    - It sounds like you are asking for information required on the checkout page

    - I'll answer the question as posed
*/

/*
    Now, create a customer object following your own
    guidelines.
*/

//CODE HERE

class Customer {
    constructor(items){
        this.items = items
        this.prop2 = ''
        this.prop3 = ''
        this.prop4 = ''
    }
}

const customer1 = new Customer(cart)

console.log("\ncustomer1:", customer1)

// For the checkout page, it would be like the following

class CustomerForCheckout extends Customer {
    constructor(name, phone, items){
        super(items)
        this.name = name
        this.phone = phone  // phone number
        this.prop4 = prop4  // the secret information that the program manager wants
    }
}

// the next step would be the payment page where payment information would be obtained