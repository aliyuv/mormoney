<template>
  <div>
    <LayOut>
      <Tabs :data-source="typeList" :value.sync="type" class-prefix="type"/>
      <Tabs :data-source="intervalList" :value.sync="interval" class-prefix="interval"/>
      <div>
        type:{{ type }}
        <br>
        interval:{{ interval }}
      </div>
    </LayOut>
  </div>
</template>

<script lang="ts">
import Types from "@/components/Money/Types.vue";
import Vue from "vue";
import {Component} from "vue-property-decorator";
import Tabs from "@/components/Tabs.vue";

@Component({
  components: {Tabs, Types}
})
export default class Statistics extends Vue {
  type = "-";
  interval = "day";
  intervalList = [
    {text: "按天", value: "day"},
    {text: "按周", value: "week"},
    {text: "按月", value: "moth"},
  ];
  typeList = [
    {text: "支出", value: "-"},
    {text: "收入", value: "+"},
  ];
}
</script>

<style scoped lang="scss">
::v-deep .type-tabs-item {
  background: white;

  &.selected {
    background: #c4c4c4;

    &::after {
      display: none;
    }
  }
}
</style>
