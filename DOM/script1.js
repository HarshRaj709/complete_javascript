let div = document.querySelectorAll('div');
console.log(div)

let id = div[0].getAttribute('id')
console.log(id)

div[0].setAttribute('id','new')

console.log(div[0].style)       //to get style
div[0].style.color = 'red';         //changed color
div[0].style.backgroundColor = 'black';
div[0].style.fontSize = '20px';