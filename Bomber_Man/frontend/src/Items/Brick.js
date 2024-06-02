import { imageKeys } from "../ImageHandler";
import Item from "./Item";

export default class Brick extends Item {
	constructor(x, y) {
		super(imageKeys.BRICK)
		this.x = x
		this.y = y
	}
}
