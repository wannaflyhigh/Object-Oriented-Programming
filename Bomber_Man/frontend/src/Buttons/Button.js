import ImageHandler from "../ImageHandler"
import { ITEM_HEIGHT, ITEM_WIDTH, SCALE_SIZE } from "../consts"
const BUTTON_WIDTH = 2, BUTTON_HEIGHT = 2
export default class Button {
	x
	y
	image
	imageKey
	constructor(x, y, imageKey) {
		this.x = x
		this.y = y
		this.imageKey = imageKey
	}
	initImage() {
		this.image = ImageHandler.getLoadedImage(this.imageKey)
	}
	display() {
		image(this.image, this.x * ITEM_WIDTH, this.y * ITEM_HEIGHT, ITEM_WIDTH * BUTTON_WIDTH, ITEM_HEIGHT * BUTTON_HEIGHT);
	}
	touchPending(mouseX, mouseY, todo) {
		if ((mouseX / SCALE_SIZE >= this.x * ITEM_WIDTH)
			&& (mouseX / SCALE_SIZE <= this.x * ITEM_WIDTH + ITEM_WIDTH * BUTTON_WIDTH)
			&& (mouseY / SCALE_SIZE >= this.y * ITEM_HEIGHT)
			&& (mouseY / SCALE_SIZE <= this.y * ITEM_HEIGHT + ITEM_HEIGHT * BUTTON_HEIGHT)
		) {
			todo()
		}
	}
}
