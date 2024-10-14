<script>
export default {
    props:{
        project: Object,
    }
}
</script>
<template>
    <div class="col-4 my-3">
        <div class="card h-100 shadow-sm border-0">
            <div class="card-img-top">
                <img class="img-fluid img-fixed-size" :src=" project.image_project.startsWith('http') ? project.image_project : `http://127.0.0.1:8000/storage/${project.image_project}` " alt="{{project.name}}">
            </div>
            <div class="card-body">
                <h4 class="text-center text-dark font-weight-bold mb-3">{{ project.name }}</h4>
                <ul v-if="project.technologies" class="list-inline text-center">
                    <li v-for="techno in project.technologies" class="list-inline-item badge badge-primary mx-1 text-dark">
                        {{ techno.name }}
                    </li>
                </ul>
                <p v-if="project.type" class="text-dark mt-4"><strong>Tipo progetto:</strong> {{ project.type.name }} </p>
                <p class="text-dark"><strong>Numero progetto:</strong> {{ project.id }}</p>
                <p class="text-dark"><strong>Data progetto:</strong> {{ project.date }}</p>
                <p class="text-dark"><strong>Descrizione progetto:</strong> {{ project.description }}</p>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.card {
    transition: all 0.3s ease;
    &:hover {
        transform: translateY(-5px);
        box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
    }
}

.img-fixed-size {
    width: 100%;
    height: 200px;
    object-fit: cover;
    object-position: center;
}

h4 {
    font-size: 1.5rem;
}
</style>