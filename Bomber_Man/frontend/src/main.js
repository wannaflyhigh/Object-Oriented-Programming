import '../css/style.css';
import { sketch } from 'p5js-wrapper';
import ImageHandler from './ImageHandler';
import BomberManMap from './BomberManMap';
import Character from "./Items/Character";

const bomberManMap = new BomberManMap()
let character;
const keyStates = {
	up: false,
	down: false,
	left: false,
	right: false
};

sketch.preload = function () {
	console.log("hi")
}

sketch.setup = function () {
	createCanvas(1920, 1080);
	ImageHandler.loadImages()
	bomberManMap.initMap()
	character = new Character()
}

sketch.draw = function () {
	background(100);
	scale(0.4);
	bomberManMap.display()
	character.draw()

	let dx = 0, dy = 0;
  	if (keyStates.up) dy = -1;
  	else if (keyStates.down) dy = 1;
  	if (keyStates.left) dx = -1;
  	else if (keyStates.right) dx = 1;
	
	character.move(dx, dy);
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

function keyPressed() {
	if (key === 'w') {
	  keyStates.up = true;
	} else if (key === 's') {
	  keyStates.down = true;
	} else if (key === 'a') {
	  keyStates.left = true;
	} else if (key === 'd') {
	  keyStates.right = true;
	}
  }
  
  function keyReleased() {
	if (key === 'w') {
	  keyStates.up = false;
	} else if (key === 's') {
	  keyStates.down = false;
	} else if (key === 'a') {
	  keyStates.left = false;
	} else if (key === 'd') {
	  keyStates.right = false;
	}
  }

window.keyPressed = keyPressed; // To ensure keyPressed can be accessed by p5.js
window.keyReleased = keyReleased;