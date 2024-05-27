import Grass from "./Grass"

export default class BomberManMap {
	objects = new Map()
	constructor() {
		this.initMap()
	}
	initMap() {
		for (let i = 0; i < 12; i++) {
			for (let j = 0; j < 12; j++) {
				this.objects.set({ i, j }, new Grass())
			}
		}
	}
	display() {
		this.objects.forEach((value, key) => {
			value.display(key.i * 100, key.j * 100)
		})
	}
}
