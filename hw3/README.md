# 作業三

## Question 1

### main.ts
```typescript
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

```

### Store.ts
```typescript
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

	addRental(newRental: Rental) {
		this.rentals.push(newRental)
	}

	payMoney(moneyToPay: number) {
		this.money += moneyToPay
	}

	setVideos(videos: Video[]) {
		this.videos = videos
	}
}

```

### Rental.ts
```typescript
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
	private name: string
	private type: string
	private videos: Video[] = []
	constructor(name: string, type: string) {
		this.name = name
		this.type = type
	}

	rent(store: Store, day: number) {
		const { rentCount, nights } = customerTypeToRentCountAndNights(this, store)
		let moneyToPay = 0
		for (let i = 0; i < rentCount; i++) {
			const videoToRent: Video =
				store.getVideos()[randomInt(0, store.getVideos().length - 1)]
			moneyToPay += videoToRent.getPrice()
			this.videos.push(videoToRent)
			store.setVideos(store.getVideos().filter((video) => video != videoToRent))
		}
		const rental = new Rental(day + nights, day, this.videos, this, moneyToPay)
		store.addRental(rental)
		store.payMoney(moneyToPay)
	}

	return(store: Store) {
		this.videos.forEach((video) => {
			store.getVideos().push(video)
		})
		this.videos = []
	}

	getName(): string {
		return this.name
	}

	getType(): string {
		return this.type
	}

	getVideos(): Video[] {
		return this.videos
	}
}

function customerTypeToRentCountAndNights(customer: Customer, store: Store) {
	let rentCount: number = -1,
		nights: number = -1
	switch (customer.getType()) {
		case CUSTOMER_TYPES[0]:
			rentCount = store.getVideos().length >= 2 ? randomInt(1, 2) : 1
			nights = randomInt(1, 2)
			return { rentCount, nights }

		case CUSTOMER_TYPES[1]:
			rentCount = 3
			nights = 7
			return { rentCount, nights }

		case CUSTOMER_TYPES[2]:
			rentCount =
				store.getVideos().length >= 3
					? randomInt(1, 3)
					: randomInt(1, store.getVideos().length)
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
cd hw3
ts-node .\src\main.ts
```

### 3.程式說明
本程式將模擬的過程所需的元素以4個物件來串接構成，分別是店面(Store)、顧客(Customer)、影片(Video)以及租借訂單(Rental)。透過4類物件的依賴關係建構整個過程，並使用顧客的兩個行為(租借和歸還)來主導租借訂單的建立以及影片的流向。

程式開始時，會隨機生成屬性不一樣的20個影片和10個顧客，作為店面運行的依據，然後便會開始進行為期35天的模擬。

每一天開始時，會從符合條件(即該顧客type所需最少租借數>=店內所剩影片數)的顧客中抽取，被抽中的顧客會到訪並實行租借行為，租借數量和時間則會依據顧客的type來亂數決定，進而成立Rental。然後重複這個過程，直到抽中當天不再有顧客到訪的情況。

當某個Rental租期到時，顧客會實行歸還行為，將持有的影片組交還店家。

模擬完畢後，會輸出模擬結果，可以看見所有租借訂單的詳細資訊。
