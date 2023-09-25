///interfaces ex 3 Use the below interface and object. Add another method in the interface called brake and implement it in the car object.
interface Vehicle {
    brand: string;
    speed: number;
    brake: number;
    
    accelerate(): void;
}

const car: Vehicle = {
    brand: "Toyota",
    speed: 120,
    brake: 2,
    accelerate(): void {
        console.log(`The ${this.brand} is accelerating`);
    }
}

car.accelerate();