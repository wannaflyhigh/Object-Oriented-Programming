import BomberManMap from "../BomberManMap";
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

	constructor() {
		super(imageKeys.CHARACTER)
		this.x = 1;
		this.y = 1;
		this.targetX = this.x;
		this.targetY = this.y;
		this.positionX = 1;
		this.positionY = 1;
	}

	move(dx, dy) {
		let newX = this.x + dx;
		let newY = this.y + dy;
		console.log(this.positionX, this.positionY);

		newX = Math.max(1, Math.min(newX, 9));
		newY = Math.max(1, Math.min(newY, 9));

		this.targetX = newX;
        this.targetY = newY;

		/*if (BomberManMap.checkObject(newX, newY)) {
            this.targetX = newX;
            this.targetY = newY;
        }*/
	}

	draw() {

        const distanceX = this.targetX - this.x;
        const distanceY = this.targetY - this.y;

		//if diagonal movement is allowed
        const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);

        if (distance < 0.01) {
            this.x = this.targetX;
            this.y = this.targetY;
        } else {
            const moveX = (distanceX / distance) * this.moveSpeed / 60;
            const moveY = (distanceY / distance) * this.moveSpeed / 60;

            this.x += moveX;
            this.y += moveY;
        }

        this.x = Math.max(1, Math.min(this.x, 9));
        this.y = Math.max(1, Math.min(this.y, 9));

        this.positionX = Math.round(this.x);
        this.positionY = Math.round(this.y);

        image(this.image, this.x * 100, this.y * 100);
	}

	layBomb() {
		BomberManMap.updateItem(this.positionX, this.positionY, new Bomb(this.positionX, this.positionY))
	}
}