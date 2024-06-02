import BomberManMap from "../BomberManMap";
import { imageKeys } from "../ImageHandler";
import { BOMB_TIME, MILLISEC_TO_SEC } from "../consts";
import Fire from "./Fire";
import Item from "./Item";

export default class Bomb extends Item {
	constructor(x, y) {
		super(imageKeys.BOMB)
		this.x = x
		this.y = y
		setTimeout(() => {
			BomberManMap.updateItem(this.x, this.y, new Fire(this.x, this.y))
		}, BOMB_TIME * MILLISEC_TO_SEC)
	}
}
