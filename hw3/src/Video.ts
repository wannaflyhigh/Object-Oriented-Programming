export const VIDEO_CATEGORIES = [
	"New Release",
	"Drama",
	"Comedy",
	"Romance",
	"Horror",
]

export class Video {
	private name: string
	private categories: string
	private price: number = 0

	constructor(name: string, categories: string) {
		this.name = name
		this.categories = categories
	}

	getName(): string {
        return this.name;
    }

    getCategories(): string {
        return this.categories;
    }

    getPrice(): number {
        return this.price;
    }

    setPrice(price: number): void {
        this.price = price
    }
}
