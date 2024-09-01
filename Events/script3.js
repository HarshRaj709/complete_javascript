let color = document.querySelector('#button')
console.log(color.innerText)

current = 'light';

color.addEventListener('click',()=>{
    if(current === 'light'){
        document.body.style.backgroundColor = 'darkblue';
        color.style.backgroundColor='orange';
        current = 'dark';
        console.log(current)
    }
    else if (current === 'dark') {
        document.body.style.backgroundColor = 'white';
        color.style.backgroundColor='green';
        current = 'light';
        console.log(current)
    }
})