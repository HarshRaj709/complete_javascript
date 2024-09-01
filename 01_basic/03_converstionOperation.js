let score = '33abc'
console.log(typeof(score))          //string 
let valueInNumber = Number(score)       // same as we can convert it to String
console.log(typeof valueInNumber)       // number
console.log(valueInNumber)              //NaN       Not an Number

let temp = null
// now we have to convert it to number
let numbertemp = Number(temp)
console.log(typeof numbertemp)
console.log(numbertemp)     //0 when we pass null so mind that, if we are getting null and directly converting it to Number without checking then it may produce error


let undef = undefined
let converted = Number(undef)
console.log(typeof converted)       //number
console.log(converted)              //Nan


let isLooged = 1
let convertbool = Boolean(isLooged)
console.log(convertbool)        //true


let isempty = ''
let convertempty = Boolean(isempty)
console.log(convertempty)       //false

let isfull = 'harsh'
let convertfull = Boolean(isfull)
console.log(convertfull)            //true

let stringy = 33
let convertedstring = String(stringy)
console.log(convertedstring)
console.log(typeof convertedstring)     //string


// Operations

let value = 3
let negvalue = -value
console.log(negvalue)       // -3


//left to right evaluation
console.log("1"+2)          //12
console.log('1' +2 +2)      //122
console.log(1 + 2 +'2')     //32

console.log(+true)          //1
let num1,num2,num3
num1 = num2 = num3 = 4      //not good practise

let gameCounter = 100
++gameCounter;
console.log(gameCounter)