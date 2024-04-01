class BankAccount {
	constructor(accountNumber, owner, balance) {
		this.accountNumber = accountNumber;
		this.owner = owner;
		this.balance = balance;
	}
	deposit(amount) {
		this.balance += amount;
	}
	withdraw(amount) {
		if (amount > this.balance) {
			console.log("Insufficient funds");
			return;
		}
		this.balance -= amount;
	}
	getBalance() {
		return this.balance;
	}
	displayAccountInfo() {
		return `Account Number: ${this.accountNumber}\nOwner Name: ${this.owner}\nBalance: ${this.balance}`;
	}
}

const account1 = new BankAccount(12345, "Alice", 1000);
const account2 = new BankAccount(67890, "Bob", 500);

//Account1
account1.deposit(2000);
account1.withdraw(2000);
console.log("Balance=", account1.getBalance());
console.log(account1.displayAccountInfo());

//account2
account2.deposit(2000);
account2.withdraw(7000);
console.log(account2.getBalance());
console.log(account2.displayAccountInfo());
