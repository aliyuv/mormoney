<template>
  <LayOut>
    <div class="navBar">
      <Icon class="leftIcon" name="left"/>
      <span>编辑标签</span>
      <span class="rightIcon"></span>
    </div>
    <div class="form-wrapper">
      <FormItem
          fiel-name="标签名"
          placeholder="请输入标签名"
          :value="tag.name"
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
  // eslint-disable-next-line no-undef
  tag?: Tag = undefined;

  created() {
    this.tag = window.findTag(this.$route.params.id);
    if (!this.tag){
      this.$router.replace('/404');
    }
  }

  update(name: string) {
    if (this.tag) {
      window.updateTag(this.tag.id, name);
    }
  }

  remove() {
    if (this.tag) {
      if (window.removeTag(this.tag.id)) {
        this.$router.back();
      } else {
        window.alert("删除失败");
      }
    }
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