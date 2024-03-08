class Shape {
	printSelf() {
		console.log(`Shape`)
	}
}

class Circle extends Shape {
	printSelf() {
		console.log(`Circle`)
	}
}
class Triangle extends Shape {
	printSelf() {
		console.log(`Triangle`)
	}
}
class Rectangle extends Shape {
	printSelf() {
		console.log(`Rectangle`)
	}
}

const shapes: Shape[] = []

shapes.push(new Circle())
shapes.push(new Triangle())
shapes.push(new Rectangle())
shapes.push(new Shape())

console.log(`There's ${shapes.length} shapes.`)
shapes.forEach((shape) => shape.printSelf())
