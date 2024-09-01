// "use strict";    //treat all js code as newer version

// // 2 main data types 

// // 1.primitive data types
// // 2. Non primitive data types



// // Primitive Types

// 1. **Number**//: Represents both integer and floating-point numbers.

//    let age = 25;
//    let price = 19.99;

// 2. **String**//: Represents a sequence of characters.
   
//    let names = "John Doe";
//    let greeting = 'Hello, World!';

// 3. **Boolean**//: Represents a logical entity and can have only two values: `true` or `false`.
   
//    let isActive = true;
//    let isAdmin = false;

// 4. **Undefined**//: A variable that has been declared but not assigned a value.
   
//    let x;
//    console.log(x); // undefined

// 5. **Null**//: Represents the intentional absence of any object value.
   
//    let y = null;

// 6. **Symbol**//: A unique and immutable data type that is often used to identify object properties uniquely.
   
//    let sym = Symbol("unique");
   

// 7. **BigInt*//*: Represents whole numbers larger than the `Number` type can safely represent.
   
//    let bigNumber = BigInt(123456789012345678901234567890);
//    let anotherBigNumber = 123456789012345678901234567890n;
   

// // Non-Primitive Types (Objects)

// 1. **Object**//: A collection of key-value pairs. Objects can represent more complex structures like arrays, functions, and more.
   
//    let person = {
//        name: "Alice",
//        age: 30,
//        isActive: true
//    };

//    - **Array**//: A special type of object that holds an ordered collection of values.
     
//      let colors = ["red", "green", "blue"];
    

//    - **Function**//: Another special type of object that is callable.
    
//      function greet() {
//          console.log("Hello, World!");
//      }
    

//    - **Date**//: A special type of object for handling dates and times.
    
//      let today = new Date();
    

// // Type Checking

// //You can check the type of a variable using the `typeof` operator:

// console.log(typeof age);       // "number"
// console.log(typeof names);      // "string"
// console.log(typeof isActive);  // "boolean"
// console.log(typeof x);         // "undefined"
// console.log(typeof y);         // "object" (null is an object due to a historical bug in JavaScript)
// console.log(typeof sym);       // "symbol"
// console.log(typeof bigNumber); // "bigint"
// console.log(typeof person);    // "object"
// console.log(typeof colors);    // "object"
// console.log(typeof greet);     // "function"
// console.log(typeof today);     // "object"

//Special Note on `null`
//Although `null` is a primitive value, using `typeof` on `null` returns `"object"` due to a quirk in 
//JavaScript's implementation. To explicitly check for `null`, you should use a strict equality comparison:

//console.log(y === null); // true


//These are the basic data types in JavaScript. Understanding them is essential for effective programming 
//and data manipulation in JavaScript.

/////////////////////////////////////////////////////////////////////////////////////////////////////////////

//summary

//Stack (primitive), Heap(Non-primitive)

let names = "harsh"
let sname = names

sname = 'sahu'
console.log(names)   //harsh
console.log(sname)   //sahu

let user1 = {
   email:'user@gmail.com',
   upi:"user1"
}
let user2 = user1
user2.email = "user2@gmail.com"     //original get change

console.log(user1.email)
console.log(user2.email)