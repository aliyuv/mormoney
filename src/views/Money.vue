<template>
  <LayOut class-prefix="layout">
    <NumberPad :value.sync="record.amount" @submit="saveRecord"/>
    <Tabs :data-source="recordTypeList" :value.sync="record.type"/>
    <FormItem @update:value="onUpdateNotes" fiel-name="备注" placeholder="请输入备注信息" :value.sync="record.notes" />
    <Tags @update:value="record.tags = $event"/>
  </LayOut>
</template>

<script lang="ts">
import Vue from "vue";
import NumberPad from "@/components/Money/NumberPad.vue";
import FormItem from "@/components/Money/FormItem.vue";
import Tags from "@/components/Money/Tags.vue";
import {Component} from "vue-property-decorator";
import recordTypeList from "@/constants/recordTypeList";
import Tabs from "@/components/Tabs.vue";

@Component({
  components: {Tabs, Tags, FormItem, NumberPad}
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

  saveRecord() {
    if (!this.record.tags || this.record.tags.length === 0) {
      return window.alert("请至少选择一个标签");
    }
    this.$store.commit("createRecord", this.record);
    if (this.$store.state.createRecordError === null) {
      window.alert("已保存");
      this.record.notes = "";
    }
  }
}
</script>

<style lang="scss" scoped>
::v-deep .layout-content {
  display: flex;
  flex-direction: column-reverse;
  border: 1px solid #000;
}
</style>