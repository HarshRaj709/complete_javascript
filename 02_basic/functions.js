// function add(a,b){
//     //local variable ---> sum
//     sum = (a+b)
//     return sum
// }
// document.write(add(7,6))
// document.write('\n')
// //console.log(a)      // local variable


// // Arrow Functions
// //COmpact Way of writitng function

// //const FunctionName = (param1, param2....) =>{
    
//     //some wrok
// //}


// const triam =(a,b) => {
//     return(a+b)
// }
// document.write(triam(5,4))
// document.write('\n')

// let mult = (a,b)=>{
//     return a*b;
// }
// document.write(mult(4,5))
// document.write('\n')

// let print = ()=> document.write('print')
// print()


///////////////////////////////////////////////////////


//Practise quetion to print all vowels from the string

function countvowels(string){
    let count = 0
    for(let char of string ){
        if(char==='a' ||char==='e'||char==='i'||char==='o'||char==='u'){
            count+=1;
        }
    }
    document.write(count)
}
countvowels("apnaCollege")
document.write('\n')

let countvow = (string)=>{
    let count = 0
    for(let char of string ){
        if(char==='a' ||char==='e'||char==='i'||char==='o'||char==='u'){
            count+=1;
        }
    }
    document.write(count)
}
countvow('harsh')

