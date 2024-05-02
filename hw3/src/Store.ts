import { CUSTOMER_TYPES, Customer } from "./Customer"
import { Rental } from "./Rental"
import { VIDEO_CATEGORIES, Video } from "./Video"
import { randomInt } from "./helpers"

export class Store {
	private videos: Video[] = []
	private rentals: Rental[] = []
	private customer: Customer[] = []
	private money: number = 0

	constructor() {
		this.createVideos()
		this.createCustomers()
		this.updatePrice()
	}

	private createVideos() {
		for (let i = 0; i < 20; i++) {
			const currentVideo = new Video(
				`Video${i + 1}`,
				VIDEO_CATEGORIES[randomInt(0, 4)]
			)
			this.videos.push(currentVideo)
		}
	}

	private createCustomers() {
		for (let i = 0; i < 10; i++) {
			const currentCustomer = new Customer(
				`Customer${i + 1}`,
				CUSTOMER_TYPES[randomInt(0, 2)]
			)
			this.customer.push(currentCustomer)
		}
	}

	private updatePrice() {
        const mapCategoriesToPrice = new Map(
            VIDEO_CATEGORIES.map((category) => [category, randomInt(1, 10)])
        )
        this.videos = this.videos.map((video) => {
            video.setPrice(mapCategoriesToPrice.get(video.getCategories()) || 0)
            return video
        })
    }

	trackRentals(day: number) {
		this.rentals.forEach((rental) => {
			if (rental.getHasReturned() === true) return
			if (rental.getExpireDay() === day) {
				rental.getCustomer().return(this)
				rental.setHasReturned(true)
			}
		})
	}

	getVideos(): Video[] {
        return this.videos
    }

    getRentals(): Rental[] {
        return this.rentals
    }

    getCustomers(): Customer[] {
        return this.customer
    }

    getMoney(): number {
        return this.money
    }
	
}
