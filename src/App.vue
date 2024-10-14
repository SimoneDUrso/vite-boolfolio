<script>
import axios from 'axios';

export default {
  data(){
    return{

    }
  },

  created() {
    this.getProjects();
  },

  methods: {
    getProjects(){
      axios.get('http://127.0.0.1:8000/api/projects').then((response) => {
        console.log(response.data.results);
      });
    }
  },
  
}
</script>

<template>
  <div>
    
  </div>
</template>
<style lang="scss">
  
</style>
