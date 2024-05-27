import Grass from "./Items/Grass"
import Stone from "./Items/Stone"

export default class BomberManMap {
	objects = new Map()
	constructor() {
		this.initMap()
	}
	initMap() {
		for (let i = 0; i < 11; i++) {
			for (let j = 0; j < 11; j++) {
				if (i === 0 || j == 0 || i === 10 || j === 10) {
					this.objects.set({ x: i, y: j }, new Stone())
				} else
					this.objects.set({ x: i, y: j }, new Grass())
			}
		}
	}
	display() {
		this.objects.forEach((value, key) => {
			value.display(key.x * 100, key.y * 100)
		})
	}
}
