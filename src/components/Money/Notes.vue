<template>
  <div>
    <label class="notes">
      <span class="name">{{ this.fielName }}</span>
      <input type="text" :placeholder="this.placeholder" v-model="value">
    </label>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import {Component, Prop, Watch} from "vue-property-decorator";

@Component
export default class Notes extends Vue {
  value = "";

  @Prop({required: true}) fielName!: string;
  @Prop() placeholder?: string;

  @Watch("value")
  onUpdateNotes(value: string) {
    this.$emit("update:value", value);
  }
}
</script>

<style lang="scss" scoped>
.notes {
  font-size: 14px;
  background: #f5f5f5;
  padding-left: 16px;
  display: flex;
  align-items: center;

  .name {
    padding-right: 16px;
  }

  input {
    height: 64px;
    flex-grow: 1;
    background: transparent;
    border: none;
    padding-right: 16px;
  }
}
</style>