import Enemy from "./Items/Enemy"

class ImageHandler {
	imagePaths = ['../images/grass.png', '../images/stone.png', '../images/character.png', '../images/brick.png', '../images/bomb.png', '../images/fire.png', '../images/character2.png', '../images/fireplus.png', '../images/bombplus.png', '../images/speedup.png', '../images/character4.png', '../images/character3.png', '../images/fullscreen_button.png']
	loadedImages

	loadImages() {
		this.loadedImages = this.imagePaths.map(imagePath => {
			return loadImage(imagePath)
		})
	}
}

export default new ImageHandler()

export const imageKeys = { GRASS: 0, STONE: 1, CHARACTER: 2, BRICK: 3, BOMB: 4, FIRE: 5, DEAD_CHARACTER: 6, FIREPLUS: 7, BOMBPLUS: 8, SPEEDUP: 9, ENEMY: 10, DEAD_ENEMY: 11, FULLSCREEN_BUTTON:12}
