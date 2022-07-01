<template>
  <div class="main-container">
    <b-loading :is-full-page="true" v-model="isLoading"></b-loading>
    <div class="top-content-container">
      <b-field>
        <b-input placeholder="Search..." type="search" icon="magnify">
        </b-input>
        <p class="control">
          <b-button type="is-primary" label="Search" />
        </p>
      </b-field>
      <b-button type="is-success is-light" @click="isTransactionFormOpen = true"
        >Create transaction</b-button
      >
    </div>
    <div class="transactions-container">
      <div
        class="card card-box"
        v-for="transaction in transactionsList"
        :key="transaction.id"
      >
        <div class="card-content" @click="ViewTransaction(transaction)">
          <p class="title">
            {{ transaction.concept }}
          </p>
        </div>
        <footer class="card-footer">
          <a @click="DeleteTransaction(transaction.id)" class="card-footer-item"
            >Delete</a
          >
        </footer>
      </div>
    </div>
    <b-modal
      v-model="isTransactionFormOpen"
      has-modal-card
      :destroy-on-hide="true"
      :can-cancel="false"
    >
      <transaction-form @close="closeModal" />
    </b-modal>
  </div>
</template>

<script lang="ts">
import { Component } from "vue-property-decorator";
import TransactionService from "@/services/transaction.service";
import BaseVue from "@/core";
import { Transaction } from "@/models/base/transaction.model";
import { AxiosError } from "axios";

@Component
export default class TransactionComponent extends BaseVue {
  transactionService: TransactionService = new TransactionService();
  isLoading: boolean = false;
  isTransactionFormOpen: boolean = false;
  transactionsList: Transaction[] = [];
  formProps: {} = {
    email: "evan@you.com",
    password: "testing",
  };

  constructor() {
    super();
  }

  async mounted() {
    this.transactionsList = await this.GetTransactions();
  }

  ViewTransaction(transaction: Transaction | null) {
    this.$store.commit("selectTransaction", transaction);
    this.$router.push("/transaction-details");
  }

  OpenTransactionForm() {}

  async DeleteTransaction(id: string) {
    this.isLoading = true;
    try {
      const result = await this.transactionService.delete(id);
      if (result.data.success) {
        this.transactionsList = await this.GetTransactions();
        this.operationSuccess();
      } else {
        this.operationFailed(result.data.errorMessage);
      }
    } catch (error: any) {
      this.operationFailed(error.response.data.errorMessage);
    } finally {
      this.isLoading = false;
    }
  }

  async GetTransactions(): Promise<Transaction[]> {
    this.isLoading = true;
    var transactionList: Transaction[] = [];
    try {
      const result = await this.transactionService.getAll();
      if (result.data.success) {
        transactionList = result.data.data;
      } else {
        this.operationFailed(result.data.errorMessage);
      }
    } catch (error: any) {
      this.operationFailed(error.response.data.errorMessage);
    } finally {
      this.isLoading = false;
      return transactionList;
    }
  }

  async closeModal() {
    this.transactionsList = await this.GetTransactions();
    this.isTransactionFormOpen = !this.isTransactionFormOpen;
  }
}
</script>

<style>
.transactions-container {
  display: flex;
  flex-wrap: wrap;
}
.transactions-container > * {
  flex: 1 1 450px;
}

.main-container {
  padding: 80px;
}

.card-box {
  cursor: pointer;
}

.top-content-container {
  display: flex;
  justify-content: space-between;
}
</style>