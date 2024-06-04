import { imageKeys } from "../ImageHandler";
import ExplodeAbleItem from "./ExplodeAbleItem";

export default class Brick extends ExplodeAbleItem {
	constructor(x, y) {
		super(imageKeys.BRICK)
		this.x = x
		this.y = y
	}
}
