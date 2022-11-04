import { DioAccount } from "./DioAccount";

export class NewTypePeople extends DioAccount{

    constructor(name: string, accountNumber: number, balance: number){
        super(name, accountNumber, balance)
    }

    // deposito acrescido 10
    public deposit =  (inputBalance: number): void =>{
      if(this.getStatus()){
            let currentBalance = this.getBalance()
            this.setBalance(currentBalance + inputBalance + 10)
      }   
    }
}