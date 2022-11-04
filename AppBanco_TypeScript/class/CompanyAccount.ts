import { DioAccount } from "./DioAccount";

export class CompanyAccount extends DioAccount{

    constructor(name: string, accountNumber: number, balance: number){
        super(name, accountNumber, balance)
    }

    // realiza emprestimo
    getLoan = (inputLoan: number):void => {
        if(this.getStatus()){
            let balanceLoan = this.getBalance()
            this.setBalance(balanceLoan += inputLoan)
        }
    }
}