class Account{
  constructor (id, name, balance){
    this.id = id;
    this.name = name;
    this.balance = balance;
  }
  set name(n){
    if(typeof(n) === 'string' && n.length >=3){
       this._name = n;
    } else {console.log('Please enter valid name')}
  }
  get name(){
    return this._name;
  }
  set balance(b){
    if(typeof(b)==='number'){
        this._balance = b;
    } else {console.log('Please enter valid number')}
    
  }
  get balance(){
    return this._balance;
  }
  credit(amount){
    if(typeof(amount)==='number' && amount>0){
      this._balance += amount
       return this._balance + amount;
    } else{console.log('Please enter valid number')}
  }
    debit(amount){
    if(typeof(amount)==='number' && amount>0 && amount<= this.balance){
        this._balance -= amount;
       return this._balance - amount;
    } else{console.log('Amount exceeded balance')}
  }
  transfer(otherAcount, amount){
    if(otherAcount instanceof Account){
      if(typeof(amount)==='number' && amount>0 && amount<= this.balance){
         otherAcount._balance += amount;
         this._balance -= amount;
      } else {console.log('Amount exceeded balance')}
    } else {console.log('Please enter valid account')}
  }
  static identifyAccounts(accountFirst, accountSecond){
    if(accountFirst.id === accountSecond.id && 
       accountFirst.name === accountSecond.name && 
       accountFirst.balance === accountSecond.balance) 
    {
       console.log('The two balances are the same')
    } else {console.log('The two balances are different')}
  }
  toString(){
    return ` ID -${this.id} \n Name -${this.name}, \n Balance -${this.balance}`
  }
}

let k = new Account(51,'asdasd',4100);
let j = new Account(51,'asdasd',4100);
k.transfer(j, 500);
console.log(k.balance);
console.log(j.balance);
console.log(k.toString())
Account.identifyAccounts(k,j)