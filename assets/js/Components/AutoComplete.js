import Vue from 'vue';
import AutoCompletePartial from '../Templates/AutoComplete.vue';
import { Z_FILTERED } from 'zlib';

AutoCompletePartial.data = function() {
    return{
        search: '',
        people: [],
        results: []
    }
}


AutoCompletePartial.methods = {
    onChange: function(inp, arr) {
        this.results = []
        console.log('ajsd')
        this.people.forEach(el => {
            if(el.name.toLowerCase().includes(this.search.toLowerCase()) || el.name.toLowerCase() === this.search.toLowerCase()) {
                if(!this.results.includes(el.name)) {
                    console.log(this.results.includes(el.name))
                   
                    this.results.push(el.name)
                    console.log(this.results)
                }
                // this.results = []
            }
        })
    }
}


AutoCompletePartial.created = function() {
    
    fetch('https://jsonplaceholder.typicode.com/users').then(
        (data => data.json())
    ).then(json => this.people = json)
}

export default AutoCompletePartial;