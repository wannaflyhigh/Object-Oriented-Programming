import { imageKeys } from "../ImageHandler";
import Item from "./Item";

export default class Stone extends Item {
	constructor(x, y) {
		super(imageKeys.STONE)
		this.x = x
		this.y = y
	}
}
