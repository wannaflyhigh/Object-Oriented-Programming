import '../css/style.css';
import { sketch } from 'p5js-wrapper';
import Grass from './Grass';
import ImageHandler from './ImageHandler';
import BomberManMap from './BomberManMap';

sketch.preload = function () {
	console.log("hi")
}

sketch.setup = function () {
	createCanvas(1920, 1080);
	ImageHandler.loadImages()
}

sketch.draw = function () {
	background(100);
	(new Grass).display(0, 0);
	(new BomberManMap()).display()
}

sketch.mousePressed = function () {
	console.log('here');
	console.log({ mouseX, mouseY });
}
