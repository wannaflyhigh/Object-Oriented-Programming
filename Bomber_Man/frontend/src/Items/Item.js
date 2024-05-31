import ImageHandler from "../ImageHandler";

export default class Item {
	image
	x
	y
	constructor(imageKey) {
		this.image = ImageHandler.loadedImages[imageKey]
	}
	display(x, y) {
		image(this.image, x, y);
	}
}
