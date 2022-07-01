import Base from "./base.model";

export interface Account extends Base {
    id: string
    type: string
    currency: string
    createdAt: string
    updatedAt: string
}