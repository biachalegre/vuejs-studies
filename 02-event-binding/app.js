const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      confirmedName: '',
    };
  },
  computed: {
    // computed properties são reativamente atualizadas, ou seja, sempre que uma propriedade que ela depende for atualizada, ela também será
    fullName() {
      if (this.name === '') {
        return '';
      }
      return this.name + ' ' + 'Silva';
    }
  },

  methods: {
    resetInput() {
      this.name = '';
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
