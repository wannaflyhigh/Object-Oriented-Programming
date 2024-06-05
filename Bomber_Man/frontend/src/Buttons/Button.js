import ImageHandler from "../ImageHandler"
import { ITEM_HEIGHT, ITEM_WIDTH, SCALE_SIZE } from "../consts"

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
		image(this.image, this.x * ITEM_WIDTH, this.y * ITEM_HEIGHT, ITEM_WIDTH * 2, ITEM_HEIGHT * 2);
	}
	touchPending(mouseX, mouseY, todo) {
		if ((mouseX / SCALE_SIZE >= this.x * ITEM_WIDTH)
			&& (mouseX / SCALE_SIZE <= this.x * ITEM_WIDTH + ITEM_WIDTH * 2)
			&& (mouseY / SCALE_SIZE >= this.y * ITEM_HEIGHT)
			&& (mouseY / SCALE_SIZE <= this.y * ITEM_HEIGHT + ITEM_HEIGHT * 2)
		)
			todo()
	}
}
