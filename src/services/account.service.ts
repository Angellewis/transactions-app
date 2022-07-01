import BaseService from "./base.service";
import { Account } from "@/models/base/account.model";

export default class AccountService extends BaseService<Account> {
    constructor() {
        super("accounts");
    }
}