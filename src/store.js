import { reactive } from 'vue'

export const store = reactive({
    menuItems:[
        {
            name: 'homepage',
            label: 'home'
        },
        {
            name: 'projects',
            label: 'portfolio'
        }
    ]
});