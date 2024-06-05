import { imageKeys } from "../ImageHandler";
import Button from "./Button";

const BUTTON_WIDTH = 619, BUTTON_HEIGHT = 559

class BombButton extends Button {
	constructor(x, y) {
		super(x, y, imageKeys.BOMB_BUTTON, BUTTON_WIDTH, BUTTON_HEIGHT)
	}
}

export default new BombButton(800, 1300)
