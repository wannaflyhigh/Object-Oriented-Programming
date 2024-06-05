import BomberManMap from "../BomberManMap";
import { imageKeys } from "../ImageHandler";
import Item from "./Item";
import ImageHandler from "../ImageHandler";
import { ITEM_HEIGHT, ITEM_WIDTH } from "../consts";

export default class Enemy extends Item {
	moveInterval = 500;
	moveTimer = 0;
	x;
	y;
	positionX;
	positionY;
	targetX;
	targetY;
	moveSpeed = 3
	isDead = false;
	deathTime = null;

	constructor(int_x, int_y) {
		super(imageKeys.ENEMY);
		this.x = int_x;
		this.y = int_y;
		this.targetX = this.x;
		this.targetY = this.y;
		this.positionX = int_x;
		this.positionY = int_y;
	}

	draw() {
		const distanceX = this.targetX - this.x;
		const distanceY = this.targetY - this.y;
		const tolerance = 0.05;

		const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);

		if (!this.isDead) {
			if (distance > tolerance) {
				const moveX = (distanceX / distance) * this.moveSpeed / 60;
				const moveY = (distanceY / distance) * this.moveSpeed / 60;

				this.x += moveX;
				this.y += moveY;
			}
		} else {
			if (this.deathTime === null) {
				this.deathTime = millis();
			} else if (millis() - this.deathTime > 800) {
				return;
			}
			this.image = ImageHandler.loadedImages[imageKeys.DEAD_ENEMY];
		}

		this.x = Math.max(1, Math.min(this.x, 9));
		this.y = Math.max(1, Math.min(this.y, 9));

		this.positionX = Math.round(this.x);
		this.positionY = Math.round(this.y);

		this.moveTimer += deltaTime;
		if (this.moveTimer >= this.moveInterval) {
			this.moveRandomly();
			this.moveTimer = 0;
		}

		image(this.image, this.x * ITEM_WIDTH, this.y * ITEM_HEIGHT, ITEM_WIDTH, ITEM_HEIGHT);
	}

	moveRandomly() {
		const directions = [
			{ dx: 0, dy: -1 },
			{ dx: 0, dy: 1 },
			{ dx: -1, dy: 0 },
			{ dx: 1, dy: 0 },
		];

		const validDirections = directions.filter(
			(direction) =>
				BomberManMap.isWalkable(
					this.positionX + direction.dx,
					this.positionY + direction.dy,
					"enemy"
				)
		);

		if (validDirections.length > 0) {
			const randomIndex = Math.floor(Math.random() * validDirections.length);
			const { dx, dy } = validDirections[randomIndex];
			this.targetX = this.x + dx;
			this.targetY = this.y + dy;
		}
	}
}