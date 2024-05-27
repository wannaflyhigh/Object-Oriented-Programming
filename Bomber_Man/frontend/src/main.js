import '../css/style.css';
import { sketch } from 'p5js-wrapper';
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
	scale(0.4);
	(new BomberManMap).display()
}

sketch.mousePressed = function () {
	console.log('here');
	console.log({ mouseX, mouseY });
	// NOTE:
	// if (mouseX > 0 && mouseX < windowWidth && mouseY > 0 && mouseY < windowHeight) {
	// 	let fs = fullscreen();
	// 	fullscreen(!fs);
	// }
}
