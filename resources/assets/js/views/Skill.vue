<template>
    <div class="container">
        <div class="row">
            <div class="box col-md-8 col-md-offset-2">
                <div class="panel panel-default">
                    <div class="panel-heading "><b>Skills</b></div>
                    <div class="panel-body"> 
                        <div class="skills">
                            <div class="skill">
                                    <div class="skill-header">
                                        <h3>
                                            PHP
                                        </h3>
                                    </div>
                                    <div class="skill-content">
                                        <div class="progress" id="php"></div>
                                    </div>
                                </div>
                                <div class="skill">
                                    <div class="skill-header">
                                        <h3>
                                            JavaScript
                                        </h3>
                                    </div>
                                    <div class="skill-content">
                                        <div class="progress" id="js"></div>
                                    </div>
                                </div>
                                <div class="skill">
                                    <div class="skill-header">
                                        <h3>
                                            Frameworks
                                        </h3>
                                    </div>
                                    <div class="skill-content">
                                        <div class="progress" id="framework"></div>
                                    </div>
                                </div>
                                <div class="skill">
                                    <div class="skill-header">
                                        <h3>
                                            CSS/Front-End
                                        </h3>
                                    </div>
                                    <div class="skill-content">
                                        <div class="progress" id="frontend"></div>
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
var ProgressBar = require('progressbar.js')
    export default {
        mounted() {
            this.php();
            this.js();
            this.frameWork();
            this.frontEnd();
        },
        methods: {
            php() {
var bar = new ProgressBar.Circle(php, {
  color: '#aaa',
  strokeWidth: 4,
  trailWidth: 1,
  easing: 'bounce',
  duration: 1200,
  text: {
    autoStyleContainer: false
  },
  from: { color: '#aaa', width: 1 },
  to: { color: '#333', width: 4 },
  // Set default step function for all animate calls
  step: function(state, circle) {
    circle.path.setAttribute('stroke', state.color);
    circle.path.setAttribute('stroke-width', state.width);
    var value = Math.round(circle.value() * 100);
    if (value === 0) {
      circle.setText('');
    } else {
      circle.setText(value);
    }

  }
});
bar.text.style.fontFamily = '"Lato", Helvetica, sans-serif';
bar.text.style.fontSize = '4rem';
bar.text.style.fontWeight = '200';

bar.animate(0.8);  // Number from 0.0 to 1.0
            },
        js() {
var bar = new ProgressBar.Circle(js, {
  color: '#aaa',
  strokeWidth: 4,
  trailWidth: 1,
  easing: 'bounce',
  duration: 1200,
  text: {
    autoStyleContainer: false
  },
  from: { color: '#aaa', width: 1 },
  to: { color: '#333', width: 4 },
  // Set default step function for all animate calls
  step: function(state, circle) {
    circle.path.setAttribute('stroke', state.color);
    circle.path.setAttribute('stroke-width', state.width);
    var value = Math.round(circle.value() * 100);
    if (value === 0) {
      circle.setText('');
    } else {
      circle.setText(value);
    }
  }
});
bar.text.style.fontFamily = '"Lato", Helvetica, sans-serif';
bar.text.style.fontSize = '4rem';
bar.text.style.fontWeight = '200';

bar.animate(0.75);  // Number from 0.0 to 1.0
        },
        frameWork() {
var bar = new ProgressBar.Circle(framework, {
  color: '#aaa',
  strokeWidth: 4,
  trailWidth: 1,
  easing: 'bounce',
  duration: 1200,
  text: {
    autoStyleContainer: false
  },
  from: { color: '#aaa', width: 1 },
  to: { color: '#333', width: 4 },
  // Set default step function for all animate calls
  step: function(state, circle) {
    circle.path.setAttribute('stroke', state.color);
    circle.path.setAttribute('stroke-width', state.width);
    var value = Math.round(circle.value() * 100);
    if (value === 0) {
      circle.setText('');
    } else {
      circle.setText(value);
    }
  }
});
bar.text.style.fontFamily = '"Lato", Helvetica, sans-serif';
bar.text.style.fontSize = '4rem';
bar.text.style.fontWeight = '200';

bar.animate(0.60);
        },
        frontEnd() {
var bar = new ProgressBar.Circle(frontend, {
  color: '#aaa',
  strokeWidth: 4,
  trailWidth: 1,
  easing: 'bounce',
  duration: 1200,
  text: {
    autoStyleContainer: false
  },
  from: { color: '#aaa', width: 1 },
  to: { color: '#333', width: 4 },
  // Set default step function for all animate calls
  step: function(state, circle) {
    circle.path.setAttribute('stroke', state.color);
    circle.path.setAttribute('stroke-width', state.width);
    var value = Math.round(circle.value() * 100);
    if (value === 0) {
      circle.setText('');
    } else {
      circle.setText(value);
    }
  }
});
bar.text.style.fontFamily = '"Lato", Helvetica, sans-serif';
bar.text.style.fontSize = '4rem';
bar.text.style.fontWeight = '200';

bar.animate(0.85);          
        }
        }
    }

</script>
