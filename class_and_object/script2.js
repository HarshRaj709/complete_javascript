class Parent{
    printmethod(){
        console.log('hello')
    }
}

class Child extends Parent{
    //using printmethod 
}

let children = new Child();


class Person{
    Eat(){
        console.log('lets Eat')
    }
    sleep(){
        console.log('lets sleep')
    }
    work(){
        console.log('Parents work')     // this will not work if we try to use harsh.work()
    }
}

class engineer extends Person{
    work(){
        console.log('Solve Problems')
    }
}

let harsh = new engineer


