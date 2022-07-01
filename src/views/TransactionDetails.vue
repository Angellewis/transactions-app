<template>
  <div class="main-container">
    <b-loading :is-full-page="true" v-model="isLoading"></b-loading>
    <div class="top-menu">
      <b-button
        label="Go Back"
        type="is-info is-light"
        icon-left="arrow-left-circle"
        @click="GoBack"
      />
    </div>
    <div class="transaction-container">
      <div class="transaction-form">
        <b-field label="Concept">
          <b-input
            v-model="transaction.concept"
            required
            placeholder="Type your concept"
            class="transaction-input"
          >
          </b-input>
        </b-field>
        <b-field v-if="isDescriptionFilled()" label="Description">
          <b-input
            v-model="transaction.description"
            required
            placeholder="Type your description"
            class="transaction-input"
          >
          </b-input>
        </b-field>
        <b-field label="Ammount">
          <b-input
            type="number"
            placeholder="0,00"
            v-model="transaction.ammount"
            required
            class="transaction-input"
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
        <div>
          <b-button
            class="field"
            type="is-warning is-light"
            @click="EditTransaction()"
            >Edit Transaction</b-button
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component } from "vue-property-decorator";
import TransactionService from "@/services/transaction.service";
import BaseVue from "@/core";
import { Transaction } from "@/models/base/transaction.model";
import Helpers from "@/core/helpers";
@Component
export default class TransactionDetails extends BaseVue {
  isLoading: boolean = false;
  transaction!: Transaction;
  selectedDate: Date = new Date();
  transactionService: TransactionService = new TransactionService();

  constructor() {
    super();
    this.transaction = this.$store.state.currentTransaction;
    this.selectedDate = Helpers.ConvertStringToDate(
      new Date(this.transaction.date),
      1
    );
  }

  GoBack() {
    this.$router.push("/");
  }

  isDescriptionFilled() {
    if (this.transaction.description != "") return true;
    else return false;
  }

  async EditTransaction() {
    if (this.ValidateModel()) {
      this.operationFailed("Please validate all the fields.");
    } else {
      this.isLoading = true;
      this.transaction.ammount = Number(this.transaction.ammount);
      this.transaction.date = Helpers.ConvertDateToString(this.selectedDate);
      try {
        const result = await this.transactionService.put(
          null,
          this.transaction
        );
        if (result.data.success) {
          this.isLoading = false;
          this.operationSuccess();
        } else {
          this.operationFailed(result.data.errorMessage);
        }
      } catch (error: any) {
        this.isLoading = false;
        this.operationFailed(error.response.data.errorMessage);
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
.top-menu {
  display: flex;
}

.transaction-container {
  display: flex;
  align-items: center;
  justify-content: center;
}

.transaction-form {
  width: 500px;
}

.field {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.transaction-input {
  width: 400px;
}
</style>