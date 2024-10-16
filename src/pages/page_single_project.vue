<script>
import { store } from '../store';
import axios from 'axios';

export default {
    data(){
        return{
            store,
        }
    },

    methods: {
        getSingleProject(){
            axios.get(`${store.url}${store.urlProject}${this.$route.params.slug}`).then((result) => {
                console.log(result);
            });
        }
    },

}
</script>
<template>
    <div>
        
    </div>
</template>
<style lang="scss" scoped>
    
</style>