export default class Grass {
	image
	setImage(image) {
		this.image = image
	}

	display() {
		image(this.image, 0, 0);
	}
}
