<template>
    <div class = "vue-list-grid-header">
        <span class = "header"  v-for="header in headers" v-bind:style="{width: n + 'vh'}">
            {{header}}
        </span>
    </div>
</template>
