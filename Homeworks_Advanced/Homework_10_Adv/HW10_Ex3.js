class Person {
  constructor (firstName, lastName, gender, age){
    this.firstName = firstName;
    this.lastName = lastName;
    this.gender = gender;
    this.age = age;
    
  }
  set firstName(f){
       if (typeof(f)==='string' && f.length>1){
          this._firstName = f;
      } else { console.log('Please type valid first name') }
  }
  get firstName(){
    return this._firstName;
  }
   set lastName(l){
       if (typeof(l)==='string' && l.length>1){
          this._lastName = l;
      } else { console.log('Please type valid last name') }
  }
  get lastName(){
    return this._lastName;
  }
  set gender(g){
      if (typeof(g)=='string' && g =='Male'|| g =='Female'){
          this._gender = g;
      } else { console.log('Please type valid gender') }
  }
  get gender(){
    return this._gender
  }
  set age(a){
    if(typeof(a)==='number' && a>=10 && a<= 100){
      this._age = a;
    } else {console.log('Please type valid age')}
  }
  get age(){
    return this._age;
  }
  toString(){
    return ` First name -${this.firstName} \n Last name -${this.lastName}, \n Gender -${this.gender}, \n Age -${this.age}`
  }
}
class Student extends Person {
  constructor (firstName, lastName, gender, age, program, year, fee){
            super(firstName, lastName, gender, age)
            this.program = program;
            this.year = year;
            this.age = age;
            this.fee = fee;
            this.data = {};
            for(let e of this._program){
                this.data[e]=0;
           }
  }
  set year (y){
    if(typeof(y)=='number' && y>=1900 && y<= 2022){
      this._year = y;
    } else {console.log('Please enter valid year')}
  }
  get year(){
    return this._year;
  }
   set fee (e){
    if(typeof(e)==='number' && e>=0){
      this._fee = e;
    } else {console.log('Please enter valid fee')}
  }
  get fee(){
    return this._fee;
  }
  set program(p){
    this._program = [];
    if(typeof(p) == 'string' && p.length >=5){
      let stringArray = p.split(',');
    for(let i = 0; i<stringArray.length; i++){
        this._program.push(stringArray[i]);
    }
   
    } else {console.log('Please enter valid program')}
  }
  get program(){
    return this._program;
  }
   passExam(program, grade){
     let sum =0;
      if(this.program.includes(program)){
        this.data[program] = grade;
        for(let key in this.data){
          sum+=this.data[key]
        }
        if(sum>=50){
          this.year++;
        }
      } else {console.log('Program or grade you have inputed are wrong')}
    }
  toString(){
    return ` First name -${this.firstName} \n Last name -${this.lastName}, \n Gender -${this.gender}, \n Age -${this.age}
    \n Program -${this.program}, \n Year -${this.year}, \n Fee -${this.fee}
    `
  }
}

class Teacher extends Person {
  constructor(firstName, lastName, gender, age, program, pay){
    super(firstName, lastName, gender, age);
    this.program = program;
    this.pay = pay;
  }
  set program(p){
    if(typeof(p)==='string' && p.length>=5){
      this._program = p;
    } else {console.log('Please enter valid program')}
  }
  get program(){
    return this._program;
  }
  set pay(p){
    if(typeof(p)==='number'&& p>=0){
      this._pay = p;
    } else{console.log('Please enter valid pay amount')}
  }
  get pay(){
    return this._pay;
  }
   
}

