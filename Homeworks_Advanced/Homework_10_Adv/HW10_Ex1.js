class Author {
  constructor (name, email, gender){
     this.name = name;
     this.email = email;
     this.gender = gender;
  }
  set name(n){
      if (typeof(n)==='string' && n.length>1){
          this._name = n;
      } else { console.log('Please type valid name') }
  }
  get name(){
      return this._name
  }
  set email(e){
      if (typeof(e)=='string' && e.length>5 && e.includes('@')){
          this._email = e;
      } else { console.log('Please type valid email') }
  }
  get email(){
     return this._email;
  }
  set gender(g){
      if (typeof(g)=='string' && g =='Male'|| g =='Female'){
          this._gender = g;
      } else { console.log('Please type valid gender') }
  }
  get gender(){
    return this._gender
  }
  toString(){
    return ` Name -${this.name} \n Email -${this.email}, \n Gender -${this.gender}`
  }

}
class Book {
  constructor (title, author, price, quantity){
     this.title = title;
     this.author = author;
     this.price = price;
     this.quantity = quantity;
  }
  set title(t){
      if (typeof(t)=='string' && t.length>1){
          this._title = t;
      } else { console.log('Please type valid title') }
  }
  get title(){
      return this._title
  }
  set author(b){
    if(b instanceof Author){
      this._author = b;
    } else {console.log('No such author')}
  }
  get author(){
    return this._author.name;
  }
  set price(p){
      if (typeof(p)=='number' && p > 0){
          this._price = p;
      } else { console.log('Please type valid price') }
  }
  get price(){
     return this._price;
  }
  set quantity(q){
      if (typeof(q)=='number' && q >= 0){
          this._quantity = q;
      } else { console.log('Please type valid quantity') }
  }
  get quantity(){
    return this._quantity;
  }
  totalProfit () {
    return ` AMD - ${this.quantity * this.price}`;
  }

   toString(){
    return ` Title - ${this.title} \n Author - ${this.author} \n Price - AMD ${this.price}  \n Quantity - ${this.quantity}`
  }
}

let a = new Author('Hakob', 'Hagob@mail.ru', 'Male')
let b = new Book('Adasd', a, 5000, 100)
console.log(b.toString())
console.log(b.totalProfit())
