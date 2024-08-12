const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      // confirmedName: '',
      // fullname: '',
      lastname: '',
    };
  },
  // Usar para -> HTTP Requests, timers 
  watch: {
    // Será executado sempre que a propriedade name for alterada
    // Não retorna nada, apenas executa uma ação

    // name(value) {
    //   if (value === '') {
    //     this.fullname = '';
    //   } else {
    //     this.fullname = value + ' ' + this.lastname;
    //   }
    // },
    // lastname(value) {
    //   if (value === '') {
    //     this.fullname = '';
    //   } else {
    //     this.fullname = this.name + ' ' + value;
    //   }
    // }

    // Resetar counter quando chega a 50
    counter(value) {
      if (value > 50) {
        this.counter = 0;
      }
    },
  },
  computed: {
    // computed properties são reativamente atualizadas, ou seja, sempre que uma propriedade que ela depende for atualizada, ela também será
    // não é usado como funções (não são chamadas), mas como propriedades
    fullName() {
      if (this.name === '' || this.lastname === '') {
        return '';
      }
      return this.name + ' ' + this.lastname;
    }
  },
  // apenas usar métodos se quiser recalcular um valor quando qualquer coisa na página mudar (a função é chamada sempre que a página é renderizada)
  methods: {
    resetInput() {
      this.name = '';
      this.lastname = '';
    },
    // confirmInput() {
    //   this.confirmedName = this.name;
    // },
    addCounter(num) {
      this.counter = this.counter + num;
    },
    reduceCounter(num) {
      this.counter = this.counter - num;
    },
    // "event" é um argumento padrão passado pelo browser, para ter acesso a ele, não pode usar o parênteses na chamada da função no HTML. Caso queira que a função receba outro argumento, deve ser escrito $event como primeiro argumento, ex: setName($event, arg)
    setName(event) {
      this.name = event.target.value;
    },

    // submitForm(event) {
    //   event.preventDefault
    //   alert('Formulário enviado!');
    // }

    submitForm() {
      alert('Formulário enviado!');
    }
  }
});
app.mount('#events');
