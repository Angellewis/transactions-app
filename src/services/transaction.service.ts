import BaseService from "./base.service";
import { Transaction } from "@/models/base/transaction.model";

export default class TransactionService extends BaseService<Transaction> {
    constructor() {
        super("transactions");
    }
}