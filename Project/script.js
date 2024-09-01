let boxes = document.querySelectorAll('.box');
let resetbutton = document.getElementById('reset');
let newgame = document.querySelector('#new')
let msgcont = document.querySelector('.msg-container')
let msg = document.querySelector('#msg')
// console.log(boxes)
// console.log(resetbutton)

let turn0 = true;

//2d array
let winpat = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

let resetgame = () => {
    location.reload();
}

resetbutton.addEventListener('click',resetgame)
newgame.addEventListener('click',resetgame)

const disablebox = () =>{
    boxes.forEach(
        (box) =>{
            box.disabled = true;
        }
    )
}

const showWinner = (winner) =>{
    msg.innerText = `congratulations, winner is ${winner}`;
    msgcont.classList.remove('hide');
    disablebox();
}
const checkWinner = () =>{
    for(pattern of winpat){
        // console.log(pattern[0],pattern[1],pattern[2]);
        // console.log(boxes[pattern[0]].innerText,
        //             boxes[pattern[1]].innerText,
        //             boxes[pattern[2]].innerText
        // );     //getting each box with index
        let posval1 = boxes[pattern[0]].innerText;
        let posval2 = boxes[pattern[1]].innerText;
        let posval3 = boxes[pattern[2]].innerText;

        if(posval1 != '' && posval2 != '' && posval3 != ''){
            if(posval1 === posval2 && posval2 === posval3){
                // console.log();
                showWinner(posval1);


                // let win = document.querySelector('#msg');
                // win.style.color = 'white';
                // win.append(`${posval1}`)

            }
        }

    }
}

boxes.forEach(
    (box) => {
        box.addEventListener('click',()=>{
            console.log('clicked');
            if (turn0){
                box.innerText = 'O';
                turn0 = false;
            }
            else{
                box.innerText = 'X';
                turn0 = true;
            }
        box.disabled = true;
        checkWinner();

        // console.log('after the checkwinner')
        })
    }
)
