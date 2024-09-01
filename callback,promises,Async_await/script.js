// function harsh(){
//     console.log('mera naam lo');
// }
// setTimeout(harsh,2000)       setTimeout take callback in its argument.
//----------------------------------------------------------------------------------------------------------
      
// console.log('1');
// console.log('2');
// setTimeout(()=>{
//     console.log('Hello');
// },2000)

// console.log('3');
// console.log('4');

//----------------------------------------------------------------------------------------------------------

//synchronous
// function sum(a,b){
//     console.log(a+b);
// }

// function calculator(a,b,sumcallback){
//     sumcallback(a,b);
// }
//calculator(5,6,sum)

//-----------------------------------------------------------------------------------------------------------

//Real life Approach

// function getData(dataid){
//     setTimeout(()=>{
//         console.log('Data',dataid);
//     },2000);
// }

//-----------------------------------------------------------------------------------------------------------

//promises

// let promise = new Promise((resolve,reject) =>{
//     console.log('I am promise');
//     //resolve('data received successfully');
//     reject('got an error')
// })

//Example

// function getData(dataid,getNextdata){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log('data',dataid);
//             resolve('sent')
//             if(getNextdata){
//                 getNextdata();
//             }
//         },5000);
//     });
// };

// const getPromise = () =>{
//     return new Promise((resolve,reject)=>{
//         console.log('I am Promise');
//         reject('Failure');
//         // resolve('success');        // yha ka message then and catch me show kr rha h uske result and error me
//     });
// };


// let promise = getPromise();
// // promise.then(console.log('FullFilled Now'))
// promise.then((result)=>{
//     console.log('FullFilled',result);
// });

// promise.catch((error)=>{
//     console.log('rejected',error);      //rejected Failure
//})

//------------------------------------------------------------------------------------------------------------

// let asyncFunc1 = () =>{
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log('data1');
//             resolve('success');
//         },4000);
//     });
// };

// let asyncFunc2 = () =>{
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log('data2');
//             resolve('success');
//         },4000);
//     });
// };

// console.log('fetching data1')
// let promise1 = asyncFunc1();
// promise1.then((result)=>{
//     console.log('fetching data2');

//     let p2 = asyncFunc2();
//     p2.then((res)=>{

//     });
// });

//---------------------------------------------------------------------------------------------------------

// function getData(dataid){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log('data',dataid);
//             resolve('sent')
//         },2000);
//     });
// };
// console.log('fetching data 1');
// getData(1).then((res)=>{
//     console.log('fetching data 2');
//     return getData(2);
// }).then(()=>{
//     console.log('fetching data 3');
//     return getData(3);
// }).then((res)=>{
//     console.log(res);
// })

// ------------------------------------------------------------------------------------------------------------