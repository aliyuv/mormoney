type RecordItem = {
    tags: string[]
    notes: string
    type: string
    amount: number // 数据类型 object | string
    createdAt?: Date  // 类 / 构造函数
}

type Tag = {
    id: string
    name: string
}
type TagListModel = {
    data: Tag[]
    fetch: () => Tag[]
    create: (name: string) => "success" | "duplicated"
    update: (id: string, name: string) => "success" | "Not Found" | "duplicated"
    save: () => void
    remove: (id: string) => boolean
}

interface Window {
    tagList:Tag []
    createTag:(name: string) => void
    removeTag:(id: string) => boolean
    updateTag:(id: string,name: string) => "success" | "Not Found" | "duplicated"
    findTag:(id:string) => Tag | undefined
    recordList: RecordItem[];
    createRecord: (record: RecordItem) => void
}