class ImageHandler {
	imagePaths = ['../images/grass.png', '../images/stone.png', '../images/character.png', '../images/brick.png', '../images/bomb.png', '../images/fire.png']
	loadedImages

	loadImages() {
		this.loadedImages = this.imagePaths.map(imagePath => {
			return loadImage(imagePath)
		})
	}
}

export default new ImageHandler()

export const imageKeys = { GRASS: 0, STONE: 1, CHARACTER: 2, BRICK: 3, BOMB: 4, FIRE: 5 }
