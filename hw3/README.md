# 作業三

## Question 1

### main.ts
```typescript
import { CUSTOMER_TYPES, Customer } from "./Customer"
import { Store } from "./Store"
import { randomInt } from "./helpers"

const store = new Store()

console.log(store.videos)
console.log(store.customer)

for (let day = 1; day <= 35; day++) {
	console.log(day, store.videos)
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

console.log(store.rentals)

```
### Video.ts
```typescript
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

```

### Store.ts
```typescript
import { CUSTOMER_TYPES, Customer } from "./Customer"
import { Rental } from "./Rental"
import { VIDEO_CATEGORIES, Video } from "./Video"
import { randomInt } from "./helpers"

export class Store {
	videos: Video[] = []
	rentals: Rental[] = []
	customer: Customer[] = []
	money: Number = 0

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

```

### Rental.ts
```typescript
import { Customer } from "./Customer"
import { Video } from "./Video"

export class Rental {
	expireDay: number
	rentDay: number
	videos: Video[] = []
	customer: Customer
	hasReturned: Boolean = false
	constructor(
		expireDay: number,
		rentDay: number,
		videos: Video[],
		customer: Customer
	) {
		this.expireDay = expireDay
		this.rentDay = rentDay
		this.videos = videos
		this.customer = customer
	}
}

```

### Customer.ts
```typescript
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
		const videos: Video[] = []
		for (let i = 0; i < rentCount; i++) {
			const videoToRent: Video =
				store.videos[randomInt(0, store.videos.length - 1)]
			videos.push(videoToRent)
			store.videos = store.videos.filter((video) => video != videoToRent)
		}
		const rental = new Rental(day + nights, day, videos, this)
		store.rentals.push(rental)
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

```

### helpers.ts
```typescript
export function randomInt(floor: number, ceil: number): number {
	return Math.ceil(Math.random() * (ceil - floor + 1)) + floor - 1
}


```

## Question 2

### 1.UML class diagram
![Class Diagram](./classDiagram.png)

### 2.程式編譯與運行方法
```bash

```

### 3.程式說明
