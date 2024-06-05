import { getFire } from ".";
import BomberManMap from "../BomberManMap";
import Item from "./Item";

export default class ExplodeAbleItem extends Item {
	isExplodeAble = true
	constructor(imageKey) {
		super(imageKey)
	}
	explode() {
		BomberManMap.updateItem(this.x, this.y, new (getFire())(this.x, this.y, this.itemAfterFire))
		return this.isBrick
	}
}
