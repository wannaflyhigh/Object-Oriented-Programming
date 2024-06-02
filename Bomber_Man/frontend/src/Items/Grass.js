import { imageKeys } from "../ImageHandler";
import Item from "./Item";

export default class Grass extends Item {
	constructor(x, y) {
		super(imageKeys.GRASS)
		this.x = x
		this.y = y
	}
}
