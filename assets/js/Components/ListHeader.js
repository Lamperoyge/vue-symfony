import ListHeaderPartial from '../Templates/ListHeader.vue';

ListHeaderPartial.data = function() {
    return{
        headers: ['Name', 'Email', 'Pozitii', 'Departament', 'idontknowyet', 'idontknowyet', 'idontknowyet'],
        n: 0
    }
}

ListHeaderPartial.mounted = function() {
    this.n = 100 / this.headers.length;
}


export default ListHeaderPartial;