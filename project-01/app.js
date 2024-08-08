// Cria uma instância do Vue
// Passa um objeto para o app para configurar diversas opções
const app = Vue.createApp({
  data() {
    // Sempre retorna um objeto, que podem ser usados no HTML que é controlado pelo Vue
    return {
      // Key Values
      courseGoal: 'Finish the course and learn Vue!',
      vueLink: 'https://vuejs.org/',
    }
  },
  // permite definir funções que serão executadas a partir de eventos
  methods: {
    outputGoal() {
      const randomNumber = Math.random();
      if (randomNumber < 0.5) {
        return 'Learn Vue!';
      } else {
        return 'Master Vue!';
      }
    }
  }
});
// Define o template da aplicação (parte HTML que será controlada pelo Vue)
app.mount('#user-goal');

