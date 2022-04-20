<template>
  <div id="app">
    <router-view/>
    <div class="qrcode" v-show="maxWidth !== 500">
      <img src="./assets/qrcode.png" alt="">
    </div>
  </div>
</template>

<style lang="scss">
@import "~@/assets/style/helper.scss";
@import "~@/assets/style/reset.scss";

body {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #333;
  font-family: $font-hei;
  font-size: 16px;
  line-height: 1.5;
  background: #f5f5f5;
}

#app {
  max-width: 500px;
  margin: 0 auto;
}

.qrcode {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.25);
}

img {
  max-width: 260px;
}
</style>

<script lang="ts">
import Vue from "vue";
import {Component} from "vue-property-decorator";

@Component
export  default class App extends Vue{
  maxWidth = document.documentElement.scrollWidth
}
</script>
