<template>
  <div class="main-container">
    <b-loading :is-full-page="true" v-model="isLoading"></b-loading>
    <div class="top-content-container">
      <div class="top-content-container">
        <b-field>
          <span class="error" v-if="isSpecialCharacter">Please remove all special characters</span>
          <b-input
            placeholder="Search..."
            type="search"
            v-model="inputSearch"
            icon="magnify"
          >
          </b-input>
        </b-field>
        <b-button style="margin-left: 10px" @click="sortList()"
          >Order List</b-button
        >
      </div>
      <div>
        <b-button
          type="is-success is-light"
          @click="isTransactionFormOpen = true"
          >Create transaction</b-button
        >
      </div>
    </div>
    <div class="transactions-container">
      <div
        class="card card-box"
        v-for="transaction in filteredList()"
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
      <div class="card error" v-if="inputSearch && !filteredList().length">
        No results found!
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
import { Component, Watch } from "vue-property-decorator";
import TransactionService from "@/services/transaction.service";
import BaseVue from "@/core";
import { Transaction } from "@/models/base/transaction.model";

@Component
export default class TransactionComponent extends BaseVue {
  transactionService: TransactionService = new TransactionService();
  isLoading: boolean = false;
  isSorted: boolean = false;
  isTransactionFormOpen: boolean = false;
  isSpecialCharacter: boolean = false;
  transactionsList: Transaction[] = [];
  inputSearch: string = "";

  constructor() {
    super();
  }

  async mounted() {
    this.transactionsList = await this.GetTransactions();
  }

  filteredList() {
    return this.transactionsList.filter((transaction) =>
      transaction.concept.toLowerCase().includes(this.inputSearch.toLowerCase())
    );
  }

  sortList() {
    this.isSorted = !this.isSorted;
    if (this.isSorted) {
      this.transactionsList = this.filteredList().sort((a, b) =>
        a.concept.localeCompare(b.concept)
      );
    } else {
      this.transactionsList = this.filteredList().sort((a, b) =>
        b.concept.localeCompare(a.concept)
      );
    }
  }

  @Watch("inputSearch")
  searchSpecialCharacters(val: string) {
    if (/[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(val)) {
      this.isSpecialCharacter = true;
    } else {
      this.isSpecialCharacter = false;
    }
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

.error {
  background-color: tomato;
}
</style>