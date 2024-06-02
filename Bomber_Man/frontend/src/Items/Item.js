import ImageHandler from "../ImageHandler";
import { IMAGE_HEIGHT, ITEM_WIDTH } from "../consts";

export default class Item {
	image
	x
	y
	constructor(imageKey) {
		this.image = ImageHandler.loadedImages[imageKey]
	}
	display() {
		image(this.image, this.x * ITEM_WIDTH, this.y * IMAGE_HEIGHT);
	}
}
