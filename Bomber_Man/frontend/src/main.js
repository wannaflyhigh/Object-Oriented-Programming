import '../css/style.css';
import { sketch } from 'p5js-wrapper';
import ImageHandler from './ImageHandler';
import BomberManMap from './BomberManMap';
import Character from "./Items/Character";
import Enemy from "./Items/Enemy";
import Fire from './Items/Fire';

const bomberManMap = BomberManMap
let character;
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

let showFullScreenMessage = true;

sketch.preload = function () {
	console.log("hi")
}

sketch.setup = function () {
	createCanvas(1920, 1080);
	ImageHandler.loadImages()
	bomberManMap.initMap()
	character = new Character()

	for (const position of enemyPositions) {
        const enemy = new Enemy(position.x, position.y);
        enemies.push(enemy);
    }
}

sketch.draw = function () {
	background(100);
	scale(0.4);
	bomberManMap.display()

	for (const enemy of enemies) {
        if (!enemy.isDead && !character.isDead) {
            if (enemy.positionX === character.positionX && enemy.positionY === character.positionY) {
                character.isDead = true;
                break; // 如果碰到一個敵人就退出循環
            }
        }
    }

	const characterX = character.positionX;
    const characterY = character.positionY;
    const itemAtCharacter = bomberManMap.getItem(characterX, characterY);
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

	if (showFullScreenMessage) {
		textSize(75);
		fill(255);
		text("Press ESC to enter fullscreen mode", 0, height / 2);
	}
}

sketch.mousePressed = function () {
	console.log('here');
	console.log({ mouseX, mouseY });
	// NOTE: full screen while playing?
	// if (mouseX > 0 && mouseX < windowWidth && mouseY > 0 && mouseY < windowHeight) {
	// 	let fs = fullscreen();
	// 	fullscreen(!fs);
	// }
}

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
	}
	else if (key === 'o') {
		character.layBomb()
	}else if (key === 'Escape') { 
		let fs = fullscreen();
		fullscreen(!fs);
		showFullScreenMessage = false;
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

window.keyPressed = keyPressed; // To ensure keyPressed can be accessed by p5.js
window.keyReleased = keyReleased;