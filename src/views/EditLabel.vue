<template>
  <LayOut>
    <div class="navBar">
      <Icon class="leftIcon" name="left" @click="goBack"/>
      <span>编辑标签</span>
      <span class="rightIcon"></span>
    </div>
    <div class="form-wrapper">
      <FormItem
          fiel-name="标签名"
          placeholder="请输入标签名"
          :value="CurrentTag.name"
          @update:value="update"
      />
    </div>
    <div class="button-wrapper">
      <Button @click="remove">删除标签</Button>
    </div>
  </LayOut>
</template>

<script lang="ts">
import Vue from "vue";
import {Component} from "vue-property-decorator";
import FormItem from "@/components/Money/FormItem.vue";
import Button from "@/components/Button.vue";

@Component({
  components: {Button, FormItem}
})
export default class EditLabel extends Vue {
  get CurrentTag() {
    return this.$store.state.currentTag;
  }

  created() {
    const id = this.$route.params.id;
    //重新获取下tags 解决刷新后404的bug
    this.$store.commit("fetchTags");
    this.$store.commit("setCurrentTag", id);
    if (!this.CurrentTag) {
      this.$router.replace("/404");
    }
  }

  update(name: string) {
    if (this.CurrentTag) {
      this.$store.commit("updateTag", {id: this.CurrentTag.id, name});
    }
  }

  remove() {
    if (this.CurrentTag) {
      this.$store.commit("removeTag", this.CurrentTag.id);
    }
  }

  goBack() {
    this.$router.back();
  }
}
</script>

<style lang="scss" scoped>
.navBar {
  text-align: center;
  font-size: 16px;
  padding: 12px 16px;
  background: white;
  display: flex;
  align-items: center;
  justify-content: space-between;

  > .title {
  }

  > .leftIcon {
    width: 24px;
    height: 24px;
  }

  > .rightIcon {
    width: 24px;
    height: 24px;
  }
}

.form-wrapper {
  background: white;
  margin-top: 8px;
}

.button-wrapper {
  text-align: center;
  padding: 16px;
  margin-top: 44-16px;
}
</style>