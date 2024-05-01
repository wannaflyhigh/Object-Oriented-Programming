import { Rental } from "./Rental"
import { Store } from "./Store"
import { Video } from "./Video"
import { randomInt } from "./helpers"

export const CUSTOMER_TYPES = ["Breezy", "Hoarders", "Regular"]
export const customerTypeToMinRent = new Map([
	[CUSTOMER_TYPES[0], 1],
	[CUSTOMER_TYPES[1], 3],
	[CUSTOMER_TYPES[2], 1],
])

export class Customer {
	name: string
	type: string
	videos: Video[] = []
	constructor(name: string, type: string) {
		this.name = name
		this.type = type
	}

	rent(store: Store, day: number) {
		const { rentCount, nights } = customerTypeToRentCountAndNights(this, store)
		let moneyToPay = 0
		for (let i = 0; i < rentCount; i++) {
			const videoToRent: Video =
				store.videos[randomInt(0, store.videos.length - 1)]
			moneyToPay += videoToRent.price
			this.videos.push(videoToRent)
			store.videos = store.videos.filter((video) => video != videoToRent)
		}
		const rental = new Rental(day + nights, day, this.videos, this, moneyToPay)
		store.rentals.push(rental)
		store.money += moneyToPay
	}

	return(store: Store) {
		this.videos.forEach((video) => {
			store.videos.push(video)
		})
		this.videos = []
	}
}

function customerTypeToRentCountAndNights(customer: Customer, store: Store) {
	let rentCount: number = -1,
		nights: number = -1
	switch (customer.type) {
		case CUSTOMER_TYPES[0]:
			rentCount = store.videos.length >= 2 ? randomInt(1, 2) : 1
			nights = randomInt(1, 2)
			return { rentCount, nights }

		case CUSTOMER_TYPES[1]:
			rentCount = 3
			nights = 7
			return { rentCount, nights }

		case CUSTOMER_TYPES[2]:
			rentCount =
				store.videos.length >= 3
					? randomInt(1, 3)
					: randomInt(1, store.videos.length)
			nights = randomInt(3, 5)
			return { rentCount, nights }
	}
	return { rentCount, nights }
}
