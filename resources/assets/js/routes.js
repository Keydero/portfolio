import VueRouter from 'vue-router';

let routes = [
    {
        path: '/',
        component: require('./views/Home')
    },


    {
        path: '/skills',
        component: require('./views/Skill.vue')
    },
    {
        path: '/posts',
        component: require('./views/Posts.vue')
    },
    {
        path: '/projects',
        component: require('./views/Project.vue')
    }
];


export default new VueRouter({
    routes,
    linkActiveClass:  'is-active ',
    mode: 'history'
});