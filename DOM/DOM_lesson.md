To change anything dynamicaaly we use DOM in Javascript.
like if we want to change background color then we can do by ---- document.body.style.background = 'green';
document.body.childNodes[1].innerText='abcd';

document.body.childNodes[3].innerText = 'DOm Manipulation';

----difference b/w innerText & innerHTML 
    By the help of innerHtml we can change Html tags as well as text
    document.body.childNodes[3].innerHTML = '<h1><strong>This is power of Javascript</strong></h1>';

----



document.body.childNodes[0]: Text Node (whitespace after <body>)
document.body.childNodes[1]: <div class="first">
document.body.childNodes[2]: Text Node (whitespace after </div>)
document.body.childNodes[3]: <div class="second">
document.body.childNodes[4]: Text Node (whitespace after </div>)
document.body.childNodes[5]: <div class="third">
document.body.childNodes[6]: Text Node (whitespace after </div>)
document.body.childNodes[7]: <script>
document.body.childNodes[8]: Text Node (whitespace after </script>)



------------------------------------------------------------------------------------------------------------------------------------------

Access Methods-

    1. document.getElementByID :
        let heading = document.getElementById('1')
        console.log(heading)

    2. document.getElementsByClassName :
        let content = document.getElementsByClassName('second');
        console.log(content)    #return multiple things,,,majorly used for collection.

    3. document.getElementsByTagName :
        let alldiv = document.getElementsByTagName('div');
        console.log(alldiv)     #will return array of all the tags

    4. Father of all methods
        document.querySelector('myId / myClass / tag')      //returns first element
        let divs = document.querySelectorAll('div');

    5. document.querySelectorAll("myId / myclass / tag')    // returns a NodeList
        let divs = document.querySelector('div');


Properties: 

    tagName: return tag for element nodes

    innerText: returns the text content of the element and all its children

    innerHTML: returns the plain text or HTMl contents in the elements

    textContent: returns textual content even for hidden elements.


---------------------------------------------------------------------------------------------------------------

Attributes-----

    1. getAttribute(attr)       //to get the attribute value
        let div = document.querySelectorAll('div');
        console.log(div)

        let id = div[0].getAttribute('id')
        console.log(id)

    2. setAttribute(attr,value)     //to set the attribute val 
        div[0].setAttribute('id','new')

Style-------

    1.  node.style
            console.log(div[0].style)       //to get style
            div[0].style.color = 'red';         //changed color
            div[0].style.backgroundColor = 'black';
            div[0].style.fontSize = '20px';


---------------------------------------------------------------------------------------------------------------

InsertElements------------

    2 Step process:-
        1st ---  Create the Element by usinf its Tagname.
                let element = document.

        2nd ---  Add at specific position


1. append method:  
    
    node.append     //Add at last

            let element = document.createElement('p')
            let body = document.querySelectorAll('div')
            console.log(body)
            body[2].append(element)

            let p = document.querySelector('p');
            p.innerHTML = '<strong>Hello Chacha</strong>';
            p.style.color = 'red';
            p.style.fontSize = '20px';


2. prepend MEthod:  
        
        node.prepend     //Add at First

            let element = document.createElement('p')
            let body = document.querySelectorAll('div')
            console.log(body)
            body[2].prepend(element)

            let p = document.querySelector('p');
            p.innerHTML = '<strong>Hello Chacha</strong>';
            p.style.color = 'red';
            p.style.fontSize = '20px';

3.Before Method:

    node.before                         //Add before that node.       

        let element = document.createElement('p')
        let body = document.querySelectorAll('div')
        console.log(body)
        body[1].before(element)

        let p = document.querySelector('p');
        p.innerHTML = '<strong>Hello Chacha</strong>';
        p.style.color = 'red';
        p.style.fontSize = '20px';


4. After Method:
        node.after              //Add Element after the Node.

        let element = document.createElement('p')
        let body = document.querySelectorAll('div')
        console.log(body)
        body[1].after(element)

        let p = document.querySelector('p');
        p.innerHTML = '<strong>Hello Chacha</strong>';
        p.style.color = 'red';
        p.style.fontSize = '20px';


---------------------------------------------------------------------------------------------------------------

Remove Elements:

        node.remove()       //To Delete the Element.
        
                body[1].remove()