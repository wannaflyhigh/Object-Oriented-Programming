import ImageHandler from "../ImageHandler"
import { SCALE_SIZE } from "../consts"

export default class Button {
	x
	y
	image
	width
	height
	imageKey
	constructor(x, y, imageKey, width, height) {
		this.x = x
		this.y = y
		this.imageKey = imageKey
		this.width = width
		this.height = height
	}
	initImage() {
		this.image = ImageHandler.loadedImages[this.imageKey]
	}
	display() {
		image(this.image, this.x, this.y);
	}
	touchPending(mouseX, mouseY, todo) {
		if ((mouseX / SCALE_SIZE >= this.x)
			&& (mouseX / SCALE_SIZE <= this.x + this.width)
			&& (mouseY / SCALE_SIZE >= this.y)
			&& (mouseY / SCALE_SIZE <= this.y + this.height)
		)
			todo()
	}
}
