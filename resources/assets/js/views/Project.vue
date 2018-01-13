<template>
    <div class="container">
        <div class="row">
            <div class="box col-md-8 col-md-offset-2">
                <div class="panel panel-default">
                    <div class="panel-heading"><b>Projets</b></div>
                    <div class="panel-body">
                        <div class="projects">
                            <div class="project">
                                <div class="project-image">
<div class="modal is-active" v-if="quizModal">
  <div class="modal-background" @click="closeItToo">></div>
  <div class="modal-content">
    <p class="image is-4by3">
      <img src="/assets/quiz.png" alt="Quiz">
    </p>
  </div>
  <button class="modal-close is-large" aria-label="close" @click="closeIt"></button>
</div>
                                    <img class="quiz" src="/assets/quiz.png" @click="showQuizModal">
                                </div>
                                <div class="project-content">
                                    I released this project with <strong>Symfony 3.1.13</strong>, the purpose was to discover this powerfull framework.
                                    helped me a lot to wrap my mind with relationships.
                                </div>
                            </div>
                            <div class="project">
<div class="modal is-active" v-if="chatModal">
  <div class="modal-background" @click="closeItToo"></div>
  <div class="modal-content">
    <p class="image is-4by3">
      <img src="/assets/chat.png" alt="Chat">
    </p>
  </div>
  <button class="modal-close is-large" aria-label="close" @click="closeIt"></button>
</div>
                                <div class="project-image">
                                    <img class="quiz" src="/assets/chat.png"  @click="showChatModal">
                                </div>
                                <div class="project-content">
                                    I was free to choose the framework i like, so i decided to work with <strong>Laravel 5.5 </strong>, nodeJs, socket.io, and Redis by using events. (I was curious to know how i can hundle events).
                                </div>
                            </div>
                        </div>
                    </div>
                        </div>
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
                chatModal: false,
                quizModal: false
            }
        },
        methods: {
            showQuizModal() {
                this.quizModal = true;
            },
            showChatModal() {
                this.chatModal = true;
            },
            closeIt() {
                this.chatModal = false;
                this.quizModal = false;
            },
            closeItToo() {
                this.chatModal = false;
                this.quizModal = false;              
            },
            hey() {
                console.log('hello')
            }
        }
    }
</script>
