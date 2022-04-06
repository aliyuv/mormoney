<template>
  <div class="nav-wrapper">
    <div class="content">
      <slot/>
    </div>
    <Nav/>
  </div>
</template>

<script lang="ts">
import x from '@/assets/icons/money.svg';

console.log(x);
export default {
  name: "LayOut"
};
</script>

<style lang="scss" scoped>
.nav-wrapper {
  border: 1px solid green;
  display: flex;
  flex-direction: column;
  height: 100vh;
}
.content{
  //把所有的高度给到content
  flex-grow: 1;
  overflow: auto;
}
</style>