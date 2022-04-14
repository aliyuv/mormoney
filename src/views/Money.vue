<template>
  <LayOut class-prefix="layout">
    <NumberPad @update:value="onUpdateAmount" @submit="saveRecord"/>
    <Types :value.sync="record.type"/>
    <FormItem @update:value="onUpdateNotes" fiel-name="备注" placeholder="请输入备注信息"/>
    <Tags />
  </LayOut>
</template>

<script lang="ts">
import Vue from "vue";
import NumberPad from "@/components/Money/NumberPad.vue";
import Types from "@/components/Money/Types.vue";
import FormItem from "@/components/Money/FormItem.vue";
import Tags from "@/components/Money/Tags.vue";
import {Component} from 'vue-property-decorator';
import store from '@/store/index2';
@Component({
  components: {Tags, FormItem, Types, NumberPad},
})
export default class Money extends Vue {
  tags = store.tagList;
  recordList = store.recordList;
  record: RecordItem = {
    tags: [], notes: "", type: "-", amount: 0
  };
  onUpdateNotes(value: string) {
    this.record.notes = value;
  }

  onUpdateAmount(value: string) {
    this.record.amount = parseFloat(value);
  }

  saveRecord() {
    store.createRecord(this.record);
  }
}
</script>

<style lang="scss">
.layout-content {
  display: flex;
  flex-direction: column-reverse;
}
</style>