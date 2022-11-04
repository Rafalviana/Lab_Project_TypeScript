import { DioAccount } from "./DioAccount";

export class PeopleAccount extends DioAccount{

    constructor(name: string, accountNumber: number, balance: number){
        super(name, accountNumber, balance)
    }
}