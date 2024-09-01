// let event = document.addEventListener('click',()=>{
//     alert('you clicked me')
// })
let box = document.querySelector('.box')

const clickhandler = ()=>{          // arrow function
    alert('you clicked me')
}
box.addEventListener('click',clickhandler)

box.addEventListener('mouseover',()=>{          //no need to add on before any event
    alert('you hovered on  me')
})


//want to remove click EventListner
box.removeEventListener('click',clickhandler)       //removed