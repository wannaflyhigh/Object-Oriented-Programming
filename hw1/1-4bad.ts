class PaymentProcessor1 {
    processPayment1(totalAmount: number): void {
      console.log(`Processing payment for $${totalAmount}`);
    }
  }
  
class ShoppingCart1 {
    checkout(): void {
      const paymentProcessor1 = new PaymentProcessor1(); // 正確的變數名稱
      paymentProcessor1.processPayment1(100); 
    }
}
  
const myShoppingCart1 = new ShoppingCart1();
myShoppingCart1.checkout();
  