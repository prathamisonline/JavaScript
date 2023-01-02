## Question 1: What is the difference between let and const? What distinguishes both from var?

When declaring any variable in JavaScript, we used the var keyword. Var is a function scoped keyword. Within a function, we can access the variable. When we need to create a new scope, we wrap the code in a function.

Both let and const have block scope. If you use these keywords to declare a variable, it will only exist within the innermost block that surrounds them. If you declare a variable with let inside a block (for example, if a condition or a for-loop), it can only be accessed within that block.

The variables declared with the let keyword are mutable, which means that their values can be changed. It's akin to the var keyword, but with the added benefit of block scoping. The variables declared with the const keyword are block-scoped and immutable. When variables are declared with the const keyword, their value cannot be modified or reassigned.

## Q2:What is the “spread” operator in ES6?

The list of parameters is obtained using the spread operator. Three dots (...) are used to represent it. The spread operator divides an iterable (such as an array or a string) into individual elements. It's mostly used in JavaScript to make shallow copies of JS. It improves the readability of your code by making it more concise.

## Q3:Explain Destructuring in ES6

Destructuring was introduced in ES6 as a way to extract data from arrays and objects into a single variable. It is possible to extract smaller fragments from objects and arrays using this method. The following is an example.

let greeting =['Good','Morning'];  
let [g1, g2] = greeting;  
console.log (g1, g2);

Output:

Good Morning

## Q4:What are Promises in ES6?

Asynchronous programming is a concept found in JavaScript. The processes are run separately from the main thread in asynchronous programming. Promises are the most convenient approach to deal with asynchronous programming in ES6. Depending on the outcome of the procedure, a promise can be refused or resolved. Callbacks were used to cope with asynchronous programming before promises were introduced in ES6.

However, it caused the problem of callback hell, which was addressed with the introduction of promises.

(A callback is a function that is performed after another function has completed. When working with events in JavaScript, callback is very useful. As an argument to another function, we pass a function into another function.

When we use callbacks in our web applications, it's common for them to get nested. Excessive callback usage clogs up your web application and leads to callback hell.)

## Q5:What are callbacks?

Functions that are used as an argument to another function are called callback functions.

A callback is a function that will be executed after another function gets executed. In javascript, functions are treated as first-class citizens, they can be used as an argument of another function, can be returned by another function, and can be used as a property of an object.

function divideByHalf(sum){
console.log(Math.floor(sum / 2));
}

function multiplyBy2(sum){
console.log(sum \* 2);
}

function operationOnSum(num1,num2,operation){
var sum = num1 + num2;
operation(sum);
}

operationOnSum(3, 3, divideByHalf); // Outputs 3

operationOnSum(5, 5, multiplyBy2); // Outputs 20

In the code above, we are performing mathematical operations on the sum of two numbers. The operationOnSum function takes 3 arguments, the first number, the second number, and the operation that is to be performed on their sum (callback).
Both divideByHalf and multiplyBy2 functions are used as callback functions in the code above.
These callback functions will be executed only after the function operationOnSum is executed.
Therefore, a callback is a function that will be executed after another function gets executed

## Q6:
