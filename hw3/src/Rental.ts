import { Customer } from "./Customer"
import { Video } from "./Video"

export class Rental {
	expireDay: number
	rentDay: number
	videos: Video[] = []
	customer: Customer
	hasReturned: Boolean = false
	moneyEarned = 0
	constructor(
		expireDay: number,
		rentDay: number,
		videos: Video[],
		customer: Customer,
		moneyEarned: number
	) {
		this.expireDay = expireDay
		this.rentDay = rentDay
		this.videos = videos
		this.customer = customer
		this.moneyEarned = moneyEarned
	}
}
