import { imageKeys } from "../ImageHandler";
import ExplodeAbleItem from "./ExplodeAbleItem";

export default class FSbutton extends ExplodeAbleItem {
	constructor(x, y) {
		this.x = x
		this.y = y
        this.img = ImageHandler.loadedImages[imageKeys.FULLSCREEN_BUTTON];
	}
}
