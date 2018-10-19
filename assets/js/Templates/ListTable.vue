<template>
    <div class = "vue-list-grid-table">
        <span  v-for="data in tableData" class = "table-row" v-bind:style="{width: n + 'vh'}"> {{data}}</span>
    </div>
</template>


