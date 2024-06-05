import '../css/style.css';
import { sketch } from 'p5js-wrapper';
import ImageHandler from './ImageHandler';
import BomberManMap from './BomberManMap';
import Character from "./Items/Character";
import Enemy from "./Items/Enemy";
import Fire from './Items/Fire';
import { BombPlus, FirePlus, Grass, SpeedUp } from './Items';
import { SCALE_SIZE } from './consts';
import { BombButton, Buttons, DownButton, LeftButton, RightButton, UpButton } from './Buttons';
import { getDynamicSizes } from './consts';

const bomberManMap = BomberManMap
let character;

let dynamicSizes;

const enemies = [];
const enemyPositions = [
	{ x: 9, y: 1 },
	{ x: 1, y: 9 },
	{ x: 9, y: 9 }
];
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
	const canvas = createCanvas(window.innerWidth, window.innerHeight);
	canvas.parent('canvas-container');
	frameRate(60);
	pixelDensity(1)
	ImageHandler.loadImages()
	bomberManMap.initMap()

	Buttons.forEach(btn => {
		btn.initImage()
	})

	character = new Character()

	for (const position of enemyPositions) {
		const enemy = new Enemy(position.x, position.y);
		enemies.push(enemy);
	}

	updateDynamicSizes();

	window.addEventListener('resize', () => {
		resizeCanvas(window.innerWidth, window.innerHeight);
		updateDynamicSizes();
	});
}

sketch.draw = function () {
	background(100);
	scale(SCALE_SIZE);
	bomberManMap.display()

	Buttons.forEach(btn => {
		btn.display()
	})

	for (const enemy of enemies) {
		if (!enemy.isDead && !character.isDead) {
			if (enemy.positionX === character.positionX && enemy.positionY === character.positionY) {
				character.isDead = true;
				break;
			}
		}
	}

	const characterX = character.positionX;
	const characterY = character.positionY;
	const itemAtCharacter = bomberManMap.getItem(characterX, characterY);
	if (itemAtCharacter instanceof SpeedUp) {
		character.speedUp();
		bomberManMap.updateItem(characterX, characterY, new Grass(characterX, characterY))
	}
	if (itemAtCharacter instanceof BombPlus) {
		character.bombPlus();
		bomberManMap.updateItem(characterX, characterY, new Grass(characterX, characterY))
	}
	if (itemAtCharacter instanceof FirePlus) {
		character.firePlus();
		bomberManMap.updateItem(characterX, characterY, new Grass(characterX, characterY))
	}
	if (itemAtCharacter instanceof Fire) {
		character.isDead = true;
	}

	character.draw()

	for (const enemy of enemies) {
		const enemyX = enemy.positionX;
		const enemyY = enemy.positionY;
		const itemAtEnemy = bomberManMap.getItem(enemyX, enemyY);
		if (itemAtEnemy instanceof Fire) {
			enemy.isDead = true;
		}

		enemy.draw();
	}


	let dx = 0, dy = 0;

	if (keyStates.up) {
		dx = 0;
		dy = -1;
	} else if (keyStates.down) {
		dx = 0;
		dy = 1;
	} else if (keyStates.left) {
		dx = -1;
		dy = 0;
	} else if (keyStates.right) {
		dx = 1;
		dy = 0;
	}

	character.move(dx, dy);
	
	for (let i = 0; i < touches.length; i++) {
		const touchX = touches[i].x, touchY = touches[i].y
		ellipse(touchX, touchY, 50, 50);
		BombButton.touchPending(touchX, touchY, () => { character.layBomb() })
		UpButton.touchPending(touchX, touchY, () => {
			resetKeyStates();
			keyStates.up = true;
		})
		DownButton.touchPending(touchX, touchY, () => {
			resetKeyStates();
			keyStates.down = true;
		})
		RightButton.touchPending(touchX, touchY, () => {
			resetKeyStates();
			keyStates.right = true;
		})
		LeftButton.touchPending(touchX, touchY, () => {
			resetKeyStates();
			keyStates.left = true;
		})
	}
	if (touches.length == 0)
		resetKeyStates()
}// draw

// do this prevent default touch interaction
function mousePressed() {
	return false;
}
sketch.mousePressed = mousePressed

document.addEventListener('gesturestart', function (e) {
	e.preventDefault();
});

function keyPressed() {
	if (key === 'w') {
		resetKeyStates();
		keyStates.up = true;
	} else if (key === 's') {
		resetKeyStates();
		keyStates.down = true;
	} else if (key === 'a') {
		resetKeyStates();
		keyStates.left = true;
	} else if (key === 'd') {
		resetKeyStates();
		keyStates.right = true;
	} else if (key === 'o') {
		character.layBomb()
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

function resetKeyStates() {
	keyStates.up = false;
	keyStates.down = false;
	keyStates.left = false;
	keyStates.right = false;
}

function updateDynamicSizes() {
	dynamicSizes = getDynamicSizes();
}

window.keyPressed = keyPressed; // To ensure keyPressed can be accessed by p5.js
window.keyReleased = keyReleased;
