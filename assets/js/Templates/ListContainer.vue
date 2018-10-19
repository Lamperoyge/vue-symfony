<template>
    <div class = "vue-list-grid-container">
        <div class = "vue-list-grid-row">
            <list-header> </list-header>
            <list-table :tableData="['Alex', 'alex@alex.com', 'Dev', 'Front-end', 'Something More', 'Something More', 'Something More']"></list-table>
            <list-table></list-table>
            <list-table></list-table>
            <list-table></list-table>
            <list-table></list-table>
        </div>
    </div>
</template>


<script>
    import ListHeader from  '../Components/ListHeader.js'
    import ListTable from '../Components/ListTable.js'

    export default{
        components:{
            'list-header': ListHeader,
            'list-table': ListTable
        }
    }
</script>