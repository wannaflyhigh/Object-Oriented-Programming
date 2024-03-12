class Shape {
    type: string;
    sides: number;
  
    constructor(type: string, sides: number) {
      this.type = type;
      this.sides = sides;
    }
  
    calculatePerimeter(): void {
      throw new Error('This method must be implemented in subclass');
    }
  }
  
  class Rectangle extends Shape {
    length: number;
    width: number;
  
    constructor(length: number, width: number) {
      super('rectangle', 4);
      this.length = length;
      this.width = width;
    }
  
    calculatePerimeter(): number {
      return 2 * (this.length + this.width);
    }
  }
  
  class Circle extends Shape {
    radius: number;
  
    constructor(radius: number) {
      super('circle', Infinity);
      this.radius = radius;
    }
  
    calculatePerimeter(): number {
      return 2 * Math.PI * this.radius;
    }
  }
  
  const rectangle = new Rectangle(5, 3);
  const circle = new Circle(4);
  console.log(rectangle.calculatePerimeter());
  console.log(circle.calculatePerimeter());
  