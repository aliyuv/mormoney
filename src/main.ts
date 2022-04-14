import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import Nav from "@/components/Nav.vue";
import LayOut from "@/components/LayOut.vue";
import Icon from "@/components/Icon.vue";
import tagListModel from "@/models/tagListModel";

Vue.config.productionTip = false;
Vue.component("Nav", Nav);
Vue.component("LayOut", LayOut);
Vue.component("Icon", Icon);

window.tagList = tagListModel.fetch();

window.createTag = (name: string) =>{
    if (name) {
        const message = tagListModel.create(name);
        if (message === "duplicated") {
            window.alert("标签名重复了");
        } else if (message === "success") {
            window.alert("添加成功");
        }
    } else if (name === "") {
        window.alert("请输入标签名");
    }
}


new Vue({
    router,
    store,
    render: h => h(App)
}).$mount("#app");
