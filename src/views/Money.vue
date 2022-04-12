<template>
  <LayOut class-prefix="layout">
    {{record}}
    <NumberPad @update:value="onUpdateAmount" @submit="saveRecord"/>
    <Types :value.sync="record.type"/>
    <FormItem @update:value="onUpdateNotes" fiel-name="备注" placeholder="请输入备注信息"/>
    <Tags :data-source.sync="tags" @update:value="onUpdateTags" />
  </LayOut>
</template>

<script lang="ts">
import Vue from "vue";
import NumberPad from "@/components/Money/NumberPad.vue";
import Types from "@/components/Money/Types.vue";
import FormItem from "@/components/Money/FormItem.vue";
import Tags from "@/components/Money/Tags.vue";
import {Component, Watch} from "vue-property-decorator";
import recordListModel from "@/models/recordListModels";
import tagListModel from "@/models/tagListModel";

const recordList = recordListModel.fetch();
const tagList = tagListModel.fetch();
@Component({
  components: {Tags, FormItem, Types, NumberPad},
})
export default class Money extends Vue {
  tags = tagList;
  recordList: RecordItem[] = recordList;
  record: RecordItem = {
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

  saveRecord() {
    const record2: RecordItem = recordListModel.clone(this.record);
    // add time
    record2.createdAt = new Date();
    this.recordList.push(record2);
  }

  @Watch("recordList")
  onRecordListChange() {
    recordListModel.save(this.recordList);
  }
}
</script>

<style lang="scss">
.layout-content {
  display: flex;
  flex-direction: column-reverse;
}
</style>