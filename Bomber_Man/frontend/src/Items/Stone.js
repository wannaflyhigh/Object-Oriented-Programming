import { imageKeys } from "../ImageHandler";
import Item from "./Item";

export default class Stone extends Item {
	constructor() {
		super(imageKeys.STONE)
	}
}
