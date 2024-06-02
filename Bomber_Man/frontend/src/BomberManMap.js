import { Brick, Grass, Stone } from "./Items";
import Character from "./Items/Character";
const MAP_WIDTH = 11, MAP_HEIGHT = 11

class BomberManMap {
	items = new Map();

	initMap() {
		for (let x = 0; x < MAP_HEIGHT; x++) {
			for (let y = 0; y < MAP_WIDTH; y++) {
				if (x === 0 || y == 0 || x === MAP_HEIGHT - 1 || y === MAP_WIDTH - 1 ||
					(x % 2 === 0 && y % 2 === 0)
				) {
					this.items.set(`${x},${y}`, new Stone(x, y))
					continue
				}
				this.items.set(`${x},${y}`, Math.random() > 0.5 ? new Grass(x, y) : new Brick(x, y))
			}
		}
	}

	display() {
		this.items.forEach((item, key) => {
			item.display()
		})
	}

	updateItem(x, y, newItem) {
		this.items.delete(`${x},${y}`)
		this.items.set(`${x},${y}`, newItem)
	}

	moveCharacter(dx, dy) {
		this.character.move(dx, dy, this);
	}

	/*checkObject(x, y) {
		const item = this.items.get(`${x},${y}`);
		return item instanceof Grass;
	}*/
}

export default new BomberManMap()
