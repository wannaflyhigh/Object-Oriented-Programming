import ImageHandler from "./ImageHandler";

export default class Grass {
	image
	constructor() {
		this.image = ImageHandler.loadedImages[0]
	}

	display(x, y) {
		image(this.image, x, y);
	}
}
