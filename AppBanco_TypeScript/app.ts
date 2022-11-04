import { CompanyAccount } from './class/CompanyAccount'
import { DioAccount } from './class/DioAccount'
import { PeopleAccount } from './class/PeopleAccount'
import { NewTypePeople } from './class/newTypePeople'

const people = new PeopleAccount('Rafael', 22, 0)
console.log(' - - - - - People Account - - - - - ')
console.log(people.getName())
console.log(people.getBalance())

people.deposit(20)
console.log(people.getBalance())
people.deposit(30)
console.log(people.getBalance())
people.withdraw(50)
console.log(people.getBalance())

let str = ' - +'
console.log(str.repeat(12))

const company = new CompanyAccount('DIO', 22, 0)
console.log(' - - - - - Company Account - - - - - ')
console.log(company.getName())
console.log(company.getStatus())
console.log(company.getBalance())
console.log(company.getAccountNumber())

company.deposit(10);
console.log(company.getBalance())
company.deposit(10);
console.log(company.getBalance())
company.withdraw(10);
console.log(company.getBalance())
company.getLoan(100);
console.log(company.getBalance())

console.log(str.repeat(11))

const newType = new NewTypePeople('People', 22, 0)
console.log(' - - - - - NewTupePeople Account - - - - - ')
console.log(newType.getName())
console.log(newType.getBalance())

newType.deposit(50)
console.log(newType.getBalance())
newType.deposit(30)
console.log(newType.getBalance())
newType.withdraw(100)
console.log(newType.getBalance())