class Person{
    constructor(name){
        this.species = 'home sepians';
        this.name = name;
    }
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
    constructor(name){
        super(name);
        //this.branch = branch;       // if we create a constructor in child class then we need to use super();
    }
    work(){
        super.Eat();                    // before accessing methods of Parent class we need to use super
        console.log('Solve Problems')
    }
}

let harsh = new engineer('cse')