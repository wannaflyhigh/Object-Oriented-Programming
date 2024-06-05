import ImageHandler from "../ImageHandler";
import { ITEM_HEIGHT, ITEM_WIDTH } from "../consts";

export default class Item {
	image
	x
	y
	constructor(imageKey) {
		this.image = ImageHandler.getLoadedImage(imageKey)
	}
	display() {
		image(this.image, this.x * ITEM_WIDTH, this.y * ITEM_HEIGHT, ITEM_WIDTH, ITEM_HEIGHT);
	}
}
