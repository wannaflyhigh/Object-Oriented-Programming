class ImageHandler {
	imagePaths = ['../images/grass.png', '../images/stone.png']
	loadedImages

	loadImages() {
		this.loadedImages = this.imagePaths.map(imagePath => {
			return loadImage(imagePath)
		})
	}
}

export default new ImageHandler()