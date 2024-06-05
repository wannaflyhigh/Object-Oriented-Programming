import { imageKeys } from "../ImageHandler";
import Button from "./Button";

const BUTTON_WIDTH = 200, BUTTON_HEIGHT = 200

class LeftButton extends Button {
	constructor(x, y) {
		super(x, y, imageKeys.LEFT, BUTTON_WIDTH, BUTTON_HEIGHT)
	}
}

export default new LeftButton(0.5, 13.5)
