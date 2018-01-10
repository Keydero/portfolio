<template>
    <div class="container">
        <div class="row">
            <div class=" box col-md-8 col-md-offset-2">
                <div class="panel panel-default">
                    <div class="panel-heading"><b>Posts :</b></div>
<article class="message is-dark" v-for="event in events">
  <div class="message-header">
<router-link tag="b" :key="event.id" :to="'posts/' + event.id">
    <p>{{event.title}}</p>
</router-link>
  </div>
  <div class="message-body">
  {{event.body}}
  </div>
</article>
                    <div class="panel-body">                      
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                events: []
            }
        },
        created() {
axios.get('/articles')
.then(response => {this.events = response.data;}).catch(function (error) {console.log(error);});
    }
    }
</script>
