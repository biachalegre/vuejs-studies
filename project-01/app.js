// Criação de uma instância da aplicação Vue
const app = Vue.createApp({
  // Definição do estado da aplicação (dados reativos)
  data() {
    // Retorna um objeto que contém os dados que podem ser usados no template
    return {
      // 'courseGoal' e 'vueLink' são propriedades que armazenam o estado da aplicação
      courseGoal: 'Finish the course and learn Vue!',
      vueLink: 'https://vuejs.org/',
    }
  },
  // Definição de métodos da aplicação (funções que podem ser chamadas no template)
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

// Monta a instância do Vue na DOM, conectando o Vue ao elemento HTML com o ID 'user-goal'
app.mount('#user-goal');
