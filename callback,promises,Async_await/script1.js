// function api(){
//     return new Promise((resolved,rejected)=>{
//         setTimeout(()=>{
//             console.log('weather data');
//             resolved('success 200');
//         },2000); 
//     });
// };

// // await api();         error
// async function getwheatherdata (){
//     await api();    // 1st call
//     await api();    // 2nd call
// }

// async function hello(){
//     console.log('hello');
// }

//------------------------------------------------------------------------------------------------------------

function getData(dataid){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log('data',dataid);
            resolve('sent')
        },2000);
    });
};

// async function data(){
    // console.log('fetching data 1.....')
    // await getData(1);
    // console.log('fetching data 2.....')
    // await getData(2);
    // console.log('fetching data 3.....')
    // await getData(3);
// }

(async function (){
    console.log('fetching data 1.....')
    await getData(1);
    console.log('fetching data 2.....')
    await getData(2);
    console.log('fetching data 3.....')
    await getData(3);
})();