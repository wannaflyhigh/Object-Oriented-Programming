import BomberManMap from "../BomberManMap";
import Fire from "./Fire";
import Item from "./Item";

export default class ExplodeAbleItem extends Item {
	isExplodeAble = true
	constructor(imageKey) {
		super(imageKey)
	}
	explode() {
		BomberManMap.updateItem(this.x, this.y, new Fire(this.x, this.y, this.itemAfterFire))
		return this.isBrick
	}
}
