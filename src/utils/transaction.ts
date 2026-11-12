import { Transaction, TransactionType } from "@/types/transaction";


export function sumAmount(transactions: Transaction[], type: TransactionType):number{
    return transactions
    .filter((t) => t.type === type)
    .reduce((total, t)=> total+ t.amount, 0);
}