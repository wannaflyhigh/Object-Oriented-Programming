export default class Grass {
	a 
	setup() {
		this.a = loadImage('../images/grass.png');
	}

	display() {
		image(this.a, 0, 0);
	}
}