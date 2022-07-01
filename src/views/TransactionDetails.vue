<template>
  <div class="main-container">
    <div class="top-menu">
      <b-button
        label="Go Back"
        type="is-info is-light"
        icon-left="arrow-left-circle"
        @click="GoBack"
      />
    </div>
    <div>
      <h1>This is an about page</h1>
    </div>
  </div>
</template>

<script lang="ts">
import { Component } from "vue-property-decorator";
import TransactionService from "@/services/transaction.service";
import BaseVue from "@/core";
import { Transaction } from "@/models/base/transaction.model";
import { AxiosError } from "axios";
@Component
export default class TransactionDetails extends BaseVue {
  constructor() {
    super();
  }

  GoBack() {
    this.$router.push("/");
  }
}
</script>

<style>
.top-menu {
  display: flex;
}
</style>