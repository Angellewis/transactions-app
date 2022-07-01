<template>
  <div class="home">
    <b-button @click="GetTransactions">Click Me</b-button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import TransactionService from "@/services/transaction.service";

export default class HomeView extends Vue {

  mounted() {
    this.GetTransactions();
  }

  public async GetTransactions() {
    var transactionService = new TransactionService();
    const result = await transactionService.getAll();
    console.log(result);
  }
}
</script>