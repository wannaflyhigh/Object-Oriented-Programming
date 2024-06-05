import BomberManMap from "../BomberManMap";
import { imageKeys } from "../ImageHandler";
import Item from "./Item";
import Grass from "./Grass";
import { FIRE_TIME, MILLISEC_TO_SEC } from "../consts";

export default class Fire extends Item {
	constructor(x, y, itemAfterFire) {
		super(imageKeys.FIRE)
		this.x = x
		this.y = y
		setTimeout(() => {
			BomberManMap.updateItem(this.x, this.y, itemAfterFire ? new itemAfterFire(this.x, this.y) : new Grass(this.x, this.y))
		}, FIRE_TIME * MILLISEC_TO_SEC)
	}
}
