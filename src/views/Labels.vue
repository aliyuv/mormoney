<template>
  <LayOut>
    <div class="tags">
      <router-link
          v-for="tag in tags"
          :key="tag.id"
          :to="`/labels/edit/${tag.id}`"
          class="tag"
      >
        <span>{{ tag.name }} @@@</span>
        <Icon name="right"/>
      </router-link>
    </div>
    <div class="createTag-wrapper">
      <Button class="createTag" @click="createTag">新建标签</Button>
    </div>
  </LayOut>
</template>

<script lang="ts">
import Vue from "vue";
import {Component} from "vue-property-decorator";
import Button from "@/components/Button.vue";
@Component({
  components: {Button}
})
export default class Labels extends Vue {
  //TODO
  // tags = store.tagList; // 知识点1
  tags = [];
  createTag() {
    const name = window.prompt("请输入标签名");
    if (name) {
      //TODO
      // store.createTag(name);
    }
  }
}
</script>

<style lang="scss" scoped>
.tags {
  background: white;
  font-size: 16px;
  padding-left: 16px;

  > .tag {
    min-height: 44px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #e6e6e6;

    svg {
      width: 18px;
      height: 18px;
      color: #666;
      margin-right: 16px;
    }
  }
}

.createTag {
  background: #767676;
  color: white;
  border: none;
  height: 40px;
  padding: 0 16px;

  &-wrapper {
    text-align: center;
    padding: 16px;
    margin-top: 44-16px;
  }
}
</style>
