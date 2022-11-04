export abstract class  DioAccount {
    private status: boolean = true
    private balance: number = 0
    private readonly name: string
    private readonly accountNumber: number

    constructor(name: string, accountNumber: number, balance: number){
        this.name = name
        this.accountNumber = accountNumber
        this.balance = balance
    }

    // retorna nome
    public getName = (): string => {
        return this.name
    }
    
    // retorna o numero da conta
    public getAccountNumber = (): number => {
        return this.accountNumber
    }

    //retorna o status da conta
    public getStatus = (): boolean => {
        return this.status
    }

    // altera o status da conta
    public setStatus = (setValueStatus: boolean): void =>{
        this.status = setValueStatus
    }

    // retorna o saldo da conta
    public getBalance = (): number => {
        return this.balance
    }

    // altera o saldo da conta
    public setBalance = (setBalanceValue: number): void => {
        this.balance = setBalanceValue
    }

    // verifica se tem saldo 
    private doYouHaveBalance = ( outputBalance: number): boolean => {
        let authorized = this.balance >= outputBalance ? true : false
        return authorized
    }

    // realiza deposito na conta
    public deposit = (inputBalance: number): void => {
        this.balance += inputBalance
    }

    // realiza saque somente conta ativa e com saldo
    public withdraw = (outputBalance: number): void => {
        if(this.doYouHaveBalance(outputBalance) && this.status){
            this.balance -= outputBalance;

        console.log('Saque Realizado com sucesso')
        return
        }
        throw Error('Saldo Insuficiente e ou conta')
    }
}