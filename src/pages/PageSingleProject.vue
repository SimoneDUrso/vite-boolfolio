<script>
import { store } from '../store';
import axios from 'axios';

export default {
    data(){
        return{
            store,

            project: [],
        }
    },

    methods: {
        getSingleProject(){
            axios.get(`${store.url}${store.urlProject}/${this.$route.params.slug}`).then((result) => {
                this.project = result.data.results;
            });
        }
    },

    created() {
        this.getSingleProject();
    },
}
</script>
<template>
    <div class="container">
        <div class="row">
            <div class="col-12 d-flex justify-content-center mt-5">
                <div class="card custom-card mt-5" v-if="project.image_project">
                    
                        <img class="img-fluid img-fixed-size" :src=" project.image_project.startsWith('http') ? project.image_project : `http://127.0.0.1:8000/storage/${project.image_project}` " :alt="project.name">
                    
                    <div class="card-body">
                        <h5 class="card-title">{{ project.name }}</h5>
                        <p class="card-text">{{ project.description }}</p>
                        <p v-if="project.technologies && project.technologies.length > 0">
                            <strong>Tecnologie:</strong>
                            <span class="mx-1" v-for="(techno, index) in project.technologies" :key="index">
                                {{ techno.name }}
                            </span>
                        </p>
                        <span class="mx-1" v-if="project.type">
                            <strong>Tipo:</strong>
                            {{ project.type.name }}
                        </span>
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">{{ project.date }}</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.custom-card {
    width: 30rem;
    border: none;
    border-radius: 15px;
    overflow: hidden;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    background-color: #f9f9f9;

    &:hover {
        transform: translateY(-10px);
        box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
    }

    img {
        border-top-left-radius: 15px;
        border-top-right-radius: 15px;
        height: 200px;
        object-fit: cover;
    }

    .card-body {
        padding: 20px;
        text-align: center;

        .card-title {
            font-size: 1.5rem;
            font-weight: bold;
            color: #343a40;
        }

        .card-text {
            font-size: 1rem;
            color: #6c757d;
            margin-top: 10px;
        }
    }

    .list-group-item {
        background-color: #f9f9f9;
        font-size: 0.9rem;
        color: #495057;
        text-align: center;
    }
}
</style>