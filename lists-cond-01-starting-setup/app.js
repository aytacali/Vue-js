const app = Vue.createApp({
  data() {
    return {
      enteredGoalValue: '',
      goals: []
    };
  },

  methods: {
    addGoal() {
      this.goals.unshift(this.enteredGoalValue);
    },
    removeGoal(index) {
      this.goals.splice(index, 1)
    },
  }
});

app.mount('#user-goals');
