const app = Vue.createApp({
  data() {
    return {
      counter: 0,
    };
  },
  methods: {
    addCounter() {
      this.counter++;
    },
    reduceCounter() {
      this.counter--;
    }
  }
});
app.mount('#events');
