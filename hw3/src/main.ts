import { CUSTOMER_TYPES, Customer } from "./Customer"
import { Store } from "./Store"
import { randomInt } from "./helpers"

const store = new Store()

for (let day = 1; day <= 35; day++) {
	store.trackRentals(day)
	if (store.videos.length === 0) continue
	const visitableCustomers: Customer[] = store.customer.filter((customer) => {
		if (store.videos.length < 3 && customer.type === CUSTOMER_TYPES[1])
			return false
		return true
	})
	if (visitableCustomers.length === 0) continue
	const customerToday =
		visitableCustomers[randomInt(0, visitableCustomers.length - 1)]
	customerToday.rent(store, day)
}

console.log(`Videos currently in Store:`)
store.videos.forEach((video) => {
	console.log(`	${video.name}`)
})

console.log(`Total money earned:`)
console.log(`	${store.money}.`)

console.log(`Rentals:`)
store.rentals.forEach((rental) => {
	console.log(
		`	Video named: ${rental.videos.map((video) => video.name)} rented by: ${
			rental.customer.name
		}, rented from ${rental.rentDay} to ${rental.expireDay},  money paid: ${
			rental.moneyEarned
		} Competion: ${rental.hasReturned ? "Yes" : "Not yet"}`
	)
})
