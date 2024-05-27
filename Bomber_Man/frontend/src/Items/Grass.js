import { imageKeys } from "../ImageHandler";
import Item from "./Item";

export default class Grass extends Item {
	constructor() {
		super(imageKeys.GRASS)
	}
}
