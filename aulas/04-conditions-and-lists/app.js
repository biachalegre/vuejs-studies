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
      this.userGoalInput = '';
    },
    clearGoal() {
      this.goals = [];
    }
  },
});

app.mount('#user-goals');
