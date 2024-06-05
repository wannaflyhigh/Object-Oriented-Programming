import { ITEM_WIDTH, ITEM_HEIGHT } from "./consts";

class ImageHandler {
	imagePaths = ['../images/grass.png', '../images/stone.png', '../images/character.png', '../images/brick.png', '../images/bomb.png', '../images/fire.png', '../images/character2.png', '../images/fireplus.png', '../images/bombplus.png', '../images/speedup.png', '../images/character4.png', '../images/character3.png', '../images/bombbutton.png', '../images/up.png', '../images/down.png', '../images/right.png', '../images/left.png']
	loadedImages = []

	loadImages() {
		this.loadedImages[imageKeys.GRASS] = this.loadAndResizeImage('../images/grass.png', ITEM_WIDTH, ITEM_HEIGHT);
		this.loadedImages[imageKeys.STONE] = this.loadAndResizeImage('../images/stone.png', ITEM_WIDTH, ITEM_HEIGHT);
		this.loadedImages[imageKeys.CHARACTER] = this.loadAndResizeImage('../images/character.png', ITEM_WIDTH, ITEM_HEIGHT);
		this.loadedImages[imageKeys.BRICK] = this.loadAndResizeImage('../images/brick.png', ITEM_WIDTH, ITEM_HEIGHT);
		this.loadedImages[imageKeys.BOMB] = this.loadAndResizeImage('../images/bomb.png', ITEM_WIDTH, ITEM_HEIGHT);
		this.loadedImages[imageKeys.FIRE] = this.loadAndResizeImage('../images/fire.png', ITEM_WIDTH, ITEM_HEIGHT);
		this.loadedImages[imageKeys.DEAD_CHARACTER] = this.loadAndResizeImage('../images/character2.png', ITEM_WIDTH, ITEM_HEIGHT);
		this.loadedImages[imageKeys.FIREPLUS] = this.loadAndResizeImage('../images/fireplus.png', ITEM_WIDTH, ITEM_HEIGHT);
		this.loadedImages[imageKeys.BOMBPLUS] = this.loadAndResizeImage('../images/bombplus.png', ITEM_WIDTH, ITEM_HEIGHT);
		this.loadedImages[imageKeys.SPEEDUP] = this.loadAndResizeImage('../images/speedup.png', ITEM_WIDTH, ITEM_HEIGHT);
		this.loadedImages[imageKeys.ENEMY] = this.loadAndResizeImage('../images/character4.png', ITEM_WIDTH, ITEM_HEIGHT);
		this.loadedImages[imageKeys.DEAD_ENEMY] = this.loadAndResizeImage('../images/character3.png', ITEM_WIDTH, ITEM_HEIGHT);
		this.loadedImages[imageKeys.BOMB_BUTTON] = this.loadAndResizeImage('../images/bombbutton.png', ITEM_WIDTH, ITEM_HEIGHT);
		this.loadedImages[imageKeys.UP] = this.loadAndResizeImage('../images/up.png', ITEM_WIDTH, ITEM_HEIGHT);
		this.loadedImages[imageKeys.DOWN] = this.loadAndResizeImage('../images/down.png', ITEM_WIDTH, ITEM_HEIGHT);
		this.loadedImages[imageKeys.RIGHT] = this.loadAndResizeImage('../images/right.png', ITEM_WIDTH, ITEM_HEIGHT);
		this.loadedImages[imageKeys.LEFT] = this.loadAndResizeImage('../images/left.png', ITEM_WIDTH, ITEM_HEIGHT);
	}

	loadAndResizeImage(imgPath, targetWidth, targetHeight) {
		const img = loadImage(imgPath);
		img.resize(targetWidth, targetHeight);
		return img;
	}
}

export default new ImageHandler();

export const imageKeys = { GRASS: 0, STONE: 1, CHARACTER: 2, BRICK: 3, BOMB: 4, FIRE: 5, DEAD_CHARACTER: 6, FIREPLUS: 7, BOMBPLUS: 8, SPEEDUP: 9, ENEMY: 10, DEAD_ENEMY: 11, BOMB_BUTTON: 12, UP: 13, DOWN: 14, RIGHT: 15, LEFT: 16 }
