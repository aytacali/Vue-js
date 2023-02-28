const app = Vue.createApp({
    data: function() {
        return {
            courseGoalA: 'Finish The course and learn Vue!',
            courseGoalB: '<h2>Master Vue and build amazing App!</h2>',
            vueLink: 'https://vuejs.org/'
        };
    },
    methods: {
        outputGoal() {
            const randomNumber = Math.random();
            if (randomNumber < 0.5) {
                return this.courseGoalA;
            } else {
                return this.courseGoalB;
            }
        }
    }
});

app.mount('#user-goal');