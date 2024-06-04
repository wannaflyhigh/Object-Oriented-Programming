import { imageKeys } from "../ImageHandler";
import ExplodeAbleItem from "./ExplodeAbleItem";

export default class Grass extends ExplodeAbleItem {
	constructor(x, y) {
		super(imageKeys.GRASS)
		this.x = x
		this.y = y
	}
}
