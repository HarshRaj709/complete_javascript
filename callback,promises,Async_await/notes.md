async await >> promise chains >> callback hell

There is a function called setTimeout() --- THis is used to set time after which that program get executed.

    Example - function harsh(){
                    console.log('mera naam lo');
                }
                setTimeout(harsh,2000)      

                ///

                setTimeout(()=>{
                    console.log('Hello');
                },2000)
---------------------------------------------------------------------------------------------------------------
Example of Asynchronous programming --- ?

    console.log('1');
    console.log('2');
    setTimeout(()=>{
        console.log('Hello');
    },2000)
    console.log('3');
    console.log('4');

# here the system will print 1,2,3,4 and then after 2 seconds we will get Hello,

---------------------------------------------------------------------------------------------------------------
What is Callback?
    when we use 1 function as an argument in another function it is known as callback.

    function sum(a,b){
        console.log(a+b);
    }

    function calculator(a,b,sumcallback){
        sumcallback(a,b);
    }
    //calculator(5,6,sum)       //never use () after callbacks like xxx->calculator(5,6,sum())

---------------------------------------------------------------------------------------------------------------
What is Callback Hell?
    Nested callbacks stacked below one another forming a pyramid structure.

---------------------------------------------------------------------------------------------------------------
What are Promises ?
    Promise is for 'eventual' completion of task. It is an object in JS.
    It is a solution to callback hell.

    let promise = new Promise((resolve,reject) => {.....})
                                                                resolve and rejects are callback provided by js

In promise we have 3 states
    1. pending
    2. fullfill [resolved]
    3. rejected

    Example --- >
        function getData(dataid,getNextdata){
            return new Promise((resolve,reject)=>{
                setTimeout(()=>{
                    console.log('data',dataid);
                    resolve('sent')
                    if(getNextdata){
                        getNextdata();
                    }
                },5000);
            });
        } 

-------------------------------------->
    .then() & catch()

-> If fullfilled then we will use .then() ============> promise.then()

-> Else we use .catch() ===========> promise.catch()

    Example ---->
            const getPromise = () =>{
            return new Promise((resolve,reject)=>{
                console.log('I am Promise');
                reject('Failure');
                // resolve('success');        // yha ka message then and catch me show kr rha h uske result and error me
            });
        };


        let promise = getPromise();
        // promise.then(console.log('FullFilled Now'))
        promise.then((result)=>{
            console.log('FullFilled',result);
        });

        promise.catch((error)=>{
            console.log('rejected',error);      //rejected Failure

---------------------------------------------------------------------------------------------------------------

What is Promise Chain?
    It can be defined as writing a function by which we make a chain of promises which executes 1 after the other.

    Example ---->   
            let asyncFunc1 = () =>{
            return new Promise((resolve,reject)=>{
                setTimeout(()=>{
                    console.log('data1');
                    resolve('success');
                },4000);
            });
        };

        let asyncFunc2 = () =>{
            return new Promise((resolve,reject)=>{
                setTimeout(()=>{
                    console.log('data2');
                    resolve('success');
                },4000);
            });
        };

        console.log('fetching data1')
        let promise1 = asyncFunc1();
        promise1.then((result)=>{
            console.log('fetching data2')
            let p2 = asyncFunc2();
            p2.then((res)=>{

            });
        });

-----> Exact Example of PRomise Chain

            function getData(dataid){
                return new Promise((resolve,reject)=>{
                    setTimeout(()=>{
                        console.log('data',dataid);
                        resolve('sent')
                    },2000);
                });
            };
            console.log('fetching data 1');
            getData(1).then((res)=>{
                console.log('fetching data 2');
                return getData(2);
            }).then(()=>{
                console.log('fetching data 3');
                return getData(3);
            }).then((res)=>{
                console.log(res);
            })

---------------------------------------------------------------------------------------------------------------
What is async await?        script1.js
    async function always returns a promise.

        async function myFunc(){....}

    await pause the execution of its surrounding async function untill the promise is settled.

        Example --- >
                function api(){
                    return new Promise((resolved,rejected)=>{
                        setTimeout(()=>{
                            console.log('weather data');
                            resolved('success 200');
                        },2000); 
                    });
                };

                // await api();         error
                async function getwheatherdata (){
                    await api();    // 1st call
                    await api();    // 2nd call
                }

                async function hello(){
                    console.log('hello');
                }

---------------------------------------------------------------------------------------------------------------
Applying async await in our previous getdata function

    function getData(dataid){
        return new Promise((resolve,reject)=>{
            setTimeout(()=>{
                console.log('data',dataid);
                resolve('sent')
            },2000);
        });
    };

    async function data(){
        console.log('fetching data 1.....')
        await getData(1);
        console.log('fetching data 2.....')
        await getData(2);
        console.log('fetching data 3.....')
        await getData(3);
    }

--------------------------------------------> Problem with Async Await <------------------------------------

We have to manually call the async function at start, to solve this problem we use 
                                IIFE(Imediate Invoked Function Expression)  

1.    (function (){
        //...
        })();

2.    (()=>{
        //..
        })();

3.    (async ()=>{
        //...
        })();

            Example --- >

                (async function (){
                    console.log('fetching data 1.....')
                    await getData(1);
                    console.log('fetching data 2.....')
                    await getData(2);
                    console.log('fetching data 3.....')
                    await getData(3);
                })();