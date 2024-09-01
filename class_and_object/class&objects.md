Objects Creation in js:

// Objects

const student = {
    fullName : "Harsh",
    marks : 98.97,
    printMarks : function(){
        console.log(this.marks);        // here this means current instance... as self in python.
    },
}

Access Objects in javascript...
        student.fullName
        student.marks
        student.printMarks()

---------------------------------------------------------------------------------------------------------------

Prototype:
                
        [[Prototype]]: 
        hasOwnProperty()

        isPrototypeOf()

        propertyIsEnumerable()

        toLocaleString()

        toString()

        valueOf()
        __defineGetter__: ƒ __defineGetter__()
        __defineSetter__: ƒ __defineSetter__()
        __lookupGetter__: ƒ __lookupGetter__()
        __lookupSetter__: ƒ __lookupSetter__()
        __proto__: (...)
        get __proto__: ƒ __proto__()
        set __proto__: ƒ __proto__()

    Example if we create an array then we get built in push ,pop and other methods
        
        student.arry.push('melon')

-----> we can set prototype by using : __prototype__

        const Shiva = {
            salary : 50000,
        }
        //prototype
        karanArjun.__proto__ = employee;        //we can access all the methods of above employee object
        Rahul.__proto__ = employee;
        Sidharth.__proto__ = employee;
        Shiva.__proto__ = employee;


---------------------------------------------------------------------------------------------------------------

    ------------------> Classes <-------------------
script1.js

            class ToyotaCar{
            start(){
                console.log('start');
            }
            stop(){
                console.log('end');
            }

            setBrand(brand){
                this.brand = brand;
            }

            getbrand(){
                console.log(this.brand);
            }
        }

        let fortuner = new ToyotaCar        //fortuner.start()
        fortuner.setBrand('Toyota');

---------------------------------------------------------------------------------------------------------------

                        -----------------------> Constructor <----------------------

Constructors() method is:
    automatically invoked by new 


        class ToyotaCar{
        constructor(brand,milage){
            console.log('creating new object');     //created automaticaaly
            this.brand = brand;
            this.milage = milage;
        }
        start(){
            console.log('start');
        }
        stop(){
            console.log('end');
        }

        setBrand(brand){
            this.brand = brand;
        }

        getbrand(){
            console.log(this.brand);
        }
    }

    let fortuner = new ToyotaCar('mini lexa',10)        //fortuner.start()
    // fortuner.setBrand('Toyota');
    let lexus = new ToyotaCar

---------------------------------------------------------------------------------------------------------------

                    -------------------> Inheritance in Js <------------------
    //script2
    class Parent{
        printmethod(){
            console.log('hello')
            }
    }

    class Child extends Parent{
            //using printmethod 
    }

        let children = new Child();

// if child and parent have same methods than child method will be used.                    [Method Overriding]

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

---------------------------------------------------------------------------------------------------------------

                        ------------------> Super Keywords script3.js<---------------------

    The super keyword is used to call the constructor of its parent class to access the parent's properties and methods.

    super(args)     //call Parent's constructor

    super.parentMethods(args)


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