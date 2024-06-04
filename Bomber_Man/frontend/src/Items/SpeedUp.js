import { imageKeys } from "../ImageHandler";
import ExplodeAbleItem from "./ExplodeAbleItem";

export default class SpeedUp extends ExplodeAbleItem {
	constructor(x, y) {
		super(imageKeys.SPEEDUP)
		this.x = x
		this.y = y
	}
}
