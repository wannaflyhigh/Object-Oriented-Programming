import { imageKeys } from "../ImageHandler";
import { BOMB_ADD_RATE, FIREPLUS_RATE, SPEED_UP_RATE } from "../consts";
import BombPlus from "./BombPlus";
import ExplodeAbleItem from "./ExplodeAbleItem";
import FirePlus from "./FirePlus";
import Grass from "./Grass";
import SpeedUp from "./SpeedUp";

export default class Brick extends ExplodeAbleItem {
	itemAfterFire
	isBrick = true
	constructor(x, y) {
		super(imageKeys.BRICK)
		this.x = x
		this.y = y
		this.itemAfterFire = Math.random() > SPEED_UP_RATE ?
			SpeedUp :
			Math.random() > SPEED_UP_RATE + FIREPLUS_RATE ?
				FirePlus :
				Math.random() > SPEED_UP_RATE + FIREPLUS_RATE + BOMB_ADD_RATE ?
					BombPlus
					: Grass
	}
}
