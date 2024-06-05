import { imageKeys } from "../ImageHandler";
import Button from "./Button";

const BUTTON_WIDTH = 200, BUTTON_HEIGHT = 200

class UpButton extends Button {
	constructor(x, y) {
		super(x, y, imageKeys.UP, BUTTON_WIDTH, BUTTON_HEIGHT)
	}
}

export default new UpButton(270, 1320)
