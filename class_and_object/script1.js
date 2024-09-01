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