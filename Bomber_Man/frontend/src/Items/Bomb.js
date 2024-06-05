import BomberManMap from "../BomberManMap";
import { imageKeys } from "../ImageHandler";
import { BOMB_TIME, MILLISEC_TO_SEC } from "../consts";
import ExplodeAbleItem from "./ExplodeAbleItem";
import Fire from "./Fire";

export default class Bomb extends ExplodeAbleItem {
	fireRange = 1
	timeoutID
	constructor(x, y, fireRange) {
		super(imageKeys.BOMB)
		this.x = x
		this.y = y
		this.fireRange = fireRange
		this.timeoutID = setTimeout(() => {
			this.explode()
		}, BOMB_TIME * MILLISEC_TO_SEC)
	}
	explode() {
		clearTimeout(this.timeoutID)
		// explode self, then explode up, down, left, and right
		// NOTE: REFACTOR!!
		BomberManMap.updateItem(this.x, this.y, new Fire(this.x, this.y))
		for (let i = 0; i < this.fireRange; i++) {
			const curItem = BomberManMap.getItem(this.x + i + 1, this.y)
			if (!curItem) break
			if (!curItem.isExplodeAble) break
			curItem.explode()
		}
		for (let i = 0; i < this.fireRange; i++) {
			const curItem = BomberManMap.getItem(this.x - i - 1, this.y)
			if (!curItem) break
			if (!curItem.isExplodeAble) break
			curItem.explode()
		}
		for (let i = 0; i < this.fireRange; i++) {
			const curItem = BomberManMap.getItem(this.x, this.y + i + 1)
			if (!curItem) break
			if (!curItem.isExplodeAble) break
			curItem.explode()
		}
		for (let i = 0; i < this.fireRange; i++) {
			const curItem = BomberManMap.getItem(this.x, this.y - i - 1)
			if (!curItem) break
			if (!curItem.isExplodeAble) break
			curItem.explode()
		}
	}
}
