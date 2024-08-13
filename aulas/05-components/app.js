const app = Vue.createApp({
  data() {
    return {
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
});

// Um componente é um objeto que contém um template, data, methods, computed, etc.
// O nome sempre deve ser em kebab-case.
// Para conectar o componente com o HTML, usamos template
app.component('friend-contact', {
  template: `
    <li>
      <h2>{{friend.name}}</h2>
      <button @click="toggleDetails">
        {{detailsAreVisible ? 'Hide' : 'Show'}} Details
      </button>
      <ul v-if="detailsAreVisible">
        <li><strong>Phone:</strong>{{friend.phone}}</li>
        <li><strong>Email:</strong>{{friend.email}}</li>
      </ul>
    </li>
  `,
  data() {
    return {
      detailsAreVisible: false,
      friend: {
        id: 'manuel',
        name: 'Manuel Lorenz',
        phone: '12345 67890',
        email: 'manuel@localhost.com'
      },
    };
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    }
  },
});

app.mount('#app')