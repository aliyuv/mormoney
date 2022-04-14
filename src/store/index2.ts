import recordStore from "@/store/recordStore";
import tagStore from "@/store/tagStore";

const store = {
    // record store
    ...recordStore,
    // tag store
    ...tagStore

};

export default store;