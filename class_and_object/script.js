// Objects

const student = {
    fullName : "Harsh",
    marks : 98.97,
    printMarks : function(){
        console.log(this.marks);
    },
    arry : ['mangoes','leechi','nimbu']
}

const employee = {
    calctax1(){
        console.log('Tax rate is 10%')
    },
    calctax2 : function(){
        console.log('Tax rate is 20%')
    }
}

const karanArjun = {
    salary : 50000,
    calctax2 : function(){
        console.log('Tax rate is 30%')      // this will get print if we use karanArjun.calctax2()
    }
}
const Rahul = {
    salary : 50000,
}
const Sidharth = {
    salary : 50000,
}
const Shiva = {
    salary : 50000,
}
//prototype
karanArjun.__proto__ = employee;        //we can access all the methods of above employee object
Rahul.__proto__ = employee;
Sidharth.__proto__ = employee;
Shiva.__proto__ = employee;

//if object and prototype have same method, objects method will be used.


