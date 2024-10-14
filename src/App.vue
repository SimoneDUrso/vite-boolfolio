<script>
import axios from 'axios';
import ProjectCard from './components/ProjectCard.vue';

export default {
  components: {
    ProjectCard,
  },

  data(){
    return{
      projects: [],
    }
  },

  created() {
    this.getProjects();
  },

  methods: {
    getProjects(){
      axios.get('http://127.0.0.1:8000/api/projects').then((response) => {
        // console.log(response.data.results);

        this.projects = response.data.results;

      });
    }
  },
  
}
</script>

<template>
  <div class="container">
    <div class="row">
      <ProjectCard v-for="project in projects" :key="project.id" :project="project"/>
    </div>
  </div>
</template>
<style lang="scss">
  @import './styles/generals.scss';
</style>
