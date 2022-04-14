//record store
import recordListModel from "@/models/recordListModels";
import tagListModel from "@/models/tagListModel";

const store = {
    recordList: recordListModel.fetch(),
    createRecord: (record: RecordItem) => recordListModel.create(record),

    //tag store
    tagList: tagListModel.fetch(),
    createTag: (name: string) => {
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
    },
    removeTag: (id: string) => {
        return tagListModel.remove(id);
    },
    updateTag: (id: string, name: string) => {
        return tagListModel.update(id, name);
    },
    findTag(id: string) {
        return this.tagList.filter(t => t.id === id)[0];
    }
};
export default store;