<template>
  <div class="navbar-sticky">
    <b-navbar active v-bind:fixed-top="true">
      <template #brand>
        <b-navbar-item tag="router-link" :to="{ path: '/' }">
          <img alt="Vue logo" src="@/assets/transactionsLogo.png">
        </b-navbar-item>
      </template>
      <template #start>
            <b-navbar-item href="/">
                Home
            </b-navbar-item>
        </template>
    </b-navbar>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({})
export default class NavbarComponent extends Vue {
  windowWidth: number = 0;
  mobileWidthValue = 1030;

  constructor() {
    super();
  }

  get isMobile(): boolean {
    return this.windowWidth < this.mobileWidthValue;
  }

  resized() {
    this.windowWidth = window.innerWidth;
  }

  mounted() {
    window.addEventListener("resize", this.resized);
    this.resized();
  }
}
</script>
