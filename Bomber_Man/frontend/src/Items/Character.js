import BomberManMap from "../BomberManMap";
import ImageHandler from "../ImageHandler";
import { imageKeys } from "../ImageHandler";
import Bomb from "./Bomb";
import Item from "./Item";

export default class Character extends Item {
	x;
	y;
	positionX;
	positionY;
	targetX;
	targetY;
	moveSpeed = 3;
	fireRange = 1;
	isDead = false;

	constructor() {
		super(imageKeys.CHARACTER)
		this.x = 1;
		this.y = 1;
		this.targetX = this.x;
		this.targetY = this.y;
		this.positionX = 1;
		this.positionY = 1;
		this.deathTimer = 0;
	}

	updateImage() {
		if (this.isDead) {
			this.image = ImageHandler.loadedImages[imageKeys.DEAD_CHARACTER];
		}
	}


	move(dx, dy) {
		let newX = (this.positionX + dx);
		let newY = (this.positionY + dy);

		newX = Math.max(1, Math.min(newX, 9));
		newY = Math.max(1, Math.min(newY, 9));

		if (BomberManMap.isWalkable(newX, newY, "character")) {
			this.targetX = newX;
			this.targetY = newY;
		}
	}

	draw() {

		this.updateImage();
		const distanceX = this.targetX - this.x;
		const distanceY = this.targetY - this.y;
		const tolerance = 0.05;

		//if diagonal movement is allowed
		const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);

		if (!this.isDead) {
			if (distance > tolerance) {
				const moveX = (distanceX / distance) * this.moveSpeed / 60;
				const moveY = (distanceY / distance) * this.moveSpeed / 60;

				this.x += moveX;
				this.y += moveY;
			}
		} else {
			this.deathTimer++;
			if (this.deathTimer >= 180) {
				this.respawn();
			}
		}

		this.x = Math.max(1, Math.min(this.x, 9));
		this.y = Math.max(1, Math.min(this.y, 9));

		this.positionX = Math.round(this.x);
		this.positionY = Math.round(this.y);

		image(this.image, this.x * 100, this.y * 100);
	}

	respawn() {
		this.isDead = false;
		this.deathTimer = 0;
		this.x = 1;
		this.y = 1;
		this.targetX = this.x;
		this.targetY = this.y;
		this.positionX = 1;
		this.positionY = 1;
		this.image = ImageHandler.loadedImages[imageKeys.CHARACTER];
	}


	layBomb() {
		BomberManMap.updateItem(this.positionX, this.positionY, new Bomb(this.positionX, this.positionY, this.fireRange))
	}
}