import ImageHandler from "./ImageHandler";

export default class Grass {
	image
	constructor() {
		this.image = ImageHandler.loadedImages[0]
	}

	display() {
		image(this.image, 0, 0);
	}
}
