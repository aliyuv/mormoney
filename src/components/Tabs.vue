<template>
  <div>
    <ul :class="{[classPrefix+'-tabs']:classPrefix}" class="tabs">
      <li v-for="item in dataSource" :key="item.value" @click="select(item)"
          :class="liClass(item)" class="tabs-item" :style="{height:height}">
        {{
          item.text
        }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import {Component, Prop} from "vue-property-decorator";
import FormItem from "@/components/Money/FormItem.vue";

type DataSourceItem = { text: string, value: string };
@Component({
  components: {FormItem}
})
export default class Tabs extends Vue {
  @Prop({required: true, type: Array}) dataSource!: DataSourceItem[];
  @Prop(String) readonly value!: string;
  @Prop(String) classPrefix?: string;
  @Prop({type: String, default: "64px"}) height!: string;

  liClass(item: DataSourceItem) {
    return {
      [this.classPrefix + "-tabs-item"]: this.classPrefix,
      selected: item.value === this.value
    };
  }

  select(item: DataSourceItem) {
    this.$emit("update:value", item.value);
  }
}
</script>

<style lang="scss" scoped>
.tabs {
  background: #C4C4C4;
  display: flex;
  text-align: center;
  font-size: 24px;

  &-item {
    width: 50%;
    //height: 64px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    &.selected::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 4px;
      background: #333;
    }
  }
}
</style>