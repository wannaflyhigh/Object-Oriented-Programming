import '../css/style.css';
import { sketch } from 'p5js-wrapper';
import Grass from './Grass';

let grass
let grass2

sketch.preload = function () {
	console.log("hi")
	// grass = new Grass()
}
sketch.setup = function () {
	createCanvas(800, 600);
	grass = loadImage("../images/grass.png")
	grass2=new Grass()
	grass2.setup()
}

sketch.draw = function () {
	background(100);
	fill(255, 0, 0);
	noStroke();
	rectMode(CENTER);
	rect(mouseX, mouseY, 50, 50);
	image(grass, 0, 0)
	// grass.display()
	grass2.display()
}

sketch.mousePressed = function () {
	console.log('here');
}


