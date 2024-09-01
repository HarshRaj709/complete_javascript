THere are multiple types of events availaible in JS.

1. Mouse Events:    onclick, ondblclick, onmouseover
                    <div class="box" onmouseover="alert('you jumped on me')">
                        Sigma
                    </div>
2. Keyboard Events:
3. Form Submit


    inline event handling is not good it must be handle in js file.

Example:- node.event=()=>{
    //handle event
}

    let box = document.querySelector(".box");
    console.log(box)
    a=1
    box.onmouseover = () => {
        alert(`Hello you hovered me ${a}`);
        a++;
    }

-----------> Inline event handling have less priority than js file event file.
---------------------------------------------------------------------------------------------------------------

Event Object: It is a special object that has details about the event.
All event handlers have a access to the event object's properties and methods.


Syntax ---

            node.event = (e) =>{
                //handle here
            }

            e.target, e.type, e.clientX,, e.clientY

        
Example ---

            let btns = document.querySelector("#btn1");

            btns.onclick = (e) => {
                alert('button clicked');
                console.log(e.type);        //click
                console.log(e.target);
            }

---------------------------------------------------------------------------------------------------------------

Event Listners :---

    node.addEventListner(event,callback):

        let box = document.querySelector('.box')

        box.addEventListener('click',()=>{
            alert('you clicked me')
        })

        box.addEventListener('mouseover',()=>{          //no need to add on before any event
            alert('you hovered on  me')
        })

        box.addEventListener('mouseover',(e)=>{
            console.log(e.type)     //Event object                     //mouseover
        })

    node.removeEventListner(event,callback)
        //the callback refrence should be same to remove

        const clickhandler = ()=>{          // arrow function
                alert('you clicked me')
            }
        box.addEventListener('click',clickhandler)

        //want to remove click EventListner
        .removeEventListener('click',clickhandler)       //removed


