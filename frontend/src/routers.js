import {createRouter, createWebHistory} from 'vue-router'   
import Home from './components/AppHome.vue'
import Report1 from './components/AppReportOne.vue'
import Report2 from './components/AppReportTwo.vue'




const routes = [
    {
        path: '/', 
        name: 'home',
        component: Home,
    },
    {
        path: '/report1',
        name: 'report1', 
        component: Report1
    },
    {
        path: '/report2',
        name: 'report2', 
        component: Report2
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;
