var car = {
    brand: "Toyota",
    speed: 120,
    brake: 2,
    accelerate: function () {
        console.log("The ".concat(this.brand, " is accelerating"));
    }
};
car.accelerate();
