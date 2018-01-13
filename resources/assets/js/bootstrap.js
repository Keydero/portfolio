/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */
import Vue from 'vue';
import VueRouter from 'vue-router';
import axios from 'axios';


window.Vue = Vue;
Vue.use(VueRouter);

window.axios = axios;
// window.axios.defaults.headers.common= {
//    'X-Requested-with' : 'new XMLHttpRequest' 
// };



window.axios.defaults.headers.common = {
    'X-Requested-With': 'XMLHttpRequest'
};