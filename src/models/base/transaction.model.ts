import Base from "./base.model";

export interface Transaction extends Base {
    concept: string
    description: string
    ammount: number
    date: string
    accountId: string
    candidateId: string
}