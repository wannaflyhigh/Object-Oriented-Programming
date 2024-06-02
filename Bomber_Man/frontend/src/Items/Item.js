import ImageHandler from "../ImageHandler";

export default class Item {
	image
	x
	y
	constructor(imageKey) {
		this.image = ImageHandler.loadedImages[imageKey]
	}
	display() {
		image(this.image, this.x * 100, this.y * 100);
	}
}
