require('./bootstrap');
require('./particles');
require('./errors.js');
import router from './routes';
import Animate from 'animate.css';
class Errors {
	constructor() {
		this.errors = {} // default empty
	}
	// Get the error.
	get(field) {
		if(this.errors[field]) {
			return this.errors[field][0];
		}
	}
	record(errors) {
		this.errors = errors;
	}
	clear(field) {
		delete this.errors[field];
	}
	any() {
		return Object.keys(this.errors).length > 0;
	}
}
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
    	errors: new Errors,
    	isFlying: false,
    	isShaking: false,
    	baseSubmit: {
    		color: 'white',
    		background: 'rgb(231, 76, 60)',
    	},
    	isDisabled: false
    },
    methods: {
    	sendMessage() {
    		axios.post('/contact', this.$data)
    			.then(response => this.isFlying = true)
    			.catch(error => {
    			  this.errors.record(error.response.data.errors)
    			  this.isShaking = true;
    			  this.isDisabled = true;
    			}
    			 );  
    		},
    		unshake() {
    			this.isShaking = false;
    		}
    }
});
