import { imageKeys } from "../ImageHandler";
import Item from "./Item";

export default class Brick extends Item {
	constructor() {
		super(imageKeys.BRICK)
	}
}
