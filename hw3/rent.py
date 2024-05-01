import random

class Video:
    def __init__(self, name, category):
        self.name = name
        self.category = category

class Customer:
    def __init__(self, name, customer_type):
        self.name = name
        self.customer_type = customer_type

class Rental:
    def __init__(self, customer, videos, duration):
        self.customer = customer
        self.videos = videos
        self.duration = duration

class VideoRentalStore:
    def __init__(self):
        self.catalog = []
        self.customers = []
        self.rentals = []

    def create_catalog(self):
        categories = ["New Release", "Drama", "Comedy", "Romance", "Horror"]
        for i in range(20):
            video = Video(f"Video {i+1}", random.choice(categories))
            self.catalog.append(video)

    def create_customers(self):
        for i in range(10):
            name = f"Customer {i+1}"
            customer_type = random.choice(["Breezy", "Hoarder", "Regular"])
            customer = Customer(name, customer_type)
            self.customers.append(customer)

    def rent_videos(self, customer):
        videos = random.sample(self.catalog, random.randint(1, 3))
        duration = random.randint(1, 7)
        rental = Rental(customer, videos, duration)
        self.rentals.append(rental)

    def simulate(self, days):
        income = 0
        for _ in range(days):
            if self.catalog:
                num_customers = random.randint(1, min(10, len(self.catalog)))
                for _ in range(num_customers):
                    customer = random.choice(self.customers)
                    self.rent_videos(customer)
            for rental in self.rentals:
                rental.duration -= 1
                if rental.duration == 0:
                    self.return_videos(rental)
                    income += rental.duration * len(rental.videos)
        return income

    def return_videos(self, rental):
        self.rentals.remove(rental)
        for video in rental.videos:
            self.catalog.append(video)

    def report(self):
        print("Videos currently in store:")
        for video in self.catalog:
            print(f"{video.name} - {video.category}")

        total_income = self.simulate(35)
        print(f"\nTotal income during 35 days: ${total_income}")

        print("\nCompleted rentals:")
        for rental in self.rentals:
            print(f"{rental.customer.name} rented {', '.join([video.name for video in rental.videos])} for {rental.duration} days")

        print("\nActive rentals:")
        for rental in self.rentals:
            print(f"{rental.customer.name} rented {', '.join([video.name for video in rental.videos])} for {rental.duration} days")

store = VideoRentalStore()
store.create_catalog()
store.create_customers()
store.report()
