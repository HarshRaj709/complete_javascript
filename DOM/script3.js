let button = document.createElement('button')
button.innerText = 'Click me'
button.style.backgroundColor='red';
button.style.color = 'white';

document.querySelector('body').prepend(button)

let para = document.querySelector('p')
// para.setAttribute('class','newclass')
para.classList.add('newclass')