<script>
import axios from 'axios';
import ProjectCard from '../components/ProjectCard.vue';

    export default {
    components: {
        ProjectCard,
    },

    data(){
        return{
        projects: [],

        first_page: 1, 
        last_page: null,
        }
    },

    created() {
        this.getProjects();
    },

    methods: {
        getProjects(){
        axios.get('http://127.0.0.1:8000/api/projects').then((response) => {
            // console.log(response.data.results);

            this.projects = response.data.results.data;
            this.current_page = response.data.results.current_page;
            this.last_page = response.data.results.last_page;

        });
        },

        paginate(page){
        this.current_page = page;

        axios.get('http://127.0.0.1:8000/api/projects', {params: { page: page}}).then((response) => {
            this.projects = response.data.results.data;
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

        <div class="d-flex justify-content-center">
        <nav aria-label="...">
            <ul class="pagination">
            <li class="page-item">
                <a class="page-link" :class="current_page == 1 ? 'disabled' : '' " href="#" @click="paginate(current_page - 1)">Precedente</a>
            </li>
    
            <li class="page-item" v-for="i in last_page"><a class="page-link" href="#" @click="paginate(i)"> {{ i }} </a></li>
    
            <li class="page-item">
                <a class="page-link" href="#" :class="current_page == last_page ? 'disabled' : '' " @click="paginate(current_page + 1)">Successiva</a>
            </li>
            </ul>
        </nav>
        </div>
    </div>
    </template>
    <style lang="scss">
    </style>