export default class ImageHandler {
	imagePaths = ['../images/grass.png']
	loadedImages

	loadImages() {
		this.loadedImages = this.imagePaths.map(imagePath => {
			return loadImage(imagePath)
		})
	}
}
