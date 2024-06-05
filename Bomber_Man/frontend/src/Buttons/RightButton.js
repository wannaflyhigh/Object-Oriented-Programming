import { imageKeys } from "../ImageHandler";
import Button from "./Button";

const BUTTON_WIDTH = 200, BUTTON_HEIGHT = 200

class RightButton extends Button {
	constructor(x, y) {
		super(x, y, imageKeys.RIGHT, BUTTON_WIDTH, BUTTON_HEIGHT)
	}
}

export default new RightButton(4.5, 13.5)
