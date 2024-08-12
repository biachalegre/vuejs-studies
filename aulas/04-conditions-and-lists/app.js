const app = Vue.createApp({
  data() {
    return {
      goals: [],
      userGoalInput: '',
    };
  },
  methods: {
    addGoal() {
      this.goals.push(this.userGoalInput);
    },
  },
});

app.mount('#user-goals');
