import { ITEM_WIDTH, ITEM_HEIGHT } from "./consts";

class ImageHandler {
	imagePaths = ['../images/grass.png', '../images/stone.png', '../images/character.png', '../images/brick.png', '../images/bomb.png', '../images/fire.png', '../images/character2.png', '../images/fireplus.png', '../images/bombplus.png', '../images/speedup.png', '../images/character4.png', '../images/character3.png', '../images/bombbutton.png', '../images/up.png', '../images/down.png', '../images/right.png', '../images/left.png']
	loadedImages = []

	loadImages() {
		this.loadedImages = this.imagePaths.map(imgPath => {
			return this.loadAndResizeImage(imgPath, ITEM_WIDTH, ITEM_HEIGHT);
		})
	}

	loadAndResizeImage(imgPath, targetWidth, targetHeight) {
		const img = loadImage(imgPath);
		img.resize(targetWidth, targetHeight);
		return img;
	}

	getLoadedImage(imageKey) {
		return this.loadedImages[imageKey]
	}
}

export default new ImageHandler();

export const imageKeys = { GRASS: 0, STONE: 1, CHARACTER: 2, BRICK: 3, BOMB: 4, FIRE: 5, DEAD_CHARACTER: 6, FIREPLUS: 7, BOMBPLUS: 8, SPEEDUP: 9, ENEMY: 10, DEAD_ENEMY: 11, BOMB_BUTTON: 12, UP: 13, DOWN: 14, RIGHT: 15, LEFT: 16 }
