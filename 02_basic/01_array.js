//array

const myArry = [1,4,58,9,66,"harsh",true]       // dynamic in nature
console.log(myArry[3])                          // 9

const newArray2 = new Array(1,4,5,6,8,9,6,66,6,)
// console.log(newArray2[3])
// newArray2.push(100)             //Add at last
// console.log(newArray2)
// newArray2.pop()
// console.log(newArray2)          //remove from last
// newArray2.unshift(9)            // add at start
// console.log(newArray2)
// newArray2.shift()
// console.log(newArray2)          //remove from start

console.log(newArray2.includes(39))     //false
console.log(newArray2.indexOf(39))      //-1

const newArry = newArray2.join()
console.log(newArray2)
console.log(newArry)                //string type
