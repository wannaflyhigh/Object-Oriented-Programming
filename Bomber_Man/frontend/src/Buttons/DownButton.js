import { imageKeys } from "../ImageHandler";
import Button from "./Button";

const BUTTON_WIDTH = 687, BUTTON_HEIGHT = 720

class DownButton extends Button {
	constructor(x, y) {
		super(x, y, imageKeys.DOWN, BUTTON_WIDTH, BUTTON_HEIGHT)
	}
}

export default new DownButton(270, 1550)
