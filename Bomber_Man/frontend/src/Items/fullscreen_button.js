import { imageKeys } from "../ImageHandler";
import ExplodeAbleItem from "./ExplodeAbleItem";

export default class FSbutton extends ExplodeAbleItem {
	constructor(x, y) {
		super(imageKeys.FULLSCREEN_BUTTON)
		this.x = x
		this.y = y
	}
}
