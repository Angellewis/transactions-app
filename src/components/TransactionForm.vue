<template>
  <div class="modal-card" style="width: 500px">
    <b-loading :is-full-page="true" v-model="isLoading"></b-loading>
    <header class="modal-card-head">
      <p class="modal-card-title">Create Transaction</p>
    </header>
    <section class="modal-card-body">
      <b-field label="Concept">
        <b-input
          v-model="transaction.concept"
          required
          placeholder="Type your concept"
        >
        </b-input>
      </b-field>
      <b-field label="Description">
        <b-input
          v-model="transaction.description"
          required
          placeholder="Type your description"
        >
        </b-input>
      </b-field>
      <b-field label="Ammount">
        <b-input
          type="number"
          placeholder="0,00"
          v-model="transaction.ammount"
          required
        >
        </b-input>
      </b-field>
      <b-field label="Select a date">
        <b-datepicker
          placeholder="Click to select..."
          icon="calendar-today"
          v-model="selectedDate"
          trap-focus
          required
        >
        </b-datepicker>
      </b-field>
      <b-field label="AccountId">
        <b-select
          v-model="transaction.accountId"
          placeholder="Select an account Id"
        >
          <option v-for="account in accountList" :key="account.id">
            {{ account.id }}
          </option>
        </b-select>
      </b-field>
    </section>
    <footer class="modal-card-foot">
      <b-button label="Cancel" type="is-danger" @click="$emit('close')" />
      <b-button
        label="Create Transaction"
        type="is-primary"
        @click="CreateTransaction()"
      />
    </footer>
  </div>
</template>

<script lang="ts">
import { Component, Prop } from "vue-property-decorator";
import AccountService from "@/services/account.service";
import BaseVue from "@/core";
import { Transaction } from "@/models/base/transaction.model";
import { Account } from "@/models/base/account.model";
import { AxiosError } from "axios";
import TransactionService from "@/services/transaction.service";
import Helpers from "@/core/helpers";

@Component({})
export default class TransactionForm extends BaseVue {
  accountService: AccountService = new AccountService();
  transactionService: TransactionService = new TransactionService();
  accountList: Account[] = [];
  transaction!: Transaction;
  isLoading: boolean = false;
  selectedDate: Date = new Date();

  constructor() {
    super();
    this.transaction = {} as Transaction;
  }

  async mounted() {
    this.accountList = await this.GetAccounts();
  }

  async GetAccounts(): Promise<Account[]> {
    this.isLoading = true;
    var accountList: Account[] = [];
    try {
      const result = await this.accountService.getAll();
      if (result.data.success) {
        accountList = result.data.data;
      } else {
        this.operationFailed(result.data.errorMessage);
      }
    } catch (error: any) {
      this.operationFailed(error.response.data.errorMessage);
    } finally {
      this.isLoading = false;
      return accountList;
    }
  }

  async CreateTransaction() {
    if (this.ValidateModel()) {
      this.operationFailed("Please validate all the fields.");
    } else {
      this.isLoading = true;
      this.transaction.ammount = Number(this.transaction.ammount);
      this.transaction.candidateId = "af2448b0-dd94-4585-96ee-70b7dd221fc0";
      this.transaction.date = Helpers.ConvertDateToString(this.selectedDate);
      try {
        const result = await this.transactionService.post(this.transaction);
        if (result.data.success) {
          this.isLoading = false;
          this.operationSuccess();
          this.$emit("close");
        } else {
          this.operationFailed(result.data.errorMessage);
        }
      } catch (error: any) {
        this.isLoading = false;
        this.operationFailed(error.response.data.errorMessage);
        this.$emit("close");
      }
    }
  }

  ValidateModel(): boolean {
    if (
      this.transaction.accountId == undefined ||
      this.transaction.ammount == undefined ||
      this.transaction.concept == undefined ||
      this.transaction.description == undefined ||
      this.selectedDate == undefined
    ) {
      return true;
    } else return false;
  }
}
</script>

<style>
</style>