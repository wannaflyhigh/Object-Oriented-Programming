import '../css/style.css';
import { sketch } from 'p5js-wrapper';
import Grass from './Grass';
import ImageHandler from './ImageHandler';

const grass = new Grass()
const imageHandler = new ImageHandler()

sketch.preload = function () {
	console.log("hi")
}

sketch.setup = function () {
	createCanvas(800, 600);
	imageHandler.loadImages()
	grass.setImage(imageHandler.loadedImages[0])
}

sketch.draw = function () {
	background(100);
	// fill(255, 0, 0);
	// noStroke();
	// rectMode(CENTER);
	// rect(mouseX, mouseY, 50, 50);
	grass.display()
}

sketch.mousePressed = function () {
	console.log('here');
	console.log({ mouseX, mouseY });
}
