class Car {
  make: string;
  model: string;
  year: number;
  speed: number;

  constructor(make: string, model: string, year: number) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.speed = 0;
  }

  accelerate(): void {
    this.speed += 10;
    console.log(`Accelerating. Current speed: ${this.speed} km/h`);
  }

  brake(): void {
    this.speed -= 10;
    console.log(`Braking. Current speed: ${this.speed} km/h`);
  }

  turn(direction: string): void {
    console.log(`Turning ${direction}`);
  }
}


const myCar = new Car("Toyota", "Camry", 2020);
myCar.accelerate();
myCar.brake();
myCar.turn("left");
