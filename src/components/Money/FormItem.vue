<template>
  <div>
    <label class="formItem">
      <span class="name">{{ this.fielName }}</span>
      <input type="text" :placeholder="this.placeholder" v-model="value">
    </label>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import {Component, Prop, Watch} from "vue-property-decorator";

@Component
export default class FormItem extends Vue {

  @Prop({default:''}) value!: string;

  @Prop({required: true}) fielName!: string;
  @Prop() placeholder?: string;

  @Watch("value")
  onUpdateNotes(value: string) {
    this.$emit("update:value", value);
  }
}
</script>

<style lang="scss" scoped>
.formItem {
  font-size: 14px;
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