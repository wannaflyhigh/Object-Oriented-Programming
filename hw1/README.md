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
```javascript
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
```javascript
class Car {
      constructor(make, model, engineType) {
            this.make = make;
            this.model = model;
            this.engineType = engineType;
      }

      getEngineDetails() {
            return `Engine type: ${this.engineType}`;
      }
}

const myCar = new Car('Toyota', 'Corolla', 'Gasoline');
console.log(myCar.getEngineDetails()); // Output: Engine type: Gasoline
```

<br>

**2.Encapsulation**

`definition` 

Encapsulation is the bundling of data and methods that operate on the data into a single unit or class. It hides the internal state of an object and only exposes the necessary functionalities through methods.

`Example of great use`

`Example of bad use`

<br>

**3.Cohesion**

`definition` 

Cohesion refers to the degree to which elements within a module or class are related and contribute to a single, well-defined purpose. High cohesion indicates that the elements within the class are closely related and focused on achieving a specific task.

<br>

**4.Coupling**

`definition` 

Coupling refers to the degree of interdependence between modules (classes), and it measures how much one class relies on another class.

`Example of great use`
```javascript
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

<br>
