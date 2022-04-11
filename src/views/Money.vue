<template>
  <LayOut class-prefix="layout">
    {{ recordList }}
    <NumberPad @update:value="onUpdateAmount" @submit="saveRecord"/>
    <Types :value.sync="record.type"/>
    <Notes @update:value="onUpdateNotes"/>
    <Tags :data-source.sync="tags" @update:value="onUpdateTags"/>
  </LayOut>
</template>

<script lang="ts">
import Vue from "vue";
import NumberPad from "@/components/Money/NumberPad.vue";
import Types from "@/components/Money/Types.vue";
import Notes from "@/components/Money/Notes.vue";
import Tags from "@/components/Money/Tags.vue";
import {Component, Watch} from "vue-property-decorator";

const recordList: Record[] = JSON.parse(window.localStorage.getItem('recordList') || '[]');
type Record = {
  tags: string[]
  notes: string
  type: string
  amount: number
  createAt?:Date
}
@Component({
  components: {Tags, Notes, Types, NumberPad},
})
export default class Money extends Vue {
  tags = ["衣", "食", "住", "行"];
  recordList: Record[] = recordList;
  record: Record = {
    tags: [], notes: "", type: "-", amount: 0
  };

  onUpdateTags(value: string[]) {
    this.record.tags = value;
  }

  onUpdateNotes(value: string) {
    this.record.notes = value;
  }

  onUpdateAmount(value: string) {
    this.record.amount = parseFloat(value);
  }

  saveRecord(){
    const record2: Record = JSON.parse(JSON.stringify(this.record));
    // add time
    record2.createAt = new Date();
    this.recordList.push(record2);
  }
  @Watch('recordList')
  onRecordListChange(){
    window.localStorage.setItem('recordList',JSON.stringify(this.recordList));
  }
}
</script>

<style lang="scss">
.layout-content {
  display: flex;
  flex-direction: column-reverse;
}
</style>