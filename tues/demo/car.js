class Car {
    constructor(make,model,year,color){
        this.makerOfCars = make
        this.model = model 
        this.year = year 
        this.color = color
        //default values
        this.miles = 0
    }
    drive(milesToDrive){
        this.miles += milesToDrive;
    }
}

class Sedan extends Car{
    constructor(make,model,year,color, type){
        super(make,model,year,color)
        this.passengerCount = 5
        this.type = type
    }
}


let chasesCar = new Car('Pontiac', 'GrandPrix',1998, "red")
let ashleysCar = new Car('Music','mp3', 2001, 'blue')
chasesCar.drive(200)

let vinsonsCar = new Sedan('Tesla', 'model 3', 2025, "Matte Black", "Electric")
vinsonsCar.drive(100)

console.log(vinsonsCar)
