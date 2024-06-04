import { imageKeys } from "../ImageHandler";
import ExplodeAbleItem from "./ExplodeAbleItem";

export default class BombPlus extends ExplodeAbleItem {
	constructor(x, y) {
		super(imageKeys.BOMBPLUS)
		this.x = x
		this.y = y
	}
}
