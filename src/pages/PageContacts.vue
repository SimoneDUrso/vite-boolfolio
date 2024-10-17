<script>
import { store } from '../store';
import axios from 'axios';

export default {
    data(){
        return{
            store,

            name: '',
            surname: '',
            email: '',
            phone: '',
            content: '',

            errors: '',
            loading: false

        }
    },

    methods: {
        sendForm(){
            this.loading = true;

            const data = {
                name: this.name,
                surname: this.surname,
                email: this.email,
                phone: this.phone,
                content: this.content
            }

            this.errors = {

            }

            axios.post(`${store.url}/contacts`, data).then((res) => {
                if(res.data.success){
                    this.name = '',
                    this.surname = '',
                    this.email = '',
                    this.phone = '',
                    this.content = ''
                    this.loading = false;
                }
                else{
                    this.errors = res.data.errors
                }

            });
        }
    },
}
</script>
<template>
    <div class="container mt-5">
        <form method="post" @submit.prevent="sendForm">
            <div class="row gy-4 p-4 border rounded shadow-sm bg-light">
                <!-- Nome e Cognome -->
                <div class="col-6">
                    <label for="name" class="form-label">Nome</label>
                    <input :class="errors.name ? 'is-invalid' : ''" v-model="name" type="text" name="name" id="name" class="form-control" placeholder="Inserisci il tuo nome" >
                    <p v-for="(error, index) in errors.name" :key="`message-error-${index}`"  class="text-danger">
                        {{ error }}
                    </p>
                </div>

                <div class="col-6">
                    <label for="surname" class="form-label">Cognome</label>
                    <input :class="errors.surname ? 'is-invalid' : ''" v-model="surname" type="text" name="surname" id="surname" class="form-control" placeholder="Inserisci il tuo cognome" >
                    <p v-for="(error, index) in errors.surname" :key="`message-error-${index}`"  class="text-danger">
                        {{ error }}
                    </p>
                </div>

                <!-- Email e Telefono -->
                <div class="col-6">
                    <label for="email" class="form-label">Email</label>
                    <input :class="errors.email ? 'is-invalid' : ''" v-model="email" type="email" name="email" id="email" class="form-control" placeholder="Inserisci la tua email" >
                    <p v-for="(error, index) in errors.email" :key="`message-error-${index}`"  class="text-danger">
                        {{ error }}
                    </p>
                </div>

                <div class="col-6">
                    <label for="phone" class="form-label">Telefono</label>
                    <input :class="errors.phone ? 'is-invalid' : ''" v-model="phone" type="tel" name="phone" id="phone" class="form-control" placeholder="Inserisci il tuo numero di telefono" >
                    <p v-for="(error, index) in errors.phone" :key="`message-error-${index}`"  class="text-danger">
                        {{ error }}
                    </p>
                </div>

                <!-- Messaggio -->
                <div class="col-12">
                    <label for="content" class="form-label">Messaggio</label>
                    <textarea :class="errors.content ? 'is-invalid' : ''" v-model="content" name="content" id="content" rows="5" class="form-control" placeholder="Scrivi il tuo messaggio" ></textarea>
                    <p v-for="(error, index) in errors.content" :key="`message-error-${index}`" class="text-danger" >
                        {{ error }}
                    </p>
                </div>

                <!-- Submit Button -->
                <div class="col-12 text-center">
                    <button type="submit" :disabled="loading" class="btn btn-primary btn-lg mt-4 w-100">{{ loading ? 'Invio in corso...' : 'Invia' }}</button>
                </div>
            </div>
        </form>
    </div>
</template>

<style lang="scss" scoped>
.container {
    max-width: 700px;
    margin: 0 auto;
}

.form-label {
    font-weight: 600;
    color: #34495e;
}

.form-control {
    border: 1px solid #ced4da;
    padding: 10px;
    border-radius: 5px;
    transition: border-color 0.3s ease;
    
    &:focus {
        border-color: #3498db;
        box-shadow: none;
    }
}

.btn-primary {
    background-color: #3498db;
    border-color: #3498db;
    padding: 12px;
    font-size: 16px;
    font-weight: 600;

    &:hover {
        background-color: #2980b9;
        border-color: #2980b9;
    }
}

.shadow-sm {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

@media (max-width: 768px) {
    .btn-lg {
        font-size: 14px;
    }
}
</style>