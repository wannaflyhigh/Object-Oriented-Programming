import { CUSTOMER_TYPES, Customer } from "./Customer"
import { Store } from "./Store"
import { randomInt } from "./helpers"

const store = new Store()

for (let day = 1; day <= 35; day++) {
	store.trackRentals(day)
	if (store.getVideos().length === 0) continue
	const visitableCustomers: Customer[] = store.getCustomers().filter((customer) => {
		if (store.getVideos().length < 3 && customer.getType() === CUSTOMER_TYPES[1])
			return false
		return true
	})
	if (visitableCustomers.length === 0) continue
	const customerToday =
		visitableCustomers[randomInt(0, visitableCustomers.length - 1)]
	customerToday.rent(store, day)
}

console.log(`Videos currently in Store:`)
store.getVideos().forEach((video) => {
	console.log(`	${video.getName()}`)
})

console.log(`Total money earned:`)
console.log(`	${store.getMoney()}.`)

console.log(`Rentals:`)
store.getRentals().forEach((rental) => {
	console.log(
		`	Video named: ${rental.getVideos().map((video) => video.getName())} rented by: ${
			rental.getCustomer().getName()
		}, rented from ${rental.getRentDay()} to ${rental.getExpireDay()},  money paid: ${
			rental.getMoneyEarned()
		} Competion: ${rental.getHasReturned() ? "Yes" : "Not yet"}`
	)
})
