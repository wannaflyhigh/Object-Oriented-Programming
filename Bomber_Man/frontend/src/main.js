import '../css/style.css';
import { sketch } from 'p5js-wrapper';
import Grass from './Grass';
import ImageHandler from './ImageHandler';

sketch.preload = function () {
	console.log("hi")
}

sketch.setup = function () {
	createCanvas(800, 600);
	ImageHandler.loadImages()
}

sketch.draw = function () {
	background(100);
	(new Grass).display()
}

sketch.mousePressed = function () {
	console.log('here');
	console.log({ mouseX, mouseY });
}
