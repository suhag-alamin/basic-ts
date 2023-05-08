class BankAccount {
  readonly id: number;
  public accountName: string;
  private _balance: number;

  // getter
  get balance(): number {
    return this._balance;
  }

  // setter
  set deposit(amount: number) {
    this._balance += amount;
  }

  constructor(id: number, accountName: string, _balance: number) {
    this.id = id;
    this.accountName = accountName;
    this._balance = _balance;
  }
}

const newAccount = new BankAccount(1, "Suhag", 5000);

console.log(newAccount.balance);
newAccount.deposit = 1200;
console.log(newAccount.balance);
