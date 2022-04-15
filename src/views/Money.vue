<template>
  <LayOut class-prefix="layout">
    <NumberPad @update:value="onUpdateAmount" @submit="saveRecord"/>
    <Tabs :data-source="recordTypeList" :value.sync="record.type"/>
    <FormItem @update:value="onUpdateNotes" fiel-name="备注" placeholder="请输入备注信息"/>
    <Tags/>
  </LayOut>
</template>

<script lang="ts">
import Vue from "vue";
import NumberPad from "@/components/Money/NumberPad.vue";
import Types from "@/components/Money/Types.vue";
import FormItem from "@/components/Money/FormItem.vue";
import Tags from "@/components/Money/Tags.vue";
import {Component} from "vue-property-decorator";
import recordTypeList from "@/constants/recordTypeList";
import Tabs from "@/components/Tabs.vue";

@Component({
  components: {Tabs, Tags, FormItem, Types, NumberPad}
})
export default class Money extends Vue {

  get recordList() {
    return this.$store.state.recordList;
  }


  recordTypeList = recordTypeList;
  record: RecordItem = {
    tags: [], notes: "", type: "-", amount: 0
  };

  created() {
    this.$store.commit("fetchRecords");
  }

  onUpdateNotes(value: string) {
    this.record.notes = value;
  }

  onUpdateAmount(value: string) {
    this.record.amount = parseFloat(value);
  }

  saveRecord() {
    this.$store.commit("createRecord", this.record);
  }
}
</script>

<style lang="scss">
.layout-content {
  display: flex;
  flex-direction: column-reverse;
}
</style>