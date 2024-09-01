// //Dates

// let myDate = new Date()
// console.log(myDate)                                 //2024-07-10T05:38:49.106Z
// console.log(myDate.toDateString())                  //Wed Jul 10 2024
// console.log(myDate.toLocaleString())                //10/7/2024, 11:11:46 am
// console.log(myDate.toLocaleDateString())            //10/7/2024
// console.log(typeof myDate)                          //objects

// let stringdate = myDate.toString()
// console.log(stringdate)                             //Wed Jul 10 2024 11:10:08 GMT+0530 (India Standard Time)

// let mydate = new Date(2023,0,23)
// console.log(mydate.toLocaleString())                    // 23/1/2023, 12:00:00 am

// let undate = new Date("2023-01-14")
// console.log(undate.toLocaleString())                    // 14/1/2023, 5:30:00 am

// let myTimeStamp= Date.now()
// console.log(myTimeStamp)                                // 1720590711781 provide miliseconds from 1970

let newDate = new Date()
console.log(newDate.getDate())                              // current date - > 10
console.log(newDate.getDay())                               // current day 3->wednesday