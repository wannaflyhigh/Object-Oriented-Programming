# 作業一

## 操作說明

### For ts files

```bash
npm install -g ts-node typescript '@types/node'
ts-node file-name.ts
```

## 第一題
**1.Abstraction**

`definition` 

Abstraction refers to the process of simplifying complex reality by modeling classes based on their essential characteristics, hiding unnecessary details.

`Example of great use`
```typescript
class Animal {
      constructor(name) {
            this.name = name;
      }
      
      speak() {
            throw new Error('This method must be implemented in subclass');
      }
}

class Dog extends Animal {
      speak() {
            return `${this.name} says woof!`;
      }
}

const myDog = new Dog('Puppy');
console.log(myDog.speak());
```

`Example of bad use`
```typescript
class Shape {
      constructor(type, sides) {
            this.type = type;
            this.sides = sides;
      }

      calculatePerimeter() {
            throw new Error('This method must be implemented in subclass');
      }
}

class Rectangle extends Shape {
      constructor(length, width) {
            super('rectangle', 4);
            this.length = length;
            this.width = width;
      }

      calculatePerimeter() {
            return 2 * (this.length + this.width);
      }
}

class Circle extends Shape {
      constructor(radius) {
            super('circle', Infinity); 
            this.radius = radius;
      }       

      calculatePerimeter() {
            return 2 * Math.PI * this.radius;
      }
}

const rectangle = new Rectangle(5, 3);
const circle = new Circle(4);
console.log(rectangle.calculatePerimeter()); 
console.log(circle.calculatePerimeter());    
```
In the Circle subclass, the sides property is set to Infinity, which is not meaningful for a circle. This violates the abstraction principle because it introduces unnecessary confusion and complexity.

<br>

**2.Encapsulation**

`definition` 

Encapsulation is the bundling of data and methods that operate on the data into a single unit or class. It hides the internal state of an object and only exposes the necessary functionalities through methods.

`Example of great use`
```typescript
class BankAccount {
  private _accountNumber: string;
  private _balance: number;

  constructor(accountNumber: string, initialBalance: number) {
    this._accountNumber = accountNumber;
    this._balance = initialBalance;
  }

  getBalance(): number {
    return this._balance;
  }

  deposit(amount: number): void {
    this._balance += amount;
    console.log(`Deposited ${amount}. New balance: ${this._balance}`);
  }

  withdraw(amount: number): void {
    if (this._balance >= amount) {
      this._balance -= amount;
      console.log(`Withdrawn ${amount}. New balance: ${this._balance}`);
    } else {
      console.log("Insufficient funds");
    }
  }
}

const account1 = new BankAccount("123456789A", 1000);
console.log("Initial balance:", account1.getBalance());

account1.deposit(500);
account1.withdraw(200);
console.log("Current balance:", account1.getBalance());
```
In TypeScript, through directly specify members as private, making them truly inaccessible from outside the class. <br>
Accessing private variable will compilation error.
<br>

`Example of bad use`
```typescript
class BankAccount {
  public _accountNumber: string;
  public _balance: number;

  constructor(accountNumber: string, initialBalance: number) {
    this._accountNumber = accountNumber;
    this._balance = initialBalance;
  }

  getBalance(): number {
    return this._balance;
  }

  deposit(amount: number): void {
    this._balance += amount;
    console.log(`Deposited ${amount}. New balance: ${this._balance}`);
  }

  withdraw(amount: number): void {
    if (this._balance >= amount) {
      this._balance -= amount;
      console.log(`Withdrawn ${amount}. New balance: ${this._balance}`);
    } else {
      console.log("Insufficient funds");
    }
  }
}

const account1 = new BankAccount("123456789A", 1000);
console.log("Initial balance:", account1.getBalance());

account1.deposit(500);
account1.withdraw(200);
console.log("Current balance:", account1.getBalance());

// access _accountNumber and _balance
console.log("Account Number:", account1._accountNumber);
console.log("Balance:", account1._balance);
```

<br>

**3.Cohesion**

`definition` 

Cohesion refers to the degree to which elements within a module or class are related and contribute to a single, well-defined purpose. High cohesion indicates that the elements within the class are closely related and focused on achieving a specific task.

<br>

**4.Coupling**

`definition` 

Coupling refers to the degree of interdependence between modules (classes), and it measures how much one class relies on another class.

`Example of great use`
```typescript
class PaymentProcessor {
      processPayment(amount) {
            console.log(`Processing payment of ${amount} dollars`);
      }
}

class ShoppingCart {
      constructor(paymentProcessor) {
            this.paymentProcessor = paymentProcessor;
      }
      
      checkout(totalAmount) {
            console.log('Starting checkout process...');
            this.paymentProcessor.processPayment(totalAmount);
            console.log('Checkout completed!');
      }
}

const paymentProcessor = new PaymentProcessor();
const myShoppingCart = new ShoppingCart(paymentProcessor);
myShoppingCart.checkout(1000); 
```

`Example of bad use`
```typescript
class PaymentProcessor {
      processPayment(totalAmount) {
            console.log(`Processing payment for $${totalAmount}`);
      }
}

class ShoppingCart {
      checkout() {
            const paymentProcessor = new PaymentProcessor();
            paymentProcessor.processPayment(100); 
      }
}

const myShoppingCart = new ShoppingCart();
myShoppingCart.checkout();
```
In this example, the ShoppingCart class directly instantiates the PaymentProcessor class within its checkout() method. This creates a hardcoded dependency, tightly coupling the ShoppingCart class to a specific implementation of the PaymentProcessor. 

<br>
