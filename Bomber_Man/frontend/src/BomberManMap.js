import { Grass, Stone } from "./Items"

export default class BomberManMap {
	items = new Map()
	initMap() {
		for (let i = 0; i < 11; i++) {
			for (let j = 0; j < 11; j++) {
				if (i === 0 || j == 0 || i === 10 || j === 10) {
					this.items.set({ x: i, y: j }, new Stone())
				} else
					this.items.set({ x: i, y: j }, new Grass())
			}
		}
	}
	display() {
		this.items.forEach((value, key) => {
			value.display(key.x * 100, key.y * 100)
		})
	}
	updateItem(x, y) { }
}
