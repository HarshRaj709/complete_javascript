let change = document.querySelector('h2'); 
change.innerText = change.innerText + ' from apna college';


//ques change each box content... 
let alldiv = document.querySelectorAll('div');

let content = ['harsh','sigma','male']
i=0;
id = 1;
for(div of alldiv){
    div.innerText = content[i];
    id++;
    i++;
}


// //using loops now
// for(i=0;i<=alldiv.length;i++){
//     alldiv[i].innerText = 'Harsh'
// }


//simple method
// alldiv[0].innerText = '1';
// alldiv[1].innerText = '2';
// alldiv[2].innerText = '3';
// console.log(alldiv);