const app = Vue.createApp({
  data() {
    return {
      detailsAreVisible: false,
      friends: [
        {
          id: 'manuel',
          name: 'Manuel Lorenz',
          phone: '12345 67890',
          email: 'manuel@localhost.com'
        },
        {
          id: 'julie',
          name: 'Julie Jones',
          phone: '09876 54321',
          email: 'julie@localhost.com'
        }
      ]
    }
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    }
  },
})
app.mount('#app')