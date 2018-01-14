require('./bootstrap');
require('./particles');
import router from './routes';
import Animate from 'animate.css';

new Vue({
    el: '#app',
    router,
    data: {

    },
    methods: {

    },
    beforeCreate() {

    },
    created() {

    }
});
new Vue({
    el: '#form',
    router,
    data: {
    	name: '',
    	email: '',
    	subject: '',
    	message: '',
    	errors: {}
    },
    methods: {
    	sendMessage() {
    		axios.post('/contact', this.$data)
    			.then(response => alert('Sent!'))
    			.catch(error =>
    			  this.errors = error.response.data.errors
    			 );  
    			console.log(this.errors);	
    		}
    }
});
