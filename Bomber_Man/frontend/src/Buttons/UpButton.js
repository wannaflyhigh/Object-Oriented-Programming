import { imageKeys } from "../ImageHandler";
import { MAP_HEIGHT, MAP_WIDTH } from "../consts";
import Button from "./Button";

class UpButton extends Button {
	constructor(x, y) {
		super(x, y, imageKeys.UP)
	}
}

export default new UpButton(2.5, 11.5)
