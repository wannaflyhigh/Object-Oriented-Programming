import { Customer } from "./Customer"
import { Video } from "./Video"

export class Rental {
	private expireDay: number
	private rentDay: number
	private videos: Video[] = []
	private customer: Customer
	private hasReturned: Boolean = false
	private moneyEarned = 0
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

	getExpireDay(): number {
        return this.expireDay
    }

    getRentDay(): number {
        return this.rentDay
    }

    getVideos(): Video[] {
        return this.videos
    }

    getCustomer(): Customer {
        return this.customer
    }

    getHasReturned(): Boolean {
        return this.hasReturned
    }

    getMoneyEarned(): number {
        return this.moneyEarned
    }

	setHasReturned(value: boolean): void {
        this.hasReturned = value
    }
}
