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
