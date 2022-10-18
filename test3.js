// Js class practice

class Car{
    constructor(name){
        this.name = name;
    }
   static showName() {
        console.log(this.name);
   }
}

class Car2 extends Car{
    constructor(name, model){
        super(name);
        this.model = model;
    }

    carDetails(){
        console.log(this.name + " " + this.model)
    }

}



let car3 = new Car2("Audi", "max2022");

car3.carDetails();
Car2.showName()
