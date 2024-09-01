// let element = document.createElement('p')

// let body = document.querySelector('body')
// body.append(element)        // added at last

// let p = document.querySelector('p');
// p.innerHTML = '<strong>Hello Chacha</strong>';
// p.style.color = 'red';
// p.style.fontSize = '20px';  

let element = document.createElement('p')
let body = document.querySelectorAll('div')
console.log(body)
body[1].after(element)

let p = document.querySelector('p');
p.innerHTML = '<strong>Hello Chacha</strong>';
p.style.color = 'red';
p.style.fontSize = '20px';

body[1].remove()

