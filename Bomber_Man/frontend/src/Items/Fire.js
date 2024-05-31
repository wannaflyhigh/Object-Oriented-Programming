import BomberManMap from "../BomberManMap";
import { imageKeys } from "../ImageHandler";
import Item from "./Item";
import Grass from "./Grass";

const FIRE_TIME = 2

export default class Fire extends Item {
	constructor(x, y) {
		super(imageKeys.FIRE)
		this.x = x
		this.y = y
		setTimeout(() => {
			BomberManMap.updateItem(this.x, this.y, new Grass())
		}, FIRE_TIME * 1000)
	}
}
