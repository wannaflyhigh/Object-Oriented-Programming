export const VIDEO_CATEGORIES = [
	"New Release",
	"Drama",
	"Comedy",
	"Romance",
	"Horror",
]

export class Video {
	name: string
	categories: string
	price: number = 0
	constructor(name: string, categories: string) {
		this.name = name
		this.categories = categories
	}
}
