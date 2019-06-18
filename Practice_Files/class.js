class Users{
    constructor(name,age,salary){
        this.name=name;
        this.age=age;
        this.salary=salary;
        this.vacation=20;
    }
    getName(){
        return this.name
    }
    setName(name){
      this.name=name
    }

    getAge(){
        return this.age
    }
    setName(age){
      this.age=age
    }
    getSalary(){
        return this.salary
    }
    setName(salary){
      this.salary=salary
    }
    applyLeave(num){
        if(this.vacation >= num)this.vacation=this.vacation-num
        return this.vacation
    }
}

let mohan = new Users('gokul',22,22000)
let leave=mohan.applyLeave(15)
console.log(mohan)
