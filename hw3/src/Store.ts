import { CUSTOMER_TYPES, Customer } from "./Customer"
import { Rental } from "./Rental"
import { VIDEO_CATEGORIES, Video } from "./Video"
import { randomInt } from "./helpers"

export class Store {
	videos: Video[] = []
	rentals: Rental[] = []
	customer: Customer[] = []
	money: number = 0

	constructor() {
		this.createVideos()
		this.createCustomers()
		this.updatePrice()
	}

	createVideos() {
		for (let i = 0; i < 20; i++) {
			const currentVideo = new Video(
				`Video${i + 1}`,
				VIDEO_CATEGORIES[randomInt(0, 4)]
			)
			this.videos.push(currentVideo)
		}
	}

	createCustomers() {
		for (let i = 0; i < 10; i++) {
			const currentCustomer = new Customer(
				`Customer${i + 1}`,
				CUSTOMER_TYPES[randomInt(0, 2)]
			)
			this.customer.push(currentCustomer)
		}
	}

	updatePrice() {
		const mapCategoriesToPrice = new Map(
			VIDEO_CATEGORIES.map((category) => [category, randomInt(1, 10)])
		)
		this.videos = this.videos.map((video) => {
			video.price =
				mapCategoriesToPrice.get(video.categories) ||
				(0 && console.error("Some thing go wrong with video categories!"))
			return video
		})
	}

	trackRentals(day: number) {
		this.rentals.forEach((rental) => {
			if (rental.hasReturned === true) return
			if (rental.expireDay === day) {
				rental.customer.return(this)
				rental.hasReturned = true
			}
		})
	}
}
