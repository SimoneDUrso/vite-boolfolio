import { reactive } from 'vue'

export const store = reactive({
    url: 'http://127.0.0.1:8000/api',
    urlProject: '/projects',

    menuItems:[
        {
            name: 'homepage',
            label: 'home'
        },
        {
            name: 'projects',
            label: 'portfolio'
        },
        {
            name: 'aboutme',
            label: 'About Me'
        },
        // {
        //     name: 'single_project',
        //     label: 'The Project'
        // },
    ]
});