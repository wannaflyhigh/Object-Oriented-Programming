class PaymentProcessor {
    processPayment(amount: number): void {
      console.log(`Processing payment of ${amount} dollars`);
    }
}
  
class ShoppingCart {
    paymentProcessor: PaymentProcessor;

    constructor(paymentProcessor: PaymentProcessor) {
        this.paymentProcessor = paymentProcessor;
    }

    checkout(totalAmount: number): void {
        console.log('Starting checkout process...');
        this.paymentProcessor.processPayment(totalAmount);
        console.log('Checkout completed!');
    }
}
  
const paymentProcessor = new PaymentProcessor();
const myShoppingCart = new ShoppingCart(paymentProcessor);
myShoppingCart.checkout(1000);
  