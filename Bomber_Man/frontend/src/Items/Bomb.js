import BomberManMap from "../BomberManMap";
import { imageKeys } from "../ImageHandler";
import { BOMB_TIME, MILLISEC_TO_SEC } from "../consts";
import ExplodeAbleItem from "./ExplodeAbleItem";
import Fire from "./Fire";
import Character from "./Character";

export default class Bomb extends ExplodeAbleItem {
	fireRange = 1
	timeoutID
	character
	constructor(x, y, fireRange, character) {
		super(imageKeys.BOMB)
		this.x = x
		this.y = y
		this.fireRange = fireRange
		this.character = character
		this.timeoutID = setTimeout(() => {
			this.explode()
		}, BOMB_TIME * MILLISEC_TO_SEC)
	}
	explode() {
		clearTimeout(this.timeoutID)
		// explode self, then explode up, down, left, and right
		BomberManMap.updateItem(this.x, this.y, new Fire(this.x, this.y))
		for (let i = 0; i < this.fireRange; i++) {
			const curItem = BomberManMap.getItem(this.x + i + 1, this.y)
			const keepExpand = this.expandFire(curItem)
			if (!keepExpand) break
		}
		for (let i = 0; i < this.fireRange; i++) {
			const curItem = BomberManMap.getItem(this.x - i - 1, this.y)
			const keepExpand = this.expandFire(curItem)
			if (!keepExpand) break
		}
		for (let i = 0; i < this.fireRange; i++) {
			const curItem = BomberManMap.getItem(this.x, this.y + i + 1)
			const keepExpand = this.expandFire(curItem)
			if (!keepExpand) break
		}
		for (let i = 0; i < this.fireRange; i++) {
			const curItem = BomberManMap.getItem(this.x, this.y - i - 1)
			const keepExpand = this.expandFire(curItem)
			if (!keepExpand) break
		}
		this.character.removeBomb(this);
	}

	expandFire(curItem) {
		if (!curItem) return false
		if (!curItem.isExplodeAble) return false

		const isBrick = curItem.explode()
		if (isBrick) return false
		return true
	}
}
