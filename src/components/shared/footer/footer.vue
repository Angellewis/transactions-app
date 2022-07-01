<template>
<footer class="footer">
  <div class="content has-text-centered">
    <p>
      Transactions App.
      All Rights reserveds.
    </p>
  </div>
</footer>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({})
export default class FooterComponent extends Vue {

  constructor() {
    super();
  }
}
</script>

<style>
.footer {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  text-align: center;
}
</style>
