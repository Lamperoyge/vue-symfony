require('../../css/list.css');

import Vue from 'vue';
import ListTable from '../Components/ListTable'
import ListHeader from '../Components/ListHeader'
import ListContainer from '../Templates/ListContainer.vue'



new Vue({
    el: "#list",
    components: {ListContainer}
})

