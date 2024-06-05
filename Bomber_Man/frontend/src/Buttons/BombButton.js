import { imageKeys } from "../ImageHandler";
import Button from "./Button";

const BOMB_BUTTON_WIDTH = 619, BOMB_BUTTON_HEIGHT = 559

class BombButton extends Button {
	constructor(x, y) {
		super(x, y, imageKeys.BOMB_BUTTON, BOMB_BUTTON_WIDTH, BOMB_BUTTON_HEIGHT)
	}
}

export default new BombButton(800, 1300)
