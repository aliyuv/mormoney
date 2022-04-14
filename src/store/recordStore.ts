import recordListModel from "@/models/recordListModels";

export default {
    recordList: recordListModel.fetch(),
    createRecord: (record: RecordItem) => recordListModel.create(record),
};