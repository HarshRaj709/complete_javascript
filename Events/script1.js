let btns = document.querySelector("#btn1");


btns.onclick = (e) => {
    alert('button clicked');
    console.log(e.type);        //click
    console.log(e.target);
}


let box = document.querySelector(".box");
a=1
box.onmouseover = () => {
    alert(`Hello you hovered me ${a}`);
    a++;
}



