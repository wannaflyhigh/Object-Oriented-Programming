import BomberManMap from "../BomberManMap";
import { imageKeys } from "../ImageHandler";
import Grass from "./Grass";
import { FIRE_TIME, MILLISEC_TO_SEC } from "../consts";
import { ExplodeAbleItem } from ".";

export default class Fire extends ExplodeAbleItem {
	timeoutID
	constructor(x, y, itemAfterFire) {
		super(imageKeys.FIRE)
		this.x = x
		this.y = y
		this.timeoutID = setTimeout(() => {
			BomberManMap.updateItem(this.x, this.y, itemAfterFire ? new itemAfterFire(this.x, this.y) : new Grass(this.x, this.y))
		}, FIRE_TIME * MILLISEC_TO_SEC)
	}
	resetFire() {
		clearTimeout(this.timeoutID)
	}
}
