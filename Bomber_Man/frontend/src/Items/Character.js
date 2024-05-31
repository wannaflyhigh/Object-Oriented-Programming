import { imageKeys } from "../ImageHandler";
import Item from "./Item";

export default class Character extends Item {
	x;
	y;
	positionX;
	positionY;
	targetX;
	targetY;
	moveSpeed = 0.05;

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
		console.log(this.positionX,this.positionY);

		newX = Math.max(1, Math.min(newX, 9));
  		newY = Math.max(1, Math.min(newY, 9));

		this.targetX = newX;
		this.targetY = newY;
	
		/*
		// 檢查新位置是否是草地
		const key = { x: newX, y: newY };;
		console.log("key",key);
		const item = map.items.get(key);
		console.log("item",item);
		if (item && item.constructor.name === 'Grass') {
			this.x = newX;
			this.y = newY;
			console.log("newPosition",this.x,this.y)
			this.display(this.x *100, this.y*100)
		}*/
	}

	draw() {
		this.x = lerp(this.x, this.targetX, this.moveSpeed);
		this.y = lerp(this.y, this.targetY, this.moveSpeed);

		this.positionX = Math.round(this.x);
    	this.positionY = Math.round(this.y);
	  
		image(this.image, this.x * 100, this.y * 100);
	  }
}