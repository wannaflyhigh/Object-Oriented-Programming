import { imageKeys } from "../ImageHandler";
import ExplodeAbleItem from "./ExplodeAbleItem";

export default class FirePlus extends ExplodeAbleItem {
	constructor(x, y) {
		super(imageKeys.FIREPLUS)
		this.x = x
		this.y = y
	}
}