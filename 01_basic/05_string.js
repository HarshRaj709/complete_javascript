const name = "harsh"
const repocount = 50

console.log(`Hello my name is ${name} and my repocount is ${repocount}`)        //modern way to place name use `(tab ke upar wala) instead of '

const gameName = new String('hitesh-hc')       //by this we can apply many methods on it + provide index
console.log(gameName[2])
console.log(gameName.__proto__)             //{}
console.log(gameName.endsWith('s'))         //false
console.log(gameName.length)                //6
console.log(gameName.toUpperCase())         //HITESH    
console.log(gameName.charAt(3))             //e
console.log(gameName.indexOf('t'))          //2

//substring

const newString = gameName.substring(0,4)
console.log(newString)                      //hite

//slicing
console.log(gameName.slice(2,4))            //te

//remove extra space
const newString1 ="     harsh  2 "
console.log(newString1)                     //     harsh  2
console.log(newString1.trim())              //harsh  2

const url = "https://harsh.co/harsh%20sahu"     
console.log(url.replace('%20','-'))             //https://harsh.co/harsh-sahu

const array = url.split('/')
console.log(array)                              //[ 'https:', '', 'harsh.co', 'harsh%20sahu' ]

