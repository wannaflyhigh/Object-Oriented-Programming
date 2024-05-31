import { Brick, Grass, Stone } from "./Items";
import Character from "./Items/Character";
const MAP_WIDTH = 11, MAP_HEIGHT = 11

class BomberManMap {
	items = new Map();

	initMap() {
		for (let i = 0; i < MAP_HEIGHT; i++) {
			for (let j = 0; j < MAP_WIDTH; j++) {
				if (i === 0 || j == 0 || i === MAP_HEIGHT - 1 || j === MAP_WIDTH - 1 ||
					(i % 2 === 0 && j % 2 === 0)
				) {
					this.items.set({ x: i, y: j }, new Stone())
					continue
				}
				this.items.set({ x: i, y: j }, Math.random() > 0.5 ? new Grass() : new Brick())
			}
		}
	}

	display() {
		this.items.forEach((value, key) => {
			value.display(key.x * 100, key.y * 100)
		})
	}

	updateItem(x, y, newItem) {
		this.items.delete({ x, y })
		this.items.set({ x, y }, newItem)
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
