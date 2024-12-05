// Class Car
class Car {
    constructor(make = 'Toyota', model = 'Corolla', year = 1995, mileage = 554 ) {
        this.make = make;
        this.model =model;
        this.year = year;
        this.mileage = mileage;
         
    }
    //  Runnning method 
    drive(distance) {
        // Adding distance to mileage
      this.mileage += distance;
    }
    getInfo() {
        return `${this.year} ${this.make} ${this.model} with ${this.mileage} miles`;
    }
}

// Creating an OBject of the class

const car1 = new Car('Nessin', 'Admira', 2006, 90000)

// Running drive method on car1
car1.drive(400);
// running the getInfo method on car1
console.log(car1.getInfo());