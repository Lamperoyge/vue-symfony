import ListPartial from '../Templates/ListTable.vue'


ListPartial.data = function() {
    return{
            tableData: {
                type: Array,
                default: []
            },
            n: {
                type: Number,
                default: 0
            }
    }
}

ListPartial.mounted = function() {
    this.n = 100 / this.tableData.length;
}

export default ListPartial;